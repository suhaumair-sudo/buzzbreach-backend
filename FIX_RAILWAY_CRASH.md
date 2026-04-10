# Fix Railway Service Crash - Complete Guide

## 🔴 The Problem

Your service is crashing with this error:
```
Error: connect ECONNREFUSED ::1:8529
Error: connect ECONNREFUSED 127.0.0.1:8529
```

**Root Cause:** Your Railway variables have `localhost` URLs, which don't work in production!

---

## ❌ Current Wrong Variables (From Railway)

These are causing the crash:

```env
ARANGO_URL=http://localhost:8529                    ❌ WRONG
KEYCLOAK_URL=http://localhost:8080                   ❌ WRONG
KEYCLOAK_SERVER_URL=http://localhost:8080            ❌ WRONG
KEYCLOAK_ISSUER=http://localhost:8080/realms/buzzbreach ❌ WRONG
CLIENT_URL=http://localhost:3000                     ❌ WRONG
```

**Why it crashes:** Railway servers can't connect to `localhost` on your computer!

---

## ✅ Fix: Update Railway Variables

### Step 1: Fix ArangoDB URL

**You need to deploy ArangoDB or use ArangoDB Cloud:**

**Option A: ArangoDB Cloud (Easiest)**
1. Go to https://cloud.arangodb.com
2. Sign up (free tier available)
3. Create a cluster
4. Get connection details:
   - URL: `https://xxxxx.arangodb.cloud:8529`
   - Username: `root`
   - Password: (set during creation)
   - Database: `buzzbreach`

**Option B: Deploy ArangoDB on Railway**
1. Create new service in Railway
2. Add ArangoDB from template
3. Get the service URL

**Update in Railway:**
- `ARANGO_URL`: Change from `http://localhost:8529` to `https://your-arangodb-url:8529`

---

### Step 2: Fix Keycloak URLs

**You need to deploy Keycloak:**

**Option A: Deploy Keycloak on Railway**
1. Create new service in Railway
2. Add Keycloak from template (or use Docker)
3. Get the service URL (e.g., `https://keycloak-production.up.railway.app`)

**Option B: Use Keycloak Cloud Service**
- Use a managed Keycloak service

**Update in Railway:**
- `KEYCLOAK_URL`: Change from `http://localhost:8080` to `https://your-keycloak-url.com`
- `KEYCLOAK_SERVER_URL`: Change to same as `KEYCLOAK_URL` (or remove if duplicate)
- `KEYCLOAK_ISSUER`: Change to `https://your-keycloak-url.com/realms/buzzbreach`

---

### Step 3: Fix BASE_URL

**Get your Railway backend URL:**
1. In Railway → Your Service → **Settings** tab
2. Under **"Domains"** → Copy the URL
3. Example: `https://buzzbreach-production.up.railway.app`

**Add/Update in Railway:**
- `BASE_URL`: Set to your Railway backend URL

---

### Step 4: Fix CLIENT_URL (Optional)

**If you have a frontend deployed:**
- `CLIENT_URL`: Change from `http://localhost:3000` to your deployed frontend URL

**If no frontend yet:**
- You can remove this variable or leave it for later

---

## 📋 Complete Correct Variables for Railway

Replace ALL these in Railway Variables tab:

```env
# Server
PORT=5000
NODE_ENV=production

# ArangoDB (MUST be external URL, not localhost!)
ARANGO_URL=https://your-cluster.arangodb.cloud:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-secure-password

# Keycloak (MUST be external URL, not localhost!)
KEYCLOAK_URL=https://your-keycloak.railway.app
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_PUBLIC_KEY=your-public-key-here
REALM_NAME=buzzbreach

# Keycloak Admin (if needed)
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=your-admin-password
KEYCLOAK_ADMIN_GRANT_TYPE=password

# Base URL (your Railway backend URL)
BASE_URL=https://buzzbreach-production.up.railway.app

# JWT Secret
JWT_SECRET=generate-random-string-here

# Client URL (your frontend, if deployed)
CLIENT_URL=https://your-frontend-url.com
```

---

## 🚀 Quick Fix Steps

### 1. Deploy ArangoDB First

**Easiest: Use ArangoDB Cloud**
1. Sign up: https://cloud.arangodb.com
2. Create cluster
3. Copy connection URL
4. Update `ARANGO_URL` in Railway

### 2. Deploy Keycloak

**Option A: Railway Template**
1. Railway → New Service → Add Keycloak
2. Get URL
3. Update `KEYCLOAK_URL` in Railway

**Option B: Docker (Advanced)**
- Deploy Keycloak container on Railway

### 3. Update All Variables

In Railway → Variables tab:
1. Click each variable
2. Replace `localhost` URLs with deployed URLs
3. Save

### 4. Redeploy

Railway will auto-redeploy when you save variables, or:
1. Go to Deployments tab
2. Click "Redeploy"

---

## 🔍 Verify Variables Are Correct

After updating, check:

- [ ] No `localhost` in any URL
- [ ] All URLs start with `https://` (or `http://` if no SSL)
- [ ] ArangoDB URL is accessible
- [ ] Keycloak URL is accessible
- [ ] BASE_URL matches your Railway backend URL

---

## 🧪 Test After Fixing

1. **Check Logs:**
   - Railway → Deployments → Latest → View logs
   - Should see: "Server is running on PORT 5000"
   - No more `ECONNREFUSED` errors

2. **Test API:**
   - Visit: `https://your-backend-url.up.railway.app/api-docs`
   - Should see Swagger documentation

3. **Test Database:**
   - API should respond (not crash)
   - Check logs for "Successfully connected to ArangoDB"

---

## ⚠️ Important Notes

1. **Never use localhost in production!**
   - `localhost` only works on your computer
   - Railway servers are in the cloud
   - They can't reach your localhost

2. **All services must be deployed:**
   - ArangoDB → Deploy or use cloud
   - Keycloak → Deploy or use cloud
   - Backend → Already on Railway ✅

3. **Use HTTPS:**
   - Railway provides HTTPS automatically
   - Use `https://` URLs, not `http://`

---

## 📝 Summary

**The crash is caused by:**
- ❌ `ARANGO_URL=http://localhost:8529` → Can't connect to database
- ❌ `KEYCLOAK_URL=http://localhost:8080` → Can't connect to Keycloak

**The fix:**
- ✅ Deploy ArangoDB (or use cloud)
- ✅ Deploy Keycloak (or use cloud)
- ✅ Update all URLs in Railway variables
- ✅ Remove all `localhost` references

---

## 🎯 Action Items

1. [ ] Deploy ArangoDB (ArangoDB Cloud recommended)
2. [ ] Deploy Keycloak (Railway template or Docker)
3. [ ] Update `ARANGO_URL` in Railway
4. [ ] Update `KEYCLOAK_URL` in Railway
5. [ ] Update `KEYCLOAK_SERVER_URL` in Railway
6. [ ] Update `KEYCLOAK_ISSUER` in Railway
7. [ ] Add `BASE_URL` (your Railway backend URL)
8. [ ] Save and redeploy
9. [ ] Check logs - should work now!

---

## 💡 Quick Reference

**Get Railway Backend URL:**
- Railway → Service → Settings → Domains

**Get ArangoDB URL:**
- ArangoDB Cloud → Cluster → Connection details

**Get Keycloak URL:**
- Railway → Keycloak Service → Settings → Domains
