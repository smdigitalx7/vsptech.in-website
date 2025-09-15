import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { sendEmail, generateContactEmailHtml } from "./services/emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission in the database
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification  
      const emailData = {
        ...validatedData,
        organization: validatedData.organization || undefined
      };
      const emailSent = await sendEmail({
        to: process.env.CONTACT_EMAIL || "info@vsptech.com",
        from: process.env.FROM_EMAIL || "noreply@vsptech.com",
        subject: `New Contact Form Submission: ${validatedData.subject}`,
        html: generateContactEmailHtml(emailData),
        text: `
New contact form submission from VSP Technologies website:

Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
${validatedData.organization ? `Organization: ${validatedData.organization}` : ''}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

Please respond directly to: ${validatedData.email}
        `
      });
      
      if (!emailSent) {
        console.warn('Email notification failed, but submission was saved');
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon!",
        id: submission.id
      });
      
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof Error && error.message.includes('validation')) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data and try again." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Sorry, there was an error processing your request. Please try again later." 
        });
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
