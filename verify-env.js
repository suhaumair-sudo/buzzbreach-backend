// Verification script for backend .env file
// Run: node verify-env.js

require('dotenv').config();

console.log('\n🔍 Verifying Backend .env Configuration...\n');
console.log('='.repeat(60));

let hasErrors = false;
let hasWarnings = false;

// Check Server Config
console.log('\n1️⃣  Server Configuration:');
const port = process.env.PORT || '5000';
const nodeEnv = process.env.NODE_ENV || 'development';
console.log(`   ✅ PORT: ${port}`);
console.log(`   ✅ NODE_ENV: ${nodeEnv}`);

// Check ArangoDB
console.log('\n2️⃣  ArangoDB Configuration:');
const arangoUrl = process.env.ARANGO_URL;
const arangoDb = process.env.ARANGO_DATABASE_NAME;
const arangoUser = process.env.ARANGO_USERNAME;
const arangoPass = process.env.ARANGO_PASSWORD;

if (!arangoUrl) {
  console.log('   ❌ ARANGO_URL is missing!');
  hasErrors = true;
} else {
  console.log(`   ✅ ARANGO_URL: ${arangoUrl}`);
  if (arangoUrl.includes('localhost') || arangoUrl.includes('127.0.0.1')) {
    console.log('   ⚠️  Warning: Using localhost. This won\'t work in production!');
    hasWarnings = true;
  }
}

if (!arangoDb) {
  console.log('   ❌ ARANGO_DATABASE_NAME is missing!');
  hasErrors = true;
} else {
  console.log(`   ✅ ARANGO_DATABASE_NAME: ${arangoDb}`);
}

if (!arangoUser) {
  console.log('   ❌ ARANGO_USERNAME is missing!');
  hasErrors = true;
} else {
  console.log(`   ✅ ARANGO_USERNAME: ${arangoUser}`);
}

if (!arangoPass) {
  console.log('   ❌ ARANGO_PASSWORD is missing!');
  hasErrors = true;
} else {
  console.log(`   ✅ ARANGO_PASSWORD: ${arangoPass ? '***SET***' : 'NOT SET'}`);
}

// Check Keycloak
console.log('\n3️⃣  Keycloak Configuration:');
const keycloakUrl = process.env.KEYCLOAK_URL;
const keycloakAdminClientId = process.env.KEYCLOAK_ADMIN_CLIENT_ID;
const keycloakAdminUsername = process.env.KEYCLOAK_ADMIN_USERNAME;
const keycloakAdminPassword = process.env.KEYCLOAK_ADMIN_PASSWORD;
const keycloakAdminGrantType = process.env.KEYCLOAK_ADMIN_GRANT_TYPE;
const realmName = process.env.REALM_NAME;
const keycloakClientId = process.env.KEYCLOAK_CLIENT_ID;

if (!keycloakUrl) {
  console.log('   ❌ KEYCLOAK_URL is missing!');
  console.log('   💡 This is REQUIRED for user registration!');
  hasErrors = true;
} else {
  console.log(`   ✅ KEYCLOAK_URL: ${keycloakUrl}`);
  if (keycloakUrl.includes('localhost') || keycloakUrl.includes('127.0.0.1')) {
    console.log('   ❌ ERROR: Using localhost! This won\'t work in production!');
    console.log('   💡 Use your Railway Keycloak URL: https://buzzbreach-keycloak-production.up.railway.app');
    hasErrors = true;
  }
  if (keycloakUrl.includes('/realms/')) {
    console.log('   ⚠️  Warning: KEYCLOAK_URL should NOT include /realms/');
    console.log('   💡 Use base URL only: https://buzzbreach-keycloak-production.up.railway.app');
    hasWarnings = true;
  }
  if (!keycloakUrl.startsWith('https://')) {
    console.log('   ⚠️  Warning: Should use https:// for production');
    hasWarnings = true;
  }
}

