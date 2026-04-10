# Use Your ArangoDB Cloud URL in Railway

## ✅ You Have ArangoDB Cloud!

From your dashboard, I can see:

**Your ArangoDB Details:**
- **Application Endpoint:** `https://547947c29a04.arangodb.cloud:8529`
- **Database UI:** `https://547947c29a04.arangodb.cloud`
- **Root Password:** (the one you set)

---

## 🚀 Use This in Railway

### Step 1: Go to Railway Variables

1. Open Railway dashboard
2. Go to your backend service
3. Click **"Variables"** tab

### Step 2: Update ArangoDB Variables

**Update these variables with your ArangoDB Cloud details:**

| Variable | Value |
|----------|-------|
| `ARANGO_URL` | `https://547947c29a04.arangodb.cloud:8529` |
| `ARANGO_DATABASE_NAME` | `buzzbreach` (or create this database) |
| `ARANGO_USERNAME` | `root` |
| `ARANGO_PASSWORD` | (Your root password from ArangoDB Cloud) |

### Step 3: Create Database (If Needed)

**If database `buzzbreach` doesn't exist:**

1. Go to Database UI: `https://547947c29a04.arangodb.cloud`
2. Login with root credentials
3. Create database: `buzzbreach`
4. Or use the default database

### Step 4: Save and Redeploy

1. Save all variables in Railway
2. Service will auto-redeploy
3. Check logs - should connect successfully!

---

## 📋 Complete Railway Variables

**Make sure you have these set:**

```env
# ArangoDB (from your ArangoDB Cloud)
ARANGO_URL=https://547947c29a04.arangodb.cloud:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-root-password

# Server
PORT=5000
NODE_ENV=production

# Keycloak (still need to deploy this)
KEYCLOAK_URL=https://your-keycloak-url.com
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_PUBLIC_KEY=your-public-key
REALM_NAME=buzzbreach

# Base URL (your Railway backend URL)
BASE_URL=https://your-backend.up.railway.app

# JWT Secret
JWT_SECRET=your-random-secret
```

---

## ✅ Next Steps

1. ✅ **ArangoDB is done!** - Use the URL above
2. ⏳ **Deploy Keycloak** - Still need this
3. ⏳ **Update Railway variables** - With ArangoDB URL
4. ⏳ **Test connection** - Should work now!

---

## 🧪 Test Connection

**After updating Railway variables:**

1. Check Railway logs
2. Should see: "Successfully connected to ArangoDB"
3. No more `ECONNREFUSED` errors!

---

## 💡 Important Notes

1. **Use HTTPS URL:**
   - `https://547947c29a04.arangodb.cloud:8529`
   - Not `http://`

2. **Database Name:**
   - Make sure database `buzzbreach` exists
   - Create it in ArangoDB Cloud if needed

3. **Password:**
   - Use the root password from ArangoDB Cloud
   - It's shown in your dashboard (click to reveal)

4. **Expires in 14 days:**
   - Your free trial expires in 14 days
   - Consider upgrading or create new cluster before expiry

---

## 🎯 Quick Action

**Right now, update Railway:**

1. Railway → Your Service → Variables
2. Update `ARANGO_URL` to: `https://547947c29a04.arangodb.cloud:8529`
3. Update `ARANGO_USERNAME` to: `root`
4. Update `ARANGO_PASSWORD` to: (your password)
5. Save → Auto-redeploys → Check logs!

**Your ArangoDB connection should work now!** ✅
