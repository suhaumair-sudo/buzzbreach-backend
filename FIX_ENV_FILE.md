# Fix Backend .env File - Missing Keycloak Variables

## 🔴 Issues Found

Your `.env` file is **missing critical Keycloak variables** needed for user registration!

**Missing:**
- ❌ `KEYCLOAK_URL` - Required!
- ❌ `KEYCLOAK_ADMIN_USERNAME` - Required!
- ❌ `KEYCLOAK_ADMIN_PASSWORD` - Required!

**This is why you're getting 401/500 errors during registration!**

---

## ✅ What's Already Correct

✅ **ArangoDB** - All configured correctly:
- `ARANGO_URL`: https://547947c29a04.arangodb.cloud:8529
- `ARANGO_DATABASE_NAME`: Buzzbreach
- `ARANGO_USERNAME`: root
- `ARANGO_PASSWORD`: Set

✅ **Server** - Configured:
- `PORT`: 5000
- `NODE_ENV`: development

✅ **Keycloak Client ID**: buzzbreach-backend

---

## 🔧 What to Add to .env

**Open:** `bbm/.env`

**Add these lines:**

```env
# Keycloak Configuration (REQUIRED for registration!)
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_GRANT_TYPE=password
REALM_NAME=buzzbreach

# Base URL (optional but recommended)
BASE_URL=https://your-backend-url.up.railway.app

# JWT Secret (optional but recommended for production)
JWT_SECRET=your-random-secret-key-change-this
```

---

## 📋 Complete .env Template

**Your complete `bbm/.env` should have:**

```env
# Server
PORT=5000
NODE_ENV=development

# ArangoDB
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=Buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password

# Keycloak (ADD THESE!)
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_GRANT_TYPE=password
REALM_NAME=buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend

# Base URL (optional)
BASE_URL=https://your-backend-url.up.railway.app

# JWT Secret (optional)
JWT_SECRET=your-random-secret-key
```

---

## ✅ After Adding Variables

**1. Verify the configuration:**
```bash
cd bbm
npm run verify:env
```

**Should show:**
- ✅ All Keycloak variables found
- ✅ Configuration looks good!

**2. Test registration:**
- Try registering in the app again
- Should work now!

---

## 🚨 Important Notes

### Keycloak URL Format

**Correct:**
```
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
```

**Wrong:**
```
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app/realms/buzzbreach
```

**Don't include `/realms/...` - the code adds that automatically!**

---

### Admin Credentials

**Default values (from your Dockerfile):**
- `KEYCLOAK_ADMIN_USERNAME=admin`
- `KEYCLOAK_ADMIN_PASSWORD=admin`

**If you changed these in your Keycloak Dockerfile, use those values instead!**

---

## 🎯 Quick Fix Steps

1. **Open `bbm/.env` file**
2. **Add the missing Keycloak variables** (copy from template above)
3. **Save the file**
4. **Run verification:** `npm run verify:env`
5. **Test registration in app**

---

## 📝 Summary

**Your `.env` file is missing:**
- `KEYCLOAK_URL`
- `KEYCLOAK_ADMIN_USERNAME`
- `KEYCLOAK_ADMIN_PASSWORD`

**Add these and registration will work!** 🎉