if (!keycloakAdminUsername) {
  console.log('   ❌ KEYCLOAK_ADMIN_USERNAME is missing!');
  console.log('   💡 Required for user registration. Set to: admin');
  hasErrors = true;
} else {
  console.log(`   ✅ KEYCLOAK_ADMIN_USERNAME: ${keycloakAdminUsername}`);
}

if (!keycloakAdminPassword) {
  console.log('   ❌ KEYCLOAK_ADMIN_PASSWORD is missing!');
  console.log('   💡 Required for user registration. Set to: admin (or your Keycloak admin password)');
  hasErrors = true;
} else {
  console.log(`   ✅ KEYCLOAK_ADMIN_PASSWORD: ${keycloakAdminPassword ? '***SET***' : 'NOT SET'}`);
}

if (!keycloakAdminClientId) {
  console.log('   ⚠️  KEYCLOAK_ADMIN_CLIENT_ID not set (will use default: admin-cli)');
  hasWarnings = true;
} else {
  console.log(`   ✅ KEYCLOAK_ADMIN_CLIENT_ID: ${keycloakAdminClientId}`);
}

if (!keycloakAdminGrantType) {
  console.log('   ⚠️  KEYCLOAK_ADMIN_GRANT_TYPE not set (will use default: password)');
  hasWarnings = true;
} else {
  console.log(`   ✅ KEYCLOAK_ADMIN_GRANT_TYPE: ${keycloakAdminGrantType}`);
}

if (!realmName) {
  console.log('   ⚠️  REALM_NAME not set (will use default: buzzbreach)');
  hasWarnings = true;
} else {
  console.log(`   ✅ REALM_NAME: ${realmName}`);
}

if (!keycloakClientId) {
  console.log('   ⚠️  KEYCLOAK_CLIENT_ID not set (will use default: buzzbreach-client)');
  hasWarnings = true;
} else {
  console.log(`   ✅ KEYCLOAK_CLIENT_ID: ${keycloakClientId}`);
}

// Check Base URL
console.log('\n4️⃣  Base URL Configuration:');
const baseUrl = process.env.BASE_URL;
if (!baseUrl) {
  console.log('   ⚠️  BASE_URL not set (optional, but recommended)');
  hasWarnings = true;
} else {
  console.log(`   ✅ BASE_URL: ${baseUrl}`);
  if (baseUrl.includes('localhost')) {
    console.log('   ⚠️  Warning: Using localhost. Update to your Railway backend URL for production.');
    hasWarnings = true;
  }
}

// Check JWT Secret
console.log('\n5️⃣  Security Configuration:');
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
  console.log('   ⚠️  JWT_SECRET not set (will use default dev secret)');
  hasWarnings = true;
} else {
  console.log(`   ✅ JWT_SECRET: ${jwtSecret ? '***SET***' : 'NOT SET'}`);
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary:');

if (hasErrors) {
  console.log('   ❌ Configuration has ERRORS. Fix them above!');
  console.log('\n💡 Critical Issues:');
  if (!keycloakUrl || keycloakUrl.includes('localhost')) {
    console.log('   - KEYCLOAK_URL must be set to your Railway Keycloak URL');
  }
  if (!keycloakAdminUsername || !keycloakAdminPassword) {
    console.log('   - KEYCLOAK_ADMIN_USERNAME and KEYCLOAK_ADMIN_PASSWORD are required for registration');
  }
  if (!arangoUrl || !arangoDb || !arangoUser || !arangoPass) {
    console.log('   - ArangoDB configuration is incomplete');
  }
  process.exit(1);
} else if (hasWarnings) {
  console.log('   ⚠️  Configuration has warnings (see above)');
  console.log('   ✅ But it should work!');
  process.exit(0);
} else {
  console.log('   ✅ Configuration looks perfect!');
  console.log('\n🎉 Your .env file is correctly configured!');
  process.exit(0);
}
