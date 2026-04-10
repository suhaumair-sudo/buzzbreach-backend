# Check Logs and Fix Issues

## 🔍 What I See in Your Logs

Your logs show:
- ✅ ArangoDB connection attempts (good - it's trying to connect)
- ✅ Using ArangoDB Cloud driver (`arangojs/8.8.1 (cloud)`)
- ❌ Service still crashed

---

## ✅ Things to Check

### 1. Check if ArangoDB Connection Works

**The logs show connection attempts. Check:**

1. **Go to Variables tab** in your `buzzbreach` service
2. **Verify these are set correctly:**
   - `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529`
   - `ARANGO_USERNAME` = `root`
   - `ARANGO_PASSWORD` = (your ArangoDB password)
   - `ARANGO_DATABASE_NAME` = `buzzbreach`

### 2. Check PORT

**Make sure PORT is set:**
- Variable: `PORT`
- Value: `5000`

### 3. Check Keycloak URL

**If you got the Keycloak URL, make sure:**
- `KEYCLOAK_URL` = Your Keycloak URL (from the green service)
- `KEYCLOAK_SERVER_URL` = Same URL
- `KEYCLOAK_ISSUER` = `YOUR_KEYCLOAK_URL/realms/buzzbreach`

### 4. Check for Error Messages

**Scroll up in the logs to find the actual error:**
- Look for red text
- Look for "Error:" messages
- Look for "Failed" messages
- These will tell you what's wrong

---

## 🎯 Common Issues and Fixes

### Issue 1: ArangoDB Connection Failed

**Error:** "Failed to connect to ArangoDB" or "ECONNREFUSED"

**Fix:**
- Verify `ARANGO_URL` is correct
- Check username/password are correct
- Make sure database `buzzbreach` exists in ArangoDB Cloud
- Test ArangoDB URL in browser: `https://547947c29a04.arangodb.cloud:8529`

### Issue 2: Keycloak Connection Failed

**Error:** Keycloak connection errors

**Fix:**
- Make sure you generated Keycloak domain
- Update `KEYCLOAK_URL` with the actual URL
- Test Keycloak URL in browser

### Issue 3: Missing PORT

**Error:** Server not starting on correct port

**Fix:**
- Add `PORT=5000` variable
- Make sure it's set to `5000`, not `8080`

### Issue 4: Missing Environment Variables

**Error:** Variables not set

**Fix:**
- Check all required variables are added
- No `localhost` URLs anywhere
- All URLs use `https://`

---

## 📋 Quick Checklist

- [ ] `PORT=5000` is set
- [ ] `ARANGO_URL` is correct (ArangoDB Cloud URL)
- [ ] `ARANGO_USERNAME` = `root`
- [ ] `ARANGO_PASSWORD` is correct
- [ ] `ARANGO_DATABASE_NAME` = `buzzbreach`
- [ ] `KEYCLOAK_URL` is set (from green Keycloak service)
- [ ] `KEYCLOAK_SERVER_URL` = same as `KEYCLOAK_URL`
- [ ] `KEYCLOAK_ISSUER` = `KEYCLOAK_URL/realms/buzzbreach`
- [ ] No `localhost` in any URL
- [ ] All URLs use `https://`

---

## 🔍 What to Do Now

1. **Scroll up in the logs** - Find the actual error message
2. **Check Variables tab** - Make sure all variables are set correctly
3. **Look for red error messages** - These tell you what's wrong
4. **Share the error** - If you see a specific error, I can help fix it

---

## 💡 Pro Tip

**The logs show ArangoDB connection attempts, which is good!**

**But the service is still crashing, so:**
- Check the **very top** of the logs for the error
- Or check **Variables** to make sure everything is set
- The error message will tell you exactly what's wrong

---

**What error do you see at the top of the logs?** That will tell us what to fix! 🔍
