import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  sendEmail,
  generateContactEmailHtml,
} from "../server/services/emailService";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  organization: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Check if Mailjet is configured
  if (!process.env.MJ_API_KEY || !process.env.MJ_API_SECRET) {
    console.warn("Mailjet credentials not configured - returning mock success");
    return res.status(200).json({
      success: true,
      message:
        "Thank you for your message. We'll get back to you soon! (Email service not configured)",
    });
  }

  try {
    // Validate the request body
    const validatedData = contactFormSchema.parse(req.body);

    // Send email notification
    const emailData = {
      ...validatedData,
      organization: validatedData.organization || undefined,
    };

    try {
      const emailSent = await sendEmail({
        to: process.env.CONTACT_EMAIL || "contact@vsptech.in",
        from:
          process.env.FROM_EMAIL ||
          process.env.CONTACT_EMAIL ||
          "contact@vsptech.in",
        subject: `New Contact Form Submission: ${validatedData.subject}`,
        html: generateContactEmailHtml(emailData),
        text: `
New contact form submission from VSP Technologies website:

Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
${
  validatedData.organization
    ? `Organization: ${validatedData.organization}`
    : ""
}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

Please respond directly to: ${validatedData.email}
        `,
        replyTo: validatedData.email,
      } as any);

      if (!emailSent) {
        console.warn("Email notification failed");
        return res.status(500).json({
          success: false,
          message: "Email failed to send. Please try again later.",
        });
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return res.status(500).json({
        success: false,
        message: "Email failed to send. Please try again later.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    if (error instanceof Error && error.message.includes("validation")) {
      return res.status(400).json({
        success: false,
        message: "Please check your form data and try again.",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error processing your request. Please try again later.",
    });
  }
}
