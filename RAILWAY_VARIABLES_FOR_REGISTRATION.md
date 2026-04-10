# Railway Variables Needed for Registration

## 🔴 Why Registration is Failing (500 Error)

**The Railway backend needs Keycloak admin credentials to create users!**

Your local `.env` file is missing them, and Railway probably is too.

---

## ✅ Add These to Railway

**Go to Railway → `buzzbreach` service → Variables tab**

**Add these variables:**

### Critical (Required for Registration):

```env
KEYCLOAK_URL=https://buzzbreach-keycloak-production.up.railway.app
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_GRANT_TYPE=password
REALM_NAME=buzzbreach
```

### Already Should Have:

```env
KEYCLOAK_CLIENT_ID=buzzbreach-backend
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=Buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password
PORT=5000
BASE_URL=https://buzzbreach-production.up.railway.app
```

---

## 📋 Step-by-Step

### Step 1: Go to Railway Variables

1. **Railway dashboard** → Click `buzzbreach` service
2. **Click "Variables" tab**
3. **Click "New Variable"** (or edit existing)

### Step 2: Add Each Variable

**Add these one by one:**

1. **KEYCLOAK_URL**
   - Name: `KEYCLOAK_URL`
   - Value: `https://buzzbreach-keycloak-production.up.railway.app`

2. **KEYCLOAK_ADMIN_CLIENT_ID**
   - Name: `KEYCLOAK_ADMIN_CLIENT_ID`
   - Value: `admin-cli`

3. **KEYCLOAK_ADMIN_USERNAME**
   - Name: `KEYCLOAK_ADMIN_USERNAME`
   - Value: `admin`

4. **KEYCLOAK_ADMIN_PASSWORD**
   - Name: `KEYCLOAK_ADMIN_PASSWORD`
   - Value: `admin`

5. **KEYCLOAK_ADMIN_GRANT_TYPE**
   - Name: `KEYCLOAK_ADMIN_GRANT_TYPE`
   - Value: `password`

6. **REALM_NAME**
   - Name: `REALM_NAME`
   - Value: `buzzbreach`

### Step 3: Save and Wait

- **Railway will auto-redeploy** when you add variables
- **Wait for deployment to complete** (check Deployments tab)
- **Status should be "Active"** (green)

### Step 4: Test Registration

- **Try registering in the app again**
- **Should work now!**

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

**Don't include `/realms/...` - the code adds that!**

---

### Admin Credentials

**These are the defaults from your Keycloak Dockerfile:**
- Username: `admin`
- Password: `admin`

**If you changed them in the Dockerfile, use those values instead!**

---

## ✅ Verification

**After adding variables:**

1. **Check Railway logs:**
   - Railway → `buzzbreach` → Deployments → View logs
   - Should see: "Server is running on PORT 5000"
   - No errors about Keycloak

2. **Test registration:**
   - Should work without 500 error
   - User should be created successfully

---

## 📝 Summary

**Add these 6 variables to Railway:**
1. `KEYCLOAK_URL`
2. `KEYCLOAK_ADMIN_CLIENT_ID`
3. `KEYCLOAK_ADMIN_USERNAME`
4. `KEYCLOAK_ADMIN_PASSWORD`
5. `KEYCLOAK_ADMIN_GRANT_TYPE`
6. `REALM_NAME`

**Then registration will work!** 🎉
