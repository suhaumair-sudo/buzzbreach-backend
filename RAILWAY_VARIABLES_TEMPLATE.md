# Railway Environment Variables Template

Copy and paste these into Railway Variables tab. Replace the placeholder values with your actual credentials.

---

## ✅ Required Variables

```env
PORT=5000
NODE_ENV=production

# ArangoDB
ARANGO_URL=https://your-arangodb-cluster.arangodb.cloud:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-arangodb-password

# Keycloak
KEYCLOAK_URL=https://your-keycloak-url.com
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_PUBLIC_KEY=your-keycloak-public-key-here
REALM_NAME=buzzbreach

# Keycloak Admin (if needed)
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=your-keycloak-admin-password
KEYCLOAK_ADMIN_GRANT_TYPE=password

# Base URL (your Railway backend URL - get from Railway Settings → Domains)
BASE_URL=https://your-service-name.up.railway.app

# JWT Secret
JWT_SECRET=generate-a-random-secret-key-here
```

---

## 📧 Optional: Email Variables

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
```

---

## 🔐 Optional: Google OAuth

```env
GOOGLE_CLIENT_ID=your-google-oauth-client-id
```

---

## ❌ DO NOT ADD THESE (Not used by your backend)

- `NEXTAUTH_SECRET` ❌
- `NEXT_PUBLIC_BASE_URL` ❌
- `NEXT_PUBLIC_NEXTAUTH_URL` ❌
- `KEYCLOAK_SERVER_URL` ❌ (use `KEYCLOAK_URL` instead)
- `KEYCLOAK_ISSUER` ❌ (not used in your code)

---

## 🔑 How to Get Values

### ArangoDB:
1. Sign up at https://cloud.arangodb.com
2. Create cluster
3. Get connection details from cluster settings

### Keycloak:
1. Deploy Keycloak (or use cloud service)
2. Get URL from deployment
3. Get public key from: Keycloak Admin → Realm Settings → Keys → Active RSA key

### BASE_URL:
1. Railway → Your Service → Settings → Domains
2. Copy the URL (e.g., `https://buzzbreach-production.up.railway.app`)

### JWT_SECRET:
Generate a random string:
```bash
# On Windows PowerShell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

Or use an online generator: https://randomkeygen.com/

---

## ✅ After Adding Variables

1. Save in Railway
2. Service will auto-redeploy
3. Check logs for errors
4. Test API: `https://your-url.up.railway.app/api-docs`
