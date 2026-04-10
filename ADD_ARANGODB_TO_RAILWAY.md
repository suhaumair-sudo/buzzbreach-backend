# Add ArangoDB to Railway Variables

## ✅ Database Created!

**Great! Now add these to Railway:**

---

## 🚀 Step 1: Go to Railway Variables

1. **Go to Railway dashboard**
2. **Click on `buzzbreach` service** (your backend)
3. **Click "Variables" tab**

---

## 🚀 Step 2: Add/Update These Variables

**Add or update these variables with your ArangoDB details:**

### Variable 1: ARANGO_URL

1. **Find `ARANGO_URL`** (or click "+ New Variable" if it doesn't exist)
2. **Variable name:** `ARANGO_URL`
3. **Value:** `https://547947c29a04.arangodb.cloud:8529`
4. **Save**

### Variable 2: ARANGO_DATABASE_NAME

1. **Find `ARANGO_DATABASE_NAME`** (or create new)
2. **Variable name:** `ARANGO_DATABASE_NAME`
3. **Value:** `buzzbreach`
4. **Save**

### Variable 3: ARANGO_USERNAME

1. **Find `ARANGO_USERNAME`** (or create new)
2. **Variable name:** `ARANGO_USERNAME`
3. **Value:** `root`
4. **Save**

### Variable 4: ARANGO_PASSWORD

1. **Find `ARANGO_PASSWORD`** (or create new)
2. **Variable name:** `ARANGO_PASSWORD`
3. **Value:** (Your root password from ArangoDB Cloud - click copy icon in dashboard)
4. **Save**

---

## 📋 Complete List of Variables to Add/Update

**Make sure these are all set:**

| Variable Name | Value |
|--------------|-------|
| `ARANGO_URL` | `https://547947c29a04.arangodb.cloud:8529` |
| `ARANGO_DATABASE_NAME` | `buzzbreach` |
| `ARANGO_USERNAME` | `root` |
| `ARANGO_PASSWORD` | (Your ArangoDB root password) |
| `PORT` | `5000` |
| `NODE_ENV` | `production` |

**Plus Keycloak variables (if you have Keycloak URL):**
| `KEYCLOAK_URL` | (Your Keycloak URL from green service) |
| `KEYCLOAK_SERVER_URL` | (Same as KEYCLOAK_URL) |
| `KEYCLOAK_ISSUER` | (Your Keycloak URL + `/realms/buzzbreach`) |

---

## ✅ Quick Copy-Paste Values

**Copy these exact values:**

```
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password-here
PORT=5000
NODE_ENV=production
```

**Replace `your-password-here` with your actual ArangoDB root password!**

---

## 🎯 Step 3: Save and Redeploy

1. **After adding all variables, they auto-save**
2. **Service will automatically redeploy**
3. **Wait 2-3 minutes**
4. **Check logs** - should see "Successfully connected to ArangoDB" ✅

---

## 🧪 Test Connection

**After redeploy, check logs:**

**Should see:**
- ✅ "Successfully connected to ArangoDB"
- ✅ "Server is running on PORT 5000"
- ❌ NO "ECONNREFUSED" errors
- ❌ NO "Failed to connect" errors

---

## 📝 Summary

**Add these 4 variables to Railway:**

1. `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529`
2. `ARANGO_DATABASE_NAME` = `buzzbreach`
3. `ARANGO_USERNAME` = `root`
4. `ARANGO_PASSWORD` = (your password)

**That's it!** After adding these, your backend should connect to ArangoDB! 🚀
