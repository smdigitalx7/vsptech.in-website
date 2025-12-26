import { apiRequest } from "./queryClient";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  success: boolean;
}

/**
 * Service to handle contact form submissions
 */
export const contactService = {
  /**
   * Submit the contact form data to the backend API
   */
  submit: async (data: ContactFormData): Promise<ContactResponse> => {
    const response = await apiRequest(
      "POST",
      "https://testverseapi.vsptech.in/api/v1/contact",
      data
    );
    return response.json();
  },
};
