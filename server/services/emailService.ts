import "dotenv/config";
import Mailjet from "node-mailjet";

const MJ_API_KEY = process.env.MJ_API_KEY;
const MJ_API_SECRET = process.env.MJ_API_SECRET;

if (!MJ_API_KEY || !MJ_API_SECRET) {
  console.warn(
    "Mailjet credentials (MJ_API_KEY, MJ_API_SECRET) are not set - email functionality will be disabled"
  );
}

const mailjet =
  MJ_API_KEY && MJ_API_SECRET
    ? new Mailjet({ apiKey: MJ_API_KEY, apiSecret: MJ_API_SECRET })
    : null;

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    console.log("=== EMAIL SENDING DEBUG ===");
    console.log("Mailjet configured:", !!mailjet);
    console.log("From:", params.from);
    console.log("To:", params.to);
    console.log("Subject:", params.subject);

    if (!mailjet) {
      console.error("Mailjet credentials are not configured");
      return false;
    }

    // Validate required parameters
    if (!params.to || !params.subject) {
      console.error("Missing required email parameters");
      return false;
    }

    const fromEmail =
      params.from ||
      process.env.FROM_EMAIL ||
      process.env.CONTACT_EMAIL ||
      "noreply@example.com";
    const emailData: any = {
      Messages: [
        {
          From: {
            Email: fromEmail,
            Name: "VSP Technologies",
          },
          To: [
            {
              Email: params.to,
            },
          ],
          ReplyTo: params.replyTo ? { Email: params.replyTo } : undefined,
          Subject: params.subject,
          TextPart: params.text || "",
          HTMLPart: params.html || undefined,
        },
      ],
    };

    console.log("Sending email with data:", JSON.stringify(emailData, null, 2));

    const response = await mailjet
      .post("send", { version: "v3.1" })
      .request(emailData as any);

    console.log("Mailjet response:", JSON.stringify(response.body, null, 2));

    if (response?.body?.Messages?.[0]?.Status !== "success") {
      console.error("Mailjet send failed", response?.body);
      return false;
    }

    console.log("✅ Mail sent via Mailjet successfully");
    return true;
  } catch (error) {
    console.error("❌ Mailjet email error:", error);
    return false;
  }
}

export function generateContactEmailHtml(formData: {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #3b82f6; margin: 0;">VSP Technologies</h1>
          <p style="color: #6b7280; margin: 5px 0 0 0;">New Contact Form Submission</p>
        </div>
        
        <div style="border-left: 4px solid #3b82f6; padding-left: 20px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${
    formData.lastName
  }</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${
            formData.organization
              ? `<p><strong>Organization:</strong> ${formData.organization}</p>`
              : ""
          }
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        
        <div style="border-left: 4px solid #10b981; padding-left: 20px; margin: 20px 0;">
          <h2 style="color: #1f2937; margin-top: 0;">Message</h2>
          <p style="white-space: pre-wrap; line-height: 1.6;">${
            formData.message
          }</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from the VSP Technologies contact form.<br>
            Please respond directly to: ${formData.email}
          </p>
        </div>
      </div>
    </div>
  `;
}
