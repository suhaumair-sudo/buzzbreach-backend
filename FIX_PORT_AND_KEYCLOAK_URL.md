# Fix PORT and Get Keycloak URL

## 🔴 Problems I See

1. **PORT is wrong** - Logs show "Server is running on PORT 8080" (should be 5000)
2. **Need Keycloak URL** - Your Keycloak service is "Online" (green), need to get its URL

---

## ✅ Step 1: Add PORT=5000

**In Railway → Your `buzzbreach` service → Variables tab:**

1. **Click "+ New Variable"** button (top right)
2. **Variable name:** `PORT`
3. **Value:** `5000`
4. **Click "Add"**

**OR if PORT already exists:**
1. **Find `PORT` in the list**
2. **Click on it** to edit
3. **Change value to:** `5000`
4. **Save**

---

## ✅ Step 2: Get Keycloak URL

**Your Keycloak service is "Online" (green) - get its URL:**

1. **Click on `buzzbreach-keycloak` service** (the one that's green/online, on the left)
2. **Click "Settings" tab**
3. **Scroll to "Networking" section**
4. **Look for "Domains" or "Public Networking"**
5. **You'll see a URL like:**
   - `https://buzzbreach-keycloak.up.railway.app`
   - OR `https://buzzbreach-keycloak-production.up.railway.app`
6. **Copy this URL** - this is your Keycloak URL!

**If you don't see a domain:**
1. **Click "Generate Domain"** button
2. **Wait a few seconds**
3. **Copy the URL that appears**

---

## ✅ Step 3: Update Keycloak Variables

**Back in your `buzzbreach` service → Variables tab:**

**Update these variables with your Keycloak URL:**

1. **Find `KEYCLOAK_URL`**
   - Click to edit
   - **Change from:** `http://localhost:8080` (or whatever it is)
   - **Change to:** `https://buzzbreach-keycloak.up.railway.app` (your actual Keycloak URL)
   - Save

2. **Find `KEYCLOAK_SERVER_URL`**
   - Click to edit
   - **Change to:** Same as `KEYCLOAK_URL` (the URL you just set)
   - Save

3. **Find `KEYCLOAK_ISSUER`**
   - Click to edit
   - **Change to:** `https://buzzbreach-keycloak.up.railway.app/realms/buzzbreach`
   - (Replace with your actual Keycloak URL)
   - Save

---

## 📋 Complete Variable Checklist

**Make sure you have these set correctly:**

| Variable | Should Be |
|----------|-----------|
| `PORT` | `5000` |
| `KEYCLOAK_URL` | `https://buzzbreach-keycloak.up.railway.app` (your actual URL) |
| `KEYCLOAK_SERVER_URL` | Same as `KEYCLOAK_URL` |
| `KEYCLOAK_ISSUER` | `https://buzzbreach-keycloak.up.railway.app/realms/buzzbreach` |
| `ARANGO_URL` | `https://547947c29a04.arangodb.cloud:8529` (from ArangoDB Cloud) |
| `ARANGO_DATABASE_NAME` | `buzzbreach` |
| `ARANGO_USERNAME` | `root` |
| `ARANGO_PASSWORD` | (your ArangoDB password) |
| `NODE_ENV` | `production` |

---

## 🎯 Quick Steps

### 1. Add PORT
- Railway → `buzzbreach` service → Variables
- Click "+ New Variable"
- Name: `PORT`, Value: `5000`

### 2. Get Keycloak URL
- Click `buzzbreach-keycloak` service (green one)
- Settings → Networking → Copy URL

### 3. Update Keycloak Variables
- Back to `buzzbreach` service → Variables
- Update `KEYCLOAK_URL` with the URL you copied
- Update `KEYCLOAK_SERVER_URL` (same URL)
- Update `KEYCLOAK_ISSUER` (URL + `/realms/buzzbreach`)

### 4. Save and Redeploy
- Variables auto-save
- Service will redeploy
- Check logs - should work!

---

## ⚠️ Important Notes

1. **PORT must be 5000** - Your code expects port 5000
2. **Keycloak URL must be HTTPS** - Railway provides HTTPS
3. **No localhost** - All URLs must be deployed URLs
4. **Use actual Keycloak URL** - From the green/online service

---

## 🧪 After Fixing

**Check logs:**
- Should see: "Server is running on PORT 5000" ✅
- Should see: "Successfully connected to ArangoDB" ✅
- Should NOT see: "ECONNREFUSED" errors ✅

**Test:**
- Visit: `https://your-backend-url.up.railway.app/api-docs`
- Should see Swagger docs!

---

## 📝 Summary

1. **Add PORT=5000** in Variables
2. **Get Keycloak URL** from the green Keycloak service
3. **Update KEYCLOAK_URL** variables with that URL
4. **Save** → Auto-redeploys → Should work!
