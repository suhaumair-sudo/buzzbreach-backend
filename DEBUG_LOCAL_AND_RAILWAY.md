# Debug Local and Railway Errors

## 🔍 First: Share the Exact Error

**I need to see the exact error messages from your terminal.**

**Please copy and paste:**
1. The error message when you run `node server.js`
2. The full error (not just one line)

**This will tell me exactly what's wrong!**

---

## 🎯 Common Errors and Fixes

### Error 1: "Failed to connect to ArangoDB"

**Possible causes:**
- Wrong password
- Database doesn't exist
- URL format wrong
- Network/firewall blocking

**Fix:**
1. **Check password:**
   - Make sure it matches ArangoDB Cloud password exactly
   - No extra spaces
   - Copy-paste from ArangoDB dashboard (don't type manually)

2. **Check database exists:**
   - Go to ArangoDB Database UI
   - Verify `buzzbreach` database exists
   - If not, create it

3. **Check URL format:**
   - Should be: `https://547947c29a04.arangodb.cloud:8529`
   - No trailing slash
   - Use `https://`, not `http://`

### Error 2: "Authentication failed" or "401 Unauthorized"

**Cause:** Wrong username or password

**Fix:**
- Username should be: `root`
- Password should match ArangoDB Cloud exactly
- Check for typos or extra spaces

### Error 3: "Database not found" or "404"

**Cause:** Database `buzzbreach` doesn't exist

**Fix:**
1. Go to ArangoDB Database UI
2. Create database: `buzzbreach`
3. Try again

### Error 4: "ECONNREFUSED" or "Connection timeout"

**Cause:** Can't reach ArangoDB server

**Fix:**
- Check URL is correct
- Test URL in browser: `https://547947c29a04.arangodb.cloud:8529`
- Check internet connection
- Check firewall isn't blocking

### Error 5: "SSL/TLS error" or "Certificate error"

**Cause:** SSL certificate issue

**Fix:**
- Make sure URL uses `https://`
- ArangoDB Cloud should handle SSL automatically

### Error 6: "KEYCLOAK_URL not set" or Keycloak errors

**Cause:** Keycloak not configured

**Fix:**
- Add Keycloak variables to .env
- Or set `DEV_MODE=true` to skip Keycloak (for testing)

---

## 📝 Check Your .env File

**Make sure your `.env` file has:**

```env
# ArangoDB
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-actual-password-here

# Server
PORT=5000
NODE_ENV=development

# Keycloak (if you have it)
KEYCLOAK_URL=https://your-keycloak-url.com
KEYCLOAK_CLIENT_ID=buzzbreach-backend
REALM_NAME=buzzbreach

# Or skip Keycloak for testing
DEV_MODE=true
```

**Important:**
- No spaces around `=`
- No quotes around values (unless needed)
- No trailing spaces
- Use exact password from ArangoDB Cloud

---

## 🧪 Test ArangoDB Connection

**Before running server, test connection:**

**In browser:**
```
https://547947c29a04.arangodb.cloud:8529
```

**Should see ArangoDB interface or login page.**

**Or test with curl:**
```bash
curl https://547947c29a04.arangodb.cloud:8529/_api/version
```

**Should return JSON with version info.**

---

## 🔧 Quick Debug Steps

### Step 1: Check .env File

1. **Open `.env` file**
2. **Verify all variables are set:**
   - `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529`
   - `ARANGO_DATABASE_NAME` = `buzzbreach`
   - `ARANGO_USERNAME` = `root`
   - `ARANGO_PASSWORD` = (your password)

### Step 2: Test Connection

**Create a test file:** `test-db.js`

```javascript
require('dotenv').config();
const { Database } = require("arangojs");

const db = new Database({
  url: process.env.ARANGO_URL,
  databaseName: process.env.ARANGO_DATABASE_NAME,
  auth: {
    username: process.env.ARANGO_USERNAME,
    password: process.env.ARANGO_PASSWORD,
  },
});

async function test() {
  try {
    await db.get();
    console.log("✅ Connected to ArangoDB!");
    console.log("Database:", process.env.ARANGO_DATABASE_NAME);
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    console.error("Full error:", error);
  }
}

test();
```

**Run:**
```bash
node test-db.js
```

**This will show the exact error!**

### Step 3: Check Database Exists

1. **Go to ArangoDB Database UI:**
   - `https://547947c29a04.arangodb.cloud`
2. **Login with root credentials**
3. **Check if `buzzbreach` database exists**
4. **If not, create it**

---

## 🚀 Fix Railway Deployment

**After fixing local errors, Railway should work too!**

**Make sure Railway Variables match your .env:**

1. **Go to Railway → Variables tab**
2. **Add/update these:**
   - `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529`
   - `ARANGO_DATABASE_NAME` = `buzzbreach`
   - `ARANGO_USERNAME` = `root`
   - `ARANGO_PASSWORD` = (same password as .env)
   - `PORT` = `5000`
   - `NODE_ENV` = `production`

---

## 📋 What to Share

**Please share:**
1. **The exact error message** from terminal when running `node server.js`
2. **Your .env file** (hide password, but show structure)
3. **Whether database `buzzbreach` exists** in ArangoDB

**This will help me give you the exact fix!**

---

## ✅ Quick Checklist

- [ ] .env file has all ArangoDB variables
- [ ] Password is correct (copy-pasted from ArangoDB)
- [ ] Database `buzzbreach` exists in ArangoDB Cloud
- [ ] URL uses `https://` not `http://`
- [ ] No spaces or typos in .env
- [ ] Tested ArangoDB URL in browser (works)
- [ ] Railway variables match .env values

**Share the error message and I'll tell you exactly how to fix it!** 🔍
