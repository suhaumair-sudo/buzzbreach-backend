# Fix 502 "Application failed to respond" Error

## 🔴 The Error

**From your logs:**
```
Registration Error: {
  status: 'error',
  code: 502,
  message: 'Application failed to respond',
  request_id: 'Oxky44CdTKG1fIC2n6XIxQ'
}
POST /api/v1/user/auth/register 500 15077.549 ms
```

**What this means:**
- Backend tried to register user
- Backend tried to connect to Keycloak
- Keycloak didn't respond (502 error)
- Request timed out after 15 seconds
- Registration failed

---

## 🔍 Root Cause

**The backend can't reach Keycloak!**

This happens when:
1. **Keycloak URL is wrong** in Railway variables
2. **Keycloak service is down** or not accessible
3. **Network issue** between backend and Keycloak
4. **Keycloak admin endpoint** is not accessible

---

## ✅ Step 1: Verify Keycloak Service is Online

**Check Railway → `buzzbreach-keycloak` service:**

1. **Status should be "Online"** (green dot)
2. **Check Deploy Logs** - should show Keycloak started
3. **Test in browser:**
   ```
   https://buzzbreach-keycloak-production.up.railway.app
   ```
   Should show Keycloak welcome page or redirect

**If Keycloak is down:**
- Restart the service
- Check for errors in Keycloak logs

---

## ✅ Step 2: Verify Keycloak URL in Railway

**Go to Railway → `buzzbreach` service → Variables tab**

**Check `KEYCLOAK_URL`:**

**Correct:**
```
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
```

**Wrong:**
```
KEYCLOAK_URL=http://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach
KEYCLOAK_URL=http://localhost:8080
```

**Important:**
- ✅ Must use `https://` (not `http://`)
- ✅ Must NOT include `/realms/...`
- ✅ Must be the exact Keycloak service URL from Railway

---

## ✅ Step 3: Verify All Keycloak Variables

**Railway → `buzzbreach` service → Variables tab**

**Make sure ALL these are set:**

```env
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_GRANT_TYPE=password
REALM_NAME=buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend
```

**If any are missing, add them!**

---

## ✅ Step 4: Test Keycloak Admin Endpoint

**The backend tries to access:**
```
https://buzzbreach-keycloak-production.up.railway.app/realms/master/protocol/openid-connect/token
```

**Test this in browser or curl:**
```bash
curl -X POST https://buzzbreach-keycloak-production.up.railway.app/realms/master/protocol/openid-connect/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=admin-cli&username=admin&password=admin&grant_type=password"
```

**Expected response:**
- Should return JSON with `access_token`
- If error, Keycloak admin credentials are wrong

---

## 🚨 Common Issues

### Issue 1: Keycloak URL Wrong

**Symptoms:**
- 502 error
- "Application failed to respond"
- 15 second timeout

**Fix:**
- Check `KEYCLOAK_URL` in Railway variables
- Must be: `https://buzzbreach-keycloak-production.up.railway.app`
- No trailing slash, no `/realms/...`

---

### Issue 2: Keycloak Service Down

**Symptoms:**
- Keycloak service shows "Offline" or errors
- Can't access Keycloak URL in browser

**Fix:**
1. Railway → `buzzbreach-keycloak` service
2. Check Deploy Logs for errors
3. Restart service if needed

---

### Issue 3: Wrong Admin Credentials

**Symptoms:**
- Keycloak responds but returns 401
- "Failed to get admin token"

**Fix:**
- Verify `KEYCLOAK_ADMIN_USERNAME=admin`
- Verify `KEYCLOAK_ADMIN_PASSWORD=admin`
- If you changed these in Dockerfile, use those values

---

### Issue 4: Network/Timeout Issue

**Symptoms:**
- Keycloak is online but backend can't reach it
- Timeout after 15 seconds

**Fix:**
1. Check both services are in same Railway project
2. Verify Keycloak URL is correct
3. Check Railway network settings

---

## 📋 Quick Checklist

- [ ] Keycloak service is "Online" in Railway
- [ ] Can access Keycloak URL in browser
- [ ] `KEYCLOAK_URL` is correct in Railway variables
- [ ] `KEYCLOAK_URL` uses `https://` (not `http://`)
- [ ] `KEYCLOAK_URL` does NOT include `/realms/...`
- [ ] All Keycloak admin variables are set
- [ ] Backend service is online
- [ ] Try registration again

---

## 🧪 Test Steps

1. **Verify Keycloak is accessible:**
   ```
   https://buzzbreach-keycloak-production.up.railway.app
   ```

2. **Check Railway variables:**
   - Railway → `buzzbreach` → Variables
   - Verify `KEYCLOAK_URL` is correct

3. **Redeploy backend** (if you changed variables):
   - Railway auto-redeploys, or manually redeploy

4. **Test registration again:**
   - Should work if Keycloak is accessible

---

## 📝 Summary

**The 502 error means backend can't reach Keycloak.**

**Most likely causes:**
1. Wrong `KEYCLOAK_URL` in Railway variables
2. Keycloak service is down
3. Network issue

**Fix:**
1. Verify Keycloak service is online
2. Check `KEYCLOAK_URL` is correct
3. Test Keycloak URL in browser
4. Try registration again

---

## 🔍 Debug Command

**Test if backend can reach Keycloak:**

**In Railway → `buzzbreach` service → Deploy Logs**

**Look for:**
- `Failed to get admin token` → Admin credentials wrong
- `ECONNREFUSED` → Keycloak URL wrong or service down
- `ETIMEDOUT` → Network issue

**The logs will show the exact error!**
