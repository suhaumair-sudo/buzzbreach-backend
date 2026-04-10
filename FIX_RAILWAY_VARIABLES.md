# Fix Railway Environment Variables

## 🔴 Problems Found

1. **NEXTAUTH_SECRET** - Your backend doesn't use NextAuth (it uses Keycloak)
2. **NEXT_PUBLIC_* variables** - These are for Next.js frontend, not your Express backend
3. **localhost URLs** - These won't work in production (service crashed because of this!)

---

## ✅ Correct Environment Variables for Your Backend

Your backend needs these variables (remove the NextAuth ones):

### Required Variables:

```env
# Server
PORT=5000
NODE_ENV=production

# ArangoDB Database
ARANGO_URL=https://your-arangodb-url:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password

# Keycloak Authentication
KEYCLOAK_URL=https://your-keycloak-url.com
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_PUBLIC_KEY=your-public-key-here
REALM_NAME=buzzbreach

# Keycloak Admin (if needed)
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=your-admin-password
KEYCLOAK_ADMIN_GRANT_TYPE=password

# Email Configuration (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com

# JWT Secret (for dev mode fallback)
JWT_SECRET=your-secret-key-change-in-production

# Base URL (for email links)
BASE_URL=https://your-railway-backend-url.up.railway.app

# Google OAuth (if using)
GOOGLE_CLIENT_ID=your-google-client-id
```

---

## 🗑️ Variables to REMOVE from Railway

Delete these (they're not used by your backend):

- ❌ `NEXTAUTH_SECRET`
- ❌ `NEXT_PUBLIC_BASE_URL`
- ❌ `NEXT_PUBLIC_NEXTAUTH_URL`

---

## 🔧 Fix localhost URLs

**Current (WRONG - causes crash):**
```env
KEYCLOAK_SERVER_URL=http://localhost:8080
KEYCLOAK_ISSUER=http://localhost:8080/realms/buzzbreach
NEXT_PUBLIC_BASE_URL=http://localhost:5000
```

**Should be (CORRECT):**
```env
KEYCLOAK_URL=https://your-keycloak-deployed-url.com
BASE_URL=https://your-railway-backend-url.up.railway.app
```

**localhost doesn't work in production!** You need:
1. **Deployed Keycloak** URL (or use a Keycloak cloud service)
2. **Your Railway backend URL** (get it from Railway → Settings → Domains)

---

## 📝 Step-by-Step Fix in Railway

### Step 1: Remove Unused Variables

In Railway → Variables tab:
1. Find `NEXTAUTH_SECRET` → Click delete
2. Find `NEXT_PUBLIC_BASE_URL` → Click delete
3. Find `NEXT_PUBLIC_NEXTAUTH_URL` → Click delete

### Step 2: Fix Keycloak URLs

1. **If you have Keycloak deployed:**
   - Update `KEYCLOAK_SERVER_URL` → Change to `KEYCLOAK_URL`
   - Value: `https://your-keycloak-url.com` (not localhost!)

2. **If Keycloak is not deployed yet:**
   - You need to deploy Keycloak first, OR
   - Use a Keycloak cloud service
   - Then update the URL

### Step 3: Add Missing Variables

Add these if missing:

```env
ARANGO_URL=your-arangodb-url
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password
NODE_ENV=production
BASE_URL=https://your-railway-url.up.railway.app
```

### Step 4: Get Your Railway Backend URL

1. In Railway → Your Service → **Settings** tab
2. Under **"Domains"** → Copy the URL
3. Use this for `BASE_URL` variable

---

## 🚨 Why Service Crashed

The service crashed because:
1. **localhost URLs** - Can't reach localhost from Railway servers
2. **Missing ArangoDB** - Database connection failed
3. **Wrong variables** - NextAuth variables don't exist in your code

---

## ✅ Correct Variable Names

Your code uses these variable names (check your code):

| Railway Variable | Code Uses |
|-----------------|-----------|
| `KEYCLOAK_URL` | `process.env.KEYCLOAK_URL` |
| `ARANGO_URL` | `process.env.ARANGO_URL` |
| `ARANGO_DATABASE_NAME` | `process.env.ARANGO_DATABASE_NAME` |
| `ARANGO_USERNAME` | `process.env.ARANGO_USERNAME` |
| `ARANGO_PASSWORD` | `process.env.ARANGO_PASSWORD` |
| `BASE_URL` | `process.env.BASE_URL` |
| `EMAIL_HOST` | `process.env.EMAIL_HOST` |
| `JWT_SECRET` | `process.env.JWT_SECRET` |

**Note:** Your code uses `KEYCLOAK_URL`, not `KEYCLOAK_SERVER_URL`!

---

## 🎯 Quick Fix Checklist

- [ ] Remove `NEXTAUTH_SECRET`
- [ ] Remove `NEXT_PUBLIC_BASE_URL`
- [ ] Remove `NEXT_PUBLIC_NEXTAUTH_URL`
- [ ] Change `KEYCLOAK_SERVER_URL` → `KEYCLOAK_URL`
- [ ] Update Keycloak URL (remove localhost, use deployed URL)
- [ ] Add `ARANGO_URL`, `ARANGO_DATABASE_NAME`, `ARANGO_USERNAME`, `ARANGO_PASSWORD`
- [ ] Add `BASE_URL` (your Railway backend URL)
- [ ] Add `NODE_ENV=production`
- [ ] Save and redeploy

---

## 🔄 After Fixing Variables

1. **Redeploy:**
   - Railway will auto-redeploy when you save variables
   - OR click "Redeploy" button

2. **Check Logs:**
   - Go to "Deployments" tab
   - Click latest deployment → View logs
   - Should see "Server is running on PORT 5000"

3. **Test:**
   - Visit your Railway URL: `https://your-app.up.railway.app/api-docs`
   - Should see Swagger documentation

---

## 💡 About NEXTAUTH_SECRET

**What it is:**
- Used by NextAuth.js (authentication library for Next.js)
- Your backend doesn't use Next.js or NextAuth
- You use Keycloak instead

**Where it would be:**
- Only needed if you had a Next.js frontend using NextAuth
- Not needed for your Express/Keycloak backend

**Action:** Just delete it from Railway variables!

---

## 📚 Next Steps

1. ✅ Fix all variables in Railway
2. ✅ Deploy Keycloak (if not already deployed)
3. ✅ Set up ArangoDB (cloud or self-hosted)
4. ✅ Redeploy backend
5. ✅ Test the API
