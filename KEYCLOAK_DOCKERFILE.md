# Keycloak Dockerfile for Railway

## Quick Setup

Create this file in your repository root (or in a `keycloak` folder):

**File:** `keycloak/Dockerfile`

```dockerfile
FROM quay.io/keycloak/keycloak:latest

# Set admin credentials
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

# Expose port
EXPOSE 8080

# Start Keycloak in dev mode
# For production, use: start --optimized
CMD ["start-dev", "--hostname-strict=false", "--hostname-strict-https=false"]
```

---

## How to Use in Railway

### Option 1: Separate Service (Recommended)

1. **Create new service:**
   - Railway → New → Empty Service
   - Name: `buzzbreach-keycloak`

2. **Connect to GitHub:**
   - Source → Connect GitHub
   - Select your repo
   - **Root Directory:** `keycloak` (if Dockerfile is in keycloak folder)
   - OR leave root if Dockerfile is at repo root

3. **Deploy:**
   - Railway auto-detects Dockerfile
   - Deploys automatically

4. **Get URL:**
   - Settings → Domains
   - Copy URL

### Option 2: Add to Existing Repo

1. **Create Dockerfile:**
   - In your repo, create `keycloak/Dockerfile`
   - Add the content above

2. **Deploy:**
   - Railway → New Service
   - Connect to same repo
   - Set Root Directory: `keycloak`
   - Deploy

---

## Production Dockerfile (Optional)

**For production, use optimized mode:**

```dockerfile
FROM quay.io/keycloak/keycloak:latest

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

# Build optimized image
RUN /opt/keycloak/bin/kc.sh build

# Start optimized
CMD ["start", "--hostname-strict=false", "--hostname-strict-https=false"]
```

**Note:** Takes longer to build but runs faster.

---

## Environment Variables in Railway

**For Keycloak service, you can add:**

- `KEYCLOAK_ADMIN` = `admin`
- `KEYCLOAK_ADMIN_PASSWORD` = `admin` (or change it)
- `KC_DB` = (if using external database)
- `KC_DB_URL` = (database URL)
- `KC_DB_USERNAME` = (database username)
- `KC_DB_PASSWORD` = (database password)

**For now, dev mode is fine for testing!**

---

## Quick Deploy Steps

1. Create `keycloak/Dockerfile` with content above
2. Push to GitHub
3. Railway → New Service → Connect repo
4. Set Root Directory: `keycloak`
5. Deploy
6. Get URL from Settings → Domains
7. Access: `https://your-keycloak-url.up.railway.app`
8. Login: admin/admin
9. Configure realm and client
10. Use URL in backend service variables

---

**That's it!** Simple Dockerfile, Railway handles the rest! 🚀
