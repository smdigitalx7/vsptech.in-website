// Development server for API routes
// Run with: node dev-server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import API handlers
import contactHandler from "./api/contact.js";
import healthHandler from "./api/health.js";

// API Routes
app.post("/api/contact", contactHandler);
app.get("/api/health", healthHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log(`📧 Mailjet configured: ${process.env.MJ_API_KEY ? "✅" : "❌"}`);
  console.log(`📬 Contact email: ${process.env.CONTACT_EMAIL || "Not set"}`);
  console.log(`📤 From email: ${process.env.FROM_EMAIL || "Not set"}`);
  console.log("");
  console.log("Available endpoints:");
  console.log(`  GET  http://localhost:${PORT}/api/health`);
  console.log(`  POST http://localhost:${PORT}/api/contact`);
  console.log("");
  console.log("Now start the frontend with: npm run dev");
});
