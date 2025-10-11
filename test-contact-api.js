// Simple test script to verify the contact API works
// Run with: node test-contact-api.js

const testData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  organization: "Test Company",
  subject: "Test Message",
  message:
    "This is a test message to verify the contact form API is working correctly.",
};

// Test with invalid data to check validation
const invalidTestData = {
  firstName: "",
  lastName: "Doe",
  email: "invalid-email",
  subject: "Test",
  message: "Short",
};

async function testContactAPI() {
  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", result);

    if (response.ok) {
      console.log("✅ Contact API test passed!");
    } else {
      console.log("❌ Contact API test failed!");
    }
  } catch (error) {
    console.error("❌ Error testing contact API:", error.message);
  }
}

// Test health endpoint
async function testHealthAPI() {
  try {
    const response = await fetch("http://localhost:3000/api/health");
    const result = await response.json();

    console.log("Health check status:", response.status);
    console.log("Health check response:", result);

    if (response.ok) {
      console.log("✅ Health API test passed!");
    } else {
      console.log("❌ Health API test failed!");
    }
  } catch (error) {
    console.error("❌ Error testing health API:", error.message);
  }
}

// Test validation with invalid data
async function testValidationAPI() {
  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invalidTestData),
    });

    const result = await response.json();

    console.log("Validation test status:", response.status);
    console.log("Validation test response:", result);

    if (response.status === 400) {
      console.log("✅ Validation test passed!");
    } else {
      console.log("❌ Validation test failed!");
    }
  } catch (error) {
    console.error("❌ Error testing validation:", error.message);
  }
}

console.log("Testing VSP Technologies API endpoints...\n");

// Run tests
testHealthAPI().then(() => {
  console.log("\n---\n");
  testContactAPI().then(() => {
    console.log("\n---\n");
    testValidationAPI();
  });
});
