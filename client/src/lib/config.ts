/**
 * Application Configuration
 *
 * Centralized configuration for API endpoints and other settings
 */

// Get API base URL from environment variable or use default
// In production, set VITE_API_BASE_URL in your build environment
// For local development with deployed backend, use the Render URL
// For local development with local backend, use http://localhost:8000
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://vsptech-mailservice-brevo.onrender.com";

// Helper function to build full API URL
export function getApiUrl(endpoint: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
}
