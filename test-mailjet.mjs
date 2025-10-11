// Test Mailjet integration with your credentials
// Run with: node test-mailjet.js

// Load environment variables (ES module version)
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const testData = {
  firstName: "Test",
  lastName: "User",
  email: "test@example.com",
  organization: "VSP Technologies",
  subject: "Test Email from VSP Website",
  message:
    "This is a test message to verify Mailjet integration is working correctly with the provided credentials.",
};

async function testMailjetIntegration() {
  console.log("🧪 Testing Mailjet Integration...\n");

  // Check environment variables
  console.log("Environment Variables:");
  console.log("MJ_API_KEY:", process.env.MJ_API_KEY ? "✅ Set" : "❌ Missing");
  console.log(
    "MJ_API_SECRET:",
    process.env.MJ_API_SECRET ? "✅ Set" : "❌ Missing"
  );
  console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL || "❌ Missing");
  console.log("FROM_EMAIL:", process.env.FROM_EMAIL || "❌ Missing");
  console.log("");

  try {
    const response = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log("📧 Contact API Response:");
    console.log("Status:", response.status);
    console.log("Success:", result.success);
    console.log("Message:", result.message);
    console.log("");

    if (response.ok && result.success) {
      console.log("🎉 SUCCESS! Mailjet integration is working!");
      console.log("📬 Check your email inbox for the test message.");
    } else {
      console.log("❌ FAILED! Check the error message above.");
    }
  } catch (error) {
    console.error("❌ Error testing Mailjet:", error.message);
    console.log("\n💡 Make sure your development server is running:");
    console.log("   npm run dev");
  }
}

// Test health endpoint first
async function testHealth() {
  try {
    const response = await fetch("http://localhost:3001/api/health");
    const result = await response.json();

    console.log("🏥 Health Check:");
    console.log("Status:", response.status);
    console.log("Response:", result);
    console.log("");

    if (response.ok) {
      console.log("✅ Health check passed!");
      return true;
    } else {
      console.log("❌ Health check failed!");
      return false;
    }
  } catch (error) {
    console.error("❌ Health check error:", error.message);
    return false;
  }
}

async function runTests() {
  console.log("🚀 VSP Technologies - Mailjet Integration Test\n");

  const healthOk = await testHealth();

  if (healthOk) {
    console.log("---\n");
    await testMailjetIntegration();
  } else {
    console.log("❌ Cannot proceed with Mailjet test - server not running");
    console.log("💡 Start the development server with: npm run dev");
  }
}

runTests();
