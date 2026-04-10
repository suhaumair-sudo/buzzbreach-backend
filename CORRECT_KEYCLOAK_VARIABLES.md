# Correct Keycloak Variables for Backend Service

## 🎯 Your Keycloak URL

**You have:** `buzzbreach-keycloak-production.up.railway.app`

**Use this in your BACKEND service (`buzzbreach`), not in Keycloak service!**

---

## ✅ Correct Variables for BACKEND Service (`buzzbreach`)

**Go to Railway → `buzzbreach` service (the one that's crashing) → Variables tab**

### Update These Variables:

| Variable | Wrong Value | Correct Value |
|----------|-------------|---------------|
| `KEYCLOAK_URL` | `http://localhost:8080` | `https://buzzbreach-keycloak-production.up.railway.app` |
| `KEYCLOAK_SERVER_URL` | `http://localhost:8080` | `https://buzzbreach-keycloak-production.up.railway.app` |
| `KEYCLOAK_ISSUER` | `http://localhost:8080/realms/buzzbreach` | `https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach` |

**Important:**
- ✅ Use `https://` (not `http://`)
- ✅ Use your actual Keycloak URL
- ❌ NO `localhost`!

---

## 📋 Complete Backend Variables

**For your `buzzbreach` backend service, set these:**

```env
# Server
PORT=5000
NODE_ENV=production

# ArangoDB
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=Buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password

# Keycloak (USE YOUR DEPLOYED URL!)
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_SERVER_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ISSUER=https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_CLIENT_SECRET=your-client-secret
KEYCLOAK_PUBLIC_KEY=your-public-key
REALM_NAME=buzzbreach

# Base URL
BASE_URL=https://your-backend-url.up.railway.app

# JWT Secret
JWT_SECRET=any-random-string
```

---

## 🚨 Important Notes

### 1. Use HTTPS

**Always use `https://` for deployed services:**
- ✅ `https://buzzbreach-keycloak-production.up.railway.app`
- ❌ `http://buzzbreach-keycloak-production.up.railway.app`

### 2. No localhost in Backend

**Your backend service should NEVER have localhost:**
- ❌ `http://localhost:8080` (WRONG!)
- ✅ `https://buzzbreach-keycloak-production.up.railway.app` (CORRECT!)

### 3. Keycloak Service vs Backend Service

**The Keycloak service variables are for Keycloak itself.**
**The Backend service needs the Keycloak URL to connect to it.**

---

## 🎯 Step-by-Step Fix

### Step 1: Go to Backend Service

1. **Click on `buzzbreach` service** (the red/crashed one)
2. **Click "Variables" tab**

### Step 2: Update Keycloak Variables

**Find and update these 3 variables:**

1. **`KEYCLOAK_URL`**
   - Click to edit
   - Change to: `https://buzzbreach-keycloak-production.up.railway.app`
   - Save

2. **`KEYCLOAK_SERVER_URL`**
   - Click to edit
   - Change to: `https://buzzbreach-keycloak-production.up.railway.app`
   - Save

3. **`KEYCLOAK_ISSUER`**
   - Click to edit
   - Change to: `https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach`
   - Save

### Step 3: Add Missing Variables

**Add these if missing:**

- `PORT=5000`
- `BASE_URL=https://your-backend-url.up.railway.app`
- `JWT_SECRET=any-random-string`

### Step 4: Remove Wrong Variables

**Delete these if they exist (not used by backend):**
- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

---

## ✅ Quick Copy-Paste Values

**For your `buzzbreach` backend service:**

```
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_SERVER_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ISSUER=https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach
```

**Replace all `localhost:8080` with the above!**

---

## 🔍 Verify Keycloak is Accessible

**Test your Keycloak URL in browser:**
```
https://buzzbreach-keycloak-production.up.railway.app
```

**Should see Keycloak welcome page or login.**

**If it doesn't work:**
- Check Keycloak service is "Online" (green)
- Check Networking → Domain is generated
- Try the URL Railway shows in Settings → Networking

---

## 📝 Summary

**For your `buzzbreach` BACKEND service:**

1. **`KEYCLOAK_URL`** = `https://buzzbreach-keycloak-production.up.railway.app`
2. **`KEYCLOAK_SERVER_URL`** = `https://buzzbreach-keycloak-production.up.railway.app`
3. **`KEYCLOAK_ISSUER`** = `https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach`

**All with `https://`, NO `localhost`!**

**After updating, save and redeploy - should work!** 🚀
