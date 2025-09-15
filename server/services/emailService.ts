import { MailService } from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  console.warn(
    "SENDGRID_API_KEY environment variable is not set - email functionality will be disabled"
  );
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SendGrid API key is not configured");
      return false;
    }

    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || "",
      html: params.html,
    });

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("SendGrid email error:", error);
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
