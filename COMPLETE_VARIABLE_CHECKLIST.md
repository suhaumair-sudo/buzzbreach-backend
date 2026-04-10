# Complete Variable Checklist for Railway

## ✅ Copy This Exact List

**Go to Railway → `buzzbreach` service → Variables tab**

**Make sure you have EXACTLY these variables:**

---

## Required Variables (Must Have All)

### 1. Server Variables
```
PORT=5000
NODE_ENV=production
```

### 2. ArangoDB Variables
```
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=Buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-actual-password-here
```

### 3. Keycloak Variables (NO localhost!)
```
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_SERVER_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ISSUER=https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_CLIENT_SECRET=your-client-secret-here
KEYCLOAK_PUBLIC_KEY=your-public-key-here
REALM_NAME=buzzbreach
```

### 4. Other Required Variables
```
BASE_URL=https://your-backend-url.up.railway.app
JWT_SECRET=any-random-string-here
```

---

## ❌ Variables to DELETE (Not Used)

**Remove these if they exist:**
- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `CLIENT_URL` (if it's `http://localhost:3000`)

---

## 🔍 Verification Checklist

**Go through each variable and check:**

- [ ] `PORT` = `5000` (not missing, not 8080)
- [ ] `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529` (not localhost)
- [ ] `ARANGO_DATABASE_NAME` = `Buzzbreach` (matches your database)
- [ ] `ARANGO_PASSWORD` = (your actual password)
- [ ] `KEYCLOAK_URL` = `https://buzzbreach-keycloak-production.up.railway.app` (NOT localhost!)
- [ ] `KEYCLOAK_SERVER_URL` = `https://buzzbreach-keycloak-production.up.railway.app` (NOT localhost!)
- [ ] `KEYCLOAK_ISSUER` = `https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach` (NOT localhost!)
- [ ] `BASE_URL` = (your Railway backend URL)
- [ ] `JWT_SECRET` = (any value, not empty)
- [ ] NO `localhost` in ANY variable
- [ ] All URLs use `https://` (not `http://`)

---

## 🚨 Critical Checks

### Check 1: PORT
**If PORT is missing or wrong, server crashes immediately!**
- Must be: `PORT=5000`

### Check 2: Keycloak URLs
**If Keycloak URLs are localhost, backend can't connect!**
- All must be: `https://buzzbreach-keycloak-production.up.railway.app`

### Check 3: No localhost
**Search for "localhost" in all variables:**
- Should find ZERO instances
- If found, replace with deployed URLs

---

## 📝 Quick Fix

**If you're not sure what's wrong:**

1. **Delete ALL variables**
2. **Add them back one by one** using the list above
3. **Make sure each one is correct**
4. **Save after each addition**
5. **Check logs after each save**

**This will help identify which variable is causing the crash!**

---

## 🎯 Most Common Mistakes

1. ❌ `PORT` not set → Server crashes
2. ❌ `KEYCLOAK_URL` = `localhost` → Can't connect
3. ❌ `BASE_URL` missing → Some features break
4. ❌ Database name case wrong → Connection fails
5. ❌ Using `http://` instead of `https://` → SSL errors

---

**Use this checklist to verify EVERY variable is correct!** ✅
