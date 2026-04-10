// Test ArangoDB Connection
// Run: node test-db.js

require('dotenv').config();
const { Database } = require("arangojs");

console.log("Testing ArangoDB connection...");
console.log("URL:", process.env.ARANGO_URL);
console.log("Database:", process.env.ARANGO_DATABASE_NAME);
console.log("Username:", process.env.ARANGO_USERNAME);
console.log("Password:", process.env.ARANGO_PASSWORD ? "***SET***" : "NOT SET");

const db = new Database({
  url: process.env.ARANGO_URL,
  databaseName: process.env.ARANGO_DATABASE_NAME,
  auth: {
    username: process.env.ARANGO_USERNAME,
    password: process.env.ARANGO_PASSWORD,
  },
  agentOptions: {
    timeout: 60000,
  },
});

async function test() {
  try {
    console.log("\nAttempting to connect...");
    await db.get();
    console.log("✅ SUCCESS! Connected to ArangoDB!");
    console.log("Database:", process.env.ARANGO_DATABASE_NAME, "exists and is accessible.");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ CONNECTION FAILED!");
    console.error("Error message:", error.message);
    console.error("Error code:", error.errorNum || "N/A");
    console.error("\nFull error details:");
    console.error(error);
    
    // Common error messages
    if (error.message.includes("401") || error.message.includes("unauthorized")) {
      console.error("\n💡 Fix: Check your username and password are correct");
    } else if (error.message.includes("404") || error.message.includes("not found")) {
      console.error("\n💡 Fix: Database doesn't exist. Create it in ArangoDB Cloud");
    } else if (error.message.includes("ECONNREFUSED") || error.message.includes("timeout")) {
      console.error("\n💡 Fix: Check your ARANGO_URL is correct and accessible");
    } else if (error.message.includes("SSL") || error.message.includes("certificate")) {
      console.error("\n💡 Fix: Make sure URL uses https:// not http://");
    }
    
    process.exit(1);
  }
}

test();
