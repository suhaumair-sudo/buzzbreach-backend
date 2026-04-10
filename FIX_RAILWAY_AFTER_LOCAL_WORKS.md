# Fix Railway - Local Works, Railway Crashes

## ✅ Good News!

**Your local connection works!** This means:
- ✅ ArangoDB URL is correct
- ✅ Password is correct
- ✅ Database exists and is accessible

**The Railway crash is likely due to missing variables or wrong values.**

---

## 🔍 What to Check in Railway

### Step 1: Check All Variables Are Set

**Go to Railway → `buzzbreach` service → Variables tab**

**Make sure you have ALL these:**

#### Required Variables:

```env
# Server
PORT=5000
NODE_ENV=production

# ArangoDB (these work locally, so use same values)
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=Buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password-here

# Keycloak (MUST be deployed URL, not localhost!)
KEYCLOAK_URL=https://buzzbreach-keycloak.up.railway.app
KEYCLOAK_SERVER_URL=https://buzzbreach-keycloak.up.railway.app
KEYCLOAK_ISSUER=https://buzzbreach-keycloak.up.railway.app/realms/buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_PUBLIC_KEY=your-public-key
REALM_NAME=buzzbreach

# Base URL
BASE_URL=https://your-backend-url.up.railway.app

# JWT Secret
JWT_SECRET=any-random-string-here
```

---

## 🎯 Most Likely Issues

### Issue 1: PORT Not Set

**Check:**
- Is `PORT=5000` in Railway variables?
- If missing, add it!

**Without PORT, server might crash or use wrong port.**

### Issue 2: Keycloak URL Still localhost

**Check:**
- Is `KEYCLOAK_URL` still `http://localhost:8080`?
- If yes, update it to your deployed Keycloak URL

**This is probably the main issue!**

### Issue 3: Database Name Case

**Your local uses:** `Buzzbreach` (capital B)
**Make sure Railway uses:** `Buzzbreach` (same case)

**Or better:** Create lowercase `buzzbreach` and use that everywhere.

### Issue 4: Missing BASE_URL

**Check:**
- Is `BASE_URL` set?
- Should be your Railway backend URL

---

## 🔧 Quick Fix Checklist

**In Railway Variables, check:**

- [ ] `PORT=5000` is set
- [ ] `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529`
- [ ] `ARANGO_DATABASE_NAME` = `Buzzbreach` (or `buzzbreach` - match your database)
- [ ] `ARANGO_USERNAME` = `root`
- [ ] `ARANGO_PASSWORD` = (your password)
- [ ] `KEYCLOAK_URL` = (NOT localhost - use deployed URL!)
- [ ] `KEYCLOAK_SERVER_URL` = (NOT localhost - use deployed URL!)
- [ ] `KEYCLOAK_ISSUER` = (NOT localhost - use deployed URL!)
- [ ] `BASE_URL` = (your Railway backend URL)
- [ ] `JWT_SECRET` = (any random string)
- [ ] `NODE_ENV` = `production`

---

## 🚨 Critical: Check for localhost

**Scroll through ALL variables and make sure:**
- ❌ NO `http://localhost`
- ❌ NO `localhost:8080`
- ❌ NO `localhost:8529`
- ❌ NO `localhost:3000`

**All URLs must be deployed/public URLs!**

---

## 📋 Step-by-Step Fix

### Step 1: Get Keycloak URL

1. **Click on `buzzbreach-keycloak` service** (green/online)
2. **Settings → Networking**
3. **Click "Generate Domain"** (if not done)
4. **Copy the URL**

### Step 2: Update Keycloak Variables

**In `buzzbreach` service → Variables:**

1. **`KEYCLOAK_URL`** = Your Keycloak URL (not localhost!)
2. **`KEYCLOAK_SERVER_URL`** = Same URL
3. **`KEYCLOAK_ISSUER`** = Your Keycloak URL + `/realms/buzzbreach`

### Step 3: Add Missing Variables

**Add these if missing:**
- `PORT=5000`
- `BASE_URL` = Your Railway backend URL
- `JWT_SECRET` = Any random string

### Step 4: Check Database Name

**Make sure:**
- `ARANGO_DATABASE_NAME` matches your database exactly
- If database is `Buzzbreach`, use `Buzzbreach`
- If database is `buzzbreach`, use `buzzbreach`

---

## 🧪 After Fixing

1. **Save all variables** (auto-saves)
2. **Service will redeploy** (wait 2-3 minutes)
3. **Check logs:**
   - Scroll to TOP
   - Look for errors
   - Should see "Server is running on PORT 5000"
   - Should see "Successfully connected to ArangoDB"

---

## 🔍 If Still Crashing

**Check Railway logs (scroll to TOP):**

1. **What's the first error message?**
2. **Is it about:**
   - ArangoDB? → Check password/database name
   - Keycloak? → Check Keycloak URL (not localhost!)
   - PORT? → Add `PORT=5000`
   - Missing variable? → Add it

**Share the error from Railway logs and I'll tell you exactly how to fix it!**

---

## ✅ Summary

**Since local works, Railway needs:**
1. ✅ All same ArangoDB variables (you have these)
2. ⚠️ **Keycloak URL** (probably still localhost - FIX THIS!)
3. ⚠️ **PORT=5000** (probably missing - ADD THIS!)
4. ⚠️ **BASE_URL** (probably missing - ADD THIS!)

**Most likely:** Keycloak URL is still `localhost` - that's why it crashes!

**Fix Keycloak URL first, then check if it works!** 🚀
