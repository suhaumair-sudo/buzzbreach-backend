# Fix "HTTPS required" Error

## 🔴 The Problem

**From your logs:**
```
Registration Error: { error: 'invalid_request', error_description: 'HTTPS required' }
POST /api/v1/user/auth/register 500
```

**And from Keycloak HTTP logs:**
```
POST /realms/master/protocol/openid-connect/token 403 Forbidden
```

**What this means:**
- Keycloak is deployed with HTTPS (`https://buzzbreach-keycloak-production.up.railway.app`)
- Backend is trying to connect using HTTP
- Keycloak rejects HTTP requests (requires HTTPS)
- Registration fails

---

## ✅ The Fix

**The backend must use HTTPS to connect to Keycloak!**

### Step 1: Check Railway Backend Variables

**Railway → `buzzbreach` service → Variables tab**

**Verify `KEYCLOAK_URL` uses HTTPS:**

**Correct:**
```
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
```

**Wrong:**
```
KEYCLOAK_URL=http://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach
```

**Important:**
- ✅ Must use `https://` (not `http://`)
- ✅ Must NOT include `/realms/...` at the end
- ✅ Must be the exact Keycloak service URL

---

### Step 2: Verify All Keycloak Variables

**Railway → `buzzbreach` service → Variables tab**

**Make sure ALL these are set correctly:**

```env
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_GRANT_TYPE=password
REALM_NAME=buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend
```

**Most important:** `KEYCLOAK_URL` must use `https://`!

---

### Step 3: Redeploy Backend

**After updating variables:**

1. **Railway will auto-redeploy** (or manually redeploy)
2. **Wait for deployment to complete**
3. **Check Deploy Logs** - should see "Server is running on PORT 5000"

---

### Step 4: Test Registration

**After redeploy:**
- Try registering in the app
- Should work now!

---

## 🔍 Why This Happens

**Keycloak on Railway:**
- Deployed with HTTPS (Railway provides SSL certificates)
- URL: `https://buzzbreach-keycloak-production.up.railway.app`
- Requires all connections to use HTTPS

**Backend trying to connect:**
- If `KEYCLOAK_URL` uses `http://`, backend sends HTTP request
- Keycloak rejects it with "HTTPS required" error
- Registration fails

**Solution:** Always use `https://` in `KEYCLOAK_URL`!

---

## 📋 Quick Checklist

- [ ] Railway → `buzzbreach` service → Variables
- [ ] `KEYCLOAK_URL` = `https://buzzbreach-keycloak-production.up.railway.app`
- [ ] Verify it uses `https://` (not `http://`)
- [ ] Verify it does NOT include `/realms/...`
- [ ] All other Keycloak variables are set
- [ ] Backend redeployed
- [ ] Test registration

---

## 🎯 Summary

**The error "HTTPS required" means:**
- Backend is using HTTP to connect to Keycloak
- Keycloak requires HTTPS

**Fix:**
- Set `KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app` in Railway variables
- Make sure it uses `https://` (not `http://`)

**After fixing, registration will work!** 🎉
