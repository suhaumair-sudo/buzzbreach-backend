# Check Railway Backend Logs for 500 Error

## 🔴 Current Issue

**You're getting a 500 Internal Server Error during registration.**

The frontend is correctly connecting to:
```
https://buzzbreach-production.up.railway.app/api/v1/user/auth/register
```

But the backend is returning a 500 error.

---

## ✅ Step 1: Check Railway Backend Logs

**This will show you the EXACT error:**

1. **Go to Railway dashboard**
2. **Click on `buzzbreach` service** (your backend)
3. **Click "Deployments" tab**
4. **Click "View logs"** (on the latest deployment)
5. **Scroll to the bottom** - look for recent errors

**Look for:**
- `Registration Error:` - Shows the actual error message
- `Failed to get admin token` - Keycloak admin credentials wrong
- `ECONNREFUSED` - Can't connect to Keycloak
- `401 Unauthorized` - Keycloak authentication failed

---

## 🔍 Common Errors in Logs

### Error 1: "Failed to get admin token"

**Meaning:** Keycloak admin credentials are wrong or missing

**Fix:** Add to Railway → `buzzbreach` service → Variables:
```
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
```

---

### Error 2: "ECONNREFUSED" or "Cannot connect to Keycloak"

**Meaning:** Keycloak URL is wrong or service is down

**Fix:** 
1. Check `KEYCLOAK_URL` in Railway variables
2. Should be: `https://buzzbreach-keycloak-production.up.railway.app`
3. Verify Keycloak service is online

---

### Error 3: "KEYCLOAK_URL is not defined"

**Meaning:** Missing Keycloak URL variable

**Fix:** Add to Railway → `buzzbreach` service → Variables:
```
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
```

---

## 📋 Required Railway Variables

**Go to Railway → `buzzbreach` service → Variables tab**

**Make sure these are set:**

```env
# Keycloak (REQUIRED for registration!)
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_GRANT_TYPE=password
REALM_NAME=buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend

# ArangoDB
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=Buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password

# Server
PORT=5000
BASE_URL=https://buzzbreach-production.up.railway.app
```

---

## 🎯 Quick Steps

1. **Check Railway logs** - Find the actual error
2. **Add missing Keycloak variables** to Railway
3. **Redeploy** (Railway auto-redeploys when you add variables)
4. **Test registration again**

---

## 💡 Important

**Your local `.env` file and Railway variables are SEPARATE!**

- ✅ Local `.env` - For running backend locally
- ✅ Railway Variables - For deployed backend

**Both need the same Keycloak variables!**

---

## 📝 Next Steps

1. **Check Railway logs** - Copy the error message
2. **Share the error** - I can help fix it
3. **Or add the Keycloak variables** to Railway if they're missing

**The logs will tell us exactly what's wrong!** 🔍
