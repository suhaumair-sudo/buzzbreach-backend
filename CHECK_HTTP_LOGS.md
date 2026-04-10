# Check HTTP Logs for Registration Error

## ✅ Good News from Startup Logs

Your backend is running successfully:
- ✅ Server started on PORT 5000
- ✅ Running in PRODUCTION (Keycloak) mode
- ✅ Successfully connected to ArangoDB
- ✅ Service is Online and Active

**But the 500 error happens DURING registration, not at startup!**

---

## 🔍 How to See the Registration Error

### Option 1: Check HTTP Logs (Best)

**The 500 error will appear in HTTP logs when you try to register:**

1. **Railway → `buzzbreach` service**
2. **Click "HTTP Logs" tab** (not "Deploy Logs")
3. **Keep this tab open**
4. **Try registering in your app**
5. **Watch the HTTP logs** - you'll see the error appear!

**Look for:**
- `POST /api/v1/user/auth/register` - The registration request
- `500 Internal Server Error` - The error response
- `Registration Error:` - The actual error message

---

### Option 2: Check Deploy Logs in Real-Time

**While registration is happening:**

1. **Railway → `buzzbreach` service → Deploy Logs**
2. **Keep the tab open and auto-refresh**
3. **Try registering in your app**
4. **Watch for new error messages**

---

## 🚨 Most Likely Issue

**Since backend is in Keycloak mode, the 500 error is probably:**

### Missing Keycloak Admin Credentials in Railway

**The backend needs these to create users in Keycloak:**

```env
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_GRANT_TYPE=password
REALM_NAME=buzzbreach
```

**Check Railway Variables:**
1. **Railway → `buzzbreach` service → Variables tab**
2. **Verify all Keycloak admin variables are set**
3. **If missing, add them!**

---

## 📋 Quick Test

**To see the exact error:**

1. **Open Railway → `buzzbreach` → HTTP Logs tab**
2. **Try registering in your app**
3. **Watch the HTTP logs** - error will appear
4. **Copy the error message**

**Common errors you might see:**

- `Failed to get admin token` → Missing `KEYCLOAK_ADMIN_USERNAME` or `KEYCLOAK_ADMIN_PASSWORD`
- `ECONNREFUSED` → Wrong `KEYCLOAK_URL`
- `401 Unauthorized` → Wrong admin credentials
- `KEYCLOAK_URL is not defined` → Missing `KEYCLOAK_URL` variable

---

## ✅ Next Steps

1. **Check HTTP Logs** while trying to register
2. **Copy the error message** you see
3. **Share it with me** - I can help fix it!

**Or if you want to fix it now:**

1. **Go to Railway → `buzzbreach` → Variables**
2. **Add the Keycloak admin variables** (see above)
3. **Wait for redeploy**
4. **Test registration again**

---

## 📝 Summary

**Your backend is running fine!**

**The 500 error happens when:**
- Frontend sends registration request
- Backend tries to create user in Keycloak
- Backend can't authenticate with Keycloak (missing admin credentials)

**Check HTTP Logs to see the exact error!** 🔍
