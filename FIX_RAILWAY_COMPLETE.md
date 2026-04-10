# Complete Railway Fix Guide - Step by Step

## 🔴 Current Problems

1. Service crashing with `ECONNREFUSED` errors
2. `localhost` URLs in variables (won't work in production)
3. Missing ArangoDB deployment
4. Missing Keycloak deployment
5. Wrong variable names

---

## ✅ Complete Fix - Follow These Steps

### Step 1: Deploy ArangoDB First

**You need ArangoDB running somewhere accessible.**

#### Option A: ArangoDB Cloud (EASIEST - Recommended)

1. **Sign up:** https://cloud.arangodb.com
2. **Create cluster:**
   - Click "Create Cluster"
   - Choose free tier (if available) or paid
   - Select region closest to you
   - Wait for cluster to be created (5-10 minutes)

3. **Get connection details:**
   - Go to your cluster
   - Click "Connection" tab
   - You'll see:
     - **URL:** `https://xxxxx.arangodb.cloud:8529`
     - **Username:** `root`
     - **Password:** (the one you set)
     - **Database:** Create one named `buzzbreach`

4. **Copy these details** - you'll need them for Railway

#### Option B: Deploy ArangoDB on Railway

1. In Railway, create **new service**
2. Click "New" → "Database" → "Add ArangoDB"
3. Wait for deployment
4. Get connection URL from service settings

---

### Step 2: Deploy Keycloak

**You need Keycloak running somewhere accessible.**

#### Option A: Deploy Keycloak on Railway (Recommended)

1. **Create new service in Railway:**
   - Click "New" → "Empty Service"
   - Name it: `buzzbreach-keycloak`

2. **Add Keycloak using Docker:**
   - Go to service → "Settings" → "Source"
   - Click "Generate Dockerfile"
   - OR use this Dockerfile:
   ```dockerfile
   FROM quay.io/keycloak/keycloak:latest
   ENV KEYCLOAK_ADMIN=admin
   ENV KEYCLOAK_ADMIN_PASSWORD=admin
   CMD ["start-dev", "--hostname-strict=false", "--hostname-strict-https=false"]
   ```

3. **Or use Railway template:**
   - Search for "Keycloak" in templates
   - Deploy it

4. **Get Keycloak URL:**
   - Service → Settings → Domains
   - Copy URL (e.g., `https://buzzbreach-keycloak.up.railway.app`)

5. **Access Keycloak:**
   - Go to the URL
   - Login with admin credentials
   - Create realm: `buzzbreach`
   - Create client: `buzzbreach-backend`
   - Get public key from Realm Settings → Keys

#### Option B: Use Keycloak Cloud Service

- Use a managed Keycloak service
- Get the URL and credentials

---

### Step 3: Fix Railway Variables

**Go to Railway → Your Backend Service → Variables tab**

#### Delete These Variables (Wrong/Unused):

- ❌ `NEXTAUTH_SECRET` (if exists)
- ❌ `NEXT_PUBLIC_BASE_URL` (if exists)
- ❌ `NEXT_PUBLIC_NEXTAUTH_URL` (if exists)

#### Update These Variables:

**1. ArangoDB Variables:**

Click each and update:

- `ARANGO_URL`: 
  - **OLD:** `http://localhost:8529` ❌
  - **NEW:** `https://your-cluster.arangodb.cloud:8529` ✅
  - (Use your ArangoDB Cloud URL)

- `ARANGO_DATABASE_NAME`: 
  - **Value:** `buzzbreach`

- `ARANGO_USERNAME`: 
  - **Value:** `root`

- `ARANGO_PASSWORD`: 
  - **Value:** (Your ArangoDB password)

**2. Keycloak Variables:**

- `KEYCLOAK_URL`: 
  - **OLD:** `http://localhost:8080` ❌
  - **NEW:** `https://buzzbreach-keycloak.up.railway.app` ✅
  - (Use your deployed Keycloak URL)

- `KEYCLOAK_SERVER_URL`: 
  - **OLD:** `http://localhost:8080` ❌
  - **NEW:** Same as `KEYCLOAK_URL` ✅
  - (Or delete if duplicate)

- `KEYCLOAK_ISSUER`: 
  - **OLD:** `http://localhost:8080/realms/buzzbreach` ❌
  - **NEW:** `https://your-keycloak-url.com/realms/buzzbreach` ✅

- `KEYCLOAK_CLIENT_ID`: 
  - **Value:** `buzzbreach-backend`

- `KEYCLOAK_CLIENT_SECRET`: 
  - **Value:** (Get from Keycloak admin console)

- `KEYCLOAK_PUBLIC_KEY`: 
  - **Value:** (Get from Keycloak: Realm Settings → Keys → Active RSA key → Public Key)

- `KEYCLOAK_REALM`: 
  - **Value:** `buzzbreach`

**3. Server Variables:**

- `PORT`: 
  - **Value:** `5000`

- `NODE_ENV`: 
  - **Value:** `production`

**4. Add Missing Variables:**

Click "+ New Variable" and add:

- `BASE_URL`: 
  - **Value:** `https://your-backend-service.up.railway.app`
  - (Get from Railway → Your Service → Settings → Domains)

- `REALM_NAME`: 
  - **Value:** `buzzbreach`

- `JWT_SECRET`: 
  - **Value:** (Generate random string, e.g., `your-random-secret-key-here`)

**5. Optional Variables (if using email):**

- `EMAIL_HOST`: `smtp.gmail.com`
- `EMAIL_PORT`: `587`
- `EMAIL_HOST_USER`: `your-email@gmail.com`
- `EMAIL_HOST_PASSWORD`: `your-gmail-app-password`
- `EMAIL_FROM`: `your-email@gmail.com`

**6. Optional Variables (if using Google OAuth):**

- `GOOGLE_CLIENT_ID`: (Your Google OAuth client ID)

**7. Fix CLIENT_URL (if exists):**

- `CLIENT_URL`: 
  - **OLD:** `http://localhost:3000` ❌
  - **NEW:** `https://your-frontend-url.com` ✅
  - (Or remove if no frontend yet)

---

### Step 4: Get Your Railway Backend URL

1. In Railway → Your backend service
2. Go to **"Settings"** tab
3. Scroll to **"Domains"** section
4. Copy the URL (e.g., `https://buzzbreach-production.up.railway.app`)
5. **Update `BASE_URL` variable** with this URL

---

### Step 5: Verify All Variables

**Checklist - Make sure:**

- [ ] No `localhost` in any URL
- [ ] All URLs start with `https://` (or `http://` if no SSL)
- [ ] `ARANGO_URL` points to deployed ArangoDB
- [ ] `KEYCLOAK_URL` points to deployed Keycloak
- [ ] `BASE_URL` is your Railway backend URL
- [ ] All required variables are set
- [ ] No duplicate variables

---

### Step 6: Redeploy

**Railway will auto-redeploy when you save variables, OR:**

1. Go to **"Deployments"** tab
2. Click **"Redeploy"** button
3. Wait for deployment (2-5 minutes)
4. Check logs

---

### Step 7: Check Logs

**After redeploy:**

1. Go to **"Deployments"** tab
2. Click latest deployment
3. Click **"View Logs"**
4. **Should see:**
   - ✅ "Server is running on PORT 5000"
   - ✅ "Successfully connected to ArangoDB"
   - ❌ **NO** `ECONNREFUSED` errors

---

### Step 8: Test Your API

**1. Test Swagger Docs:**
```
https://your-backend-url.up.railway.app/api-docs
```
Should see Swagger UI.

**2. Test API Endpoint:**
```bash
curl https://your-backend-url.up.railway.app/api/v1/user/get-all-users
```

**3. Check Service Status:**
- Railway dashboard should show **"Live"** (green)
- Not "Crashed" (red)

---

## 🔧 Troubleshooting

### Still Getting ECONNREFUSED Errors

**Problem:** Still trying to connect to localhost

**Fix:**
1. Double-check ALL variables - no `localhost` anywhere
2. Make sure ArangoDB is actually deployed and accessible
3. Test ArangoDB URL in browser (should show ArangoDB web interface)
4. Check Keycloak URL is accessible

### Service Still Crashes

**Check logs for specific error:**
1. Go to Deployments → Latest → Logs
2. Look for the actual error message
3. Common issues:
   - Database connection failed → Check ArangoDB URL/credentials
   - Keycloak connection failed → Check Keycloak URL
   - Missing variable → Add missing variable
   - Port conflict → Change PORT variable

### Can't Connect to ArangoDB

**Verify:**
1. ArangoDB is actually running
2. URL is correct (no typos)
3. Username/password are correct
4. Database exists
5. Firewall allows connections (if self-hosted)

### Can't Connect to Keycloak

**Verify:**
1. Keycloak is actually running
2. URL is correct
3. Realm exists
4. Client exists
5. Public key is correct

---

## 📋 Complete Variable List (Copy This)

**Required Variables:**

```env
# Server
PORT=5000
NODE_ENV=production

# ArangoDB (from ArangoDB Cloud or deployed instance)
ARANGO_URL=https://your-cluster.arangodb.cloud:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-arangodb-password

# Keycloak (from deployed Keycloak instance)
KEYCLOAK_URL=https://buzzbreach-keycloak.up.railway.app
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_CLIENT_SECRET=your-client-secret
KEYCLOAK_PUBLIC_KEY=your-public-key-here
KEYCLOAK_REALM=buzzbreach
REALM_NAME=buzzbreach

# Base URL (your Railway backend URL)
BASE_URL=https://buzzbreach-production.up.railway.app

# JWT Secret
JWT_SECRET=generate-random-string-here
```

**Optional Variables:**

```env
# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id

# Client URL (frontend)
CLIENT_URL=https://your-frontend-url.com
```

---

## 🎯 Quick Action Checklist

1. [ ] Deploy ArangoDB (ArangoDB Cloud recommended)
2. [ ] Deploy Keycloak (Railway or separate)
3. [ ] Get ArangoDB connection URL
4. [ ] Get Keycloak URL
5. [ ] Get Railway backend URL
6. [ ] Update ALL variables in Railway (remove localhost!)
7. [ ] Add missing variables (BASE_URL, JWT_SECRET, etc.)
8. [ ] Save variables (auto-redeploys)
9. [ ] Check logs - should see "Server is running"
10. [ ] Test API - should work!

---

## 💡 Pro Tips

1. **Use ArangoDB Cloud** - Easiest database setup
2. **Deploy Keycloak on Railway** - Keep everything together
3. **Test each service separately** - Make sure ArangoDB and Keycloak work before connecting backend
4. **Check logs regularly** - Catch errors early
5. **Use HTTPS URLs** - Railway provides SSL automatically

---

## 🆘 Still Not Working?

**Check these:**

1. **All services are actually running:**
   - ArangoDB is live
   - Keycloak is live
   - Backend service is live

2. **All URLs are accessible:**
   - Test ArangoDB URL in browser
   - Test Keycloak URL in browser
   - Test backend URL in browser

3. **All credentials are correct:**
   - ArangoDB username/password
   - Keycloak admin credentials
   - Database name exists

4. **No typos in variables:**
   - Double-check all URLs
   - Check variable names match your code

5. **Check Railway logs:**
   - Look for specific error messages
   - Share logs if still stuck

---

## ✅ Success Criteria

Your Railway backend is fixed when:

- ✅ Service shows "Live" (not "Crashed")
- ✅ Logs show "Server is running on PORT 5000"
- ✅ Logs show "Successfully connected to ArangoDB"
- ✅ No `ECONNREFUSED` errors
- ✅ API docs accessible: `https://your-url/api-docs`
- ✅ API endpoints respond correctly

---

## 📚 Useful Links

- **ArangoDB Cloud:** https://cloud.arangodb.com
- **Railway Dashboard:** https://railway.app
- **Railway Docs:** https://docs.railway.app
- **Keycloak Docs:** https://www.keycloak.org/documentation

---

**Follow these steps exactly, and Railway will work!** 🚀

The main issue is `localhost` URLs - replace ALL of them with actual deployed service URLs!
