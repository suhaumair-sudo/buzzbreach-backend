# Railway Quick Fix - 5 Steps

## 🎯 The Problem

Service crashes because variables have `localhost` URLs which don't work in production.

---

## ✅ Quick Fix (15 minutes)

### Step 1: Deploy ArangoDB (5 min)

**Use ArangoDB Cloud:**
1. Go to https://cloud.arangodb.com
2. Sign up → Create cluster
3. Get URL: `https://xxxxx.arangodb.cloud:8529`
4. **Copy URL, username, password**

---

### Step 2: Deploy Keycloak on Railway (5 min)

1. Railway → New Service → Empty Service
2. Name: `buzzbreach-keycloak`
3. Add this Dockerfile:
   ```dockerfile
   FROM quay.io/keycloak/keycloak:latest
   ENV KEYCLOAK_ADMIN=admin
   ENV KEYCLOAK_ADMIN_PASSWORD=admin
   CMD ["start-dev", "--hostname-strict=false"]
   ```
4. Deploy → Get URL from Settings → Domains

---

### Step 3: Fix Variables in Railway (3 min)

**Go to your backend service → Variables tab**

**Update these:**

| Variable | Change From | Change To |
|----------|-------------|-----------|
| `ARANGO_URL` | `http://localhost:8529` | `https://your-cluster.arangodb.cloud:8529` |
| `KEYCLOAK_URL` | `http://localhost:8080` | `https://buzzbreach-keycloak.up.railway.app` |
| `KEYCLOAK_SERVER_URL` | `http://localhost:8080` | Same as KEYCLOAK_URL |
| `KEYCLOAK_ISSUER` | `http://localhost:8080/realms/...` | `https://your-keycloak-url/realms/buzzbreach` |

**Add these:**

- `BASE_URL` = Your Railway backend URL (from Settings → Domains)
- `JWT_SECRET` = Any random string

**Delete these (if exist):**
- `NEXTAUTH_SECRET`
- `NEXT_PUBLIC_*` variables

---

### Step 4: Save & Wait (2 min)

- Variables auto-save
- Service auto-redeploys
- Wait 2-5 minutes

---

### Step 5: Check Logs

**Should see:**
- ✅ "Server is running on PORT 5000"
- ✅ "Successfully connected to ArangoDB"
- ❌ NO `ECONNREFUSED` errors

**Test:**
- Visit: `https://your-url.up.railway.app/api-docs`
- Should see Swagger docs!

---

## 🎯 That's It!

**Main fix:** Replace ALL `localhost` URLs with actual deployed URLs!

**If still not working:**
- Check logs for specific error
- Verify ArangoDB is accessible
- Verify Keycloak is accessible
- Double-check all URLs have no typos

---

## 📝 Variable Checklist

- [ ] `ARANGO_URL` - No localhost, uses ArangoDB Cloud URL
- [ ] `KEYCLOAK_URL` - No localhost, uses deployed Keycloak URL
- [ ] `BASE_URL` - Your Railway backend URL
- [ ] All other variables set correctly
- [ ] No `localhost` anywhere!

---

**Follow these 5 steps and Railway will work!** ✅
