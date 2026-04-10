# Keycloak Setup for Railway

## ✅ Yes, You Can Use Your .env Variables!

**Good news:** You can use the **same variable names** from your `.env` file in Railway.

**But:** You need to **deploy Keycloak first** (can't use `localhost` URLs).

---

## 🎯 The Problem

Your `.env` probably has:
```env
KEYCLOAK_URL=http://localhost:8080
KEYCLOAK_SERVER_URL=http://localhost:8080
```

**This won't work in Railway** - Railway can't reach `localhost` on your computer.

**Solution:** Deploy Keycloak, then use the deployed URL.

---

## 🚀 Option 1: Deploy Keycloak on Railway (Recommended)

### Step 1: Create New Service

1. In Railway dashboard
2. Click **"New"** → **"Empty Service"**
3. Name it: `buzzbreach-keycloak`
4. Click **"Create"**

### Step 2: Add Keycloak

**Method A: Using Dockerfile (Easiest)**

1. In your Keycloak service → **"Settings"** → **"Source"**
2. Click **"Generate Dockerfile"** or create one:

**Create `Dockerfile` in your repo:**
```dockerfile
FROM quay.io/keycloak/keycloak:latest

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

# Expose port
EXPOSE 8080

# Start Keycloak in dev mode (for testing)
CMD ["start-dev", "--hostname-strict=false", "--hostname-strict-https=false"]
```

3. Railway will auto-detect and use it

**Method B: Use Railway Template**

1. Railway → **"New"** → Search for **"Keycloak"**
2. If template exists, use it
3. Otherwise, use Method A

### Step 3: Deploy

1. Railway will automatically:
   - Build the Docker image
   - Start Keycloak
2. Wait 3-5 minutes for deployment
3. Check logs - should see Keycloak starting

### Step 4: Get Keycloak URL

1. Go to Keycloak service → **"Settings"** tab
2. Scroll to **"Domains"** section
3. Copy the URL:
   - Example: `https://buzzbreach-keycloak.up.railway.app`
4. **This is your Keycloak URL!**

### Step 5: Access Keycloak Admin

1. Visit your Keycloak URL: `https://buzzbreach-keycloak.up.railway.app`
2. Click **"Administration Console"**
3. Login:
   - Username: `admin`
   - Password: `admin` (or what you set)

### Step 6: Configure Keycloak

**Create Realm:**
1. Login to Keycloak admin
2. Hover over realm dropdown (top left)
3. Click **"Create Realm"**
4. Name: `buzzbreach`
5. Click **"Create"**

**Create Client:**
1. In `buzzbreach` realm → **"Clients"** → **"Create client"**
2. **Client ID:** `buzzbreach-backend`
3. Click **"Next"**
4. **Client authentication:** ON (for confidential client)
5. **Valid redirect URIs:** `*` (for testing) or your specific URLs
6. Click **"Save"**
7. Go to **"Credentials"** tab → Copy **"Client Secret"**

**Get Public Key:**
1. Go to **"Realm Settings"** → **"Keys"** tab
2. Find **"Active"** RSA key
3. Click on it
4. Copy the **"Public key"** (just the key, no headers)

---

## 📝 Update Railway Variables

**Go to your backend service → Variables tab**

**Use the SAME variable names from your .env, but update URLs:**

| Variable (from .env) | Old Value (localhost) | New Value (deployed) |
|---------------------|----------------------|---------------------|
| `KEYCLOAK_URL` | `http://localhost:8080` | `https://buzzbreach-keycloak.up.railway.app` |
| `KEYCLOAK_SERVER_URL` | `http://localhost:8080` | Same as `KEYCLOAK_URL` (or remove if duplicate) |
| `KEYCLOAK_CLIENT_ID` | `buzzbreach-backend` | `buzzbreach-backend` (same) |
| `KEYCLOAK_CLIENT_SECRET` | (your secret) | (copy from Keycloak admin) |
| `KEYCLOAK_PUBLIC_KEY` | (your key) | (copy from Keycloak admin) |
| `KEYCLOAK_REALM` | `buzzbreach` | `buzzbreach` (same) |
| `REALM_NAME` | `buzzbreach` | `buzzbreach` (same) |

**Also add (if not in .env):**
- `KEYCLOAK_ISSUER` = `https://buzzbreach-keycloak.up.railway.app/realms/buzzbreach`

---

## 🎯 Complete Railway Variables

**After deploying Keycloak, your Railway variables should be:**

```env
# Keycloak (from deployed Keycloak on Railway)
KEYCLOAK_URL=https://buzzbreach-keycloak.up.railway.app
KEYCLOAK_SERVER_URL=https://buzzbreach-keycloak.up.railway.app
KEYCLOAK_ISSUER=https://buzzbreach-keycloak.up.railway.app/realms/buzzbreach
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_CLIENT_SECRET=your-client-secret-from-keycloak
KEYCLOAK_PUBLIC_KEY=your-public-key-from-keycloak
KEYCLOAK_REALM=buzzbreach
REALM_NAME=buzzbreach

# Keycloak Admin (if your code uses these)
KEYCLOAK_ADMIN_CLIENT_ID=admin-cli
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=admin
KEYCLOAK_ADMIN_GRANT_TYPE=password
```

---

## ✅ Quick Steps Summary

1. ✅ **Deploy Keycloak on Railway**
   - New Service → Empty Service
   - Add Dockerfile or use template
   - Deploy

2. ✅ **Get Keycloak URL**
   - Settings → Domains
   - Copy URL

3. ✅ **Configure Keycloak**
   - Access admin console
   - Create realm: `buzzbreach`
   - Create client: `buzzbreach-backend`
   - Get client secret and public key

4. ✅ **Update Railway Variables**
   - Use same variable names from .env
   - Replace `localhost` URLs with deployed Keycloak URL
   - Add client secret and public key

5. ✅ **Save and Test**
   - Save variables
   - Service redeploys
   - Check logs - should connect!

---

## 🔧 Alternative: Use Keycloak Cloud Service

**If you don't want to deploy Keycloak yourself:**

1. Use a managed Keycloak service
2. Get the URL and credentials
3. Use same variable names in Railway
4. Update URLs to the cloud service URL

**Options:**
- Keycloak Cloud (paid)
- Other managed Keycloak providers

---

## 💡 Pro Tips

1. **Keep same variable names:**
   - Your code already uses these names
   - Just update the URLs

2. **Test Keycloak first:**
   - Make sure Keycloak is accessible
   - Test admin login
   - Verify realm and client exist

3. **Use HTTPS:**
   - Railway provides HTTPS automatically
   - Use `https://` URLs, not `http://`

4. **Save credentials:**
   - Save client secret securely
   - Save public key
   - You'll need them for Railway variables

---

## 🧪 Test After Setup

**1. Test Keycloak:**
```
https://buzzbreach-keycloak.up.railway.app
```
Should see Keycloak welcome page.

**2. Test Admin:**
```
https://buzzbreach-keycloak.up.railway.app/admin
```
Should be able to login.

**3. Test Backend Connection:**
- Check Railway logs
- Should see successful Keycloak connection
- No connection errors

---

## 📋 Checklist

- [ ] Keycloak deployed on Railway
- [ ] Keycloak URL obtained
- [ ] Realm `buzzbreach` created
- [ ] Client `buzzbreach-backend` created
- [ ] Client secret copied
- [ ] Public key copied
- [ ] Railway variables updated (same names, new URLs)
- [ ] All `localhost` URLs replaced
- [ ] Variables saved
- [ ] Service redeployed
- [ ] Logs show successful connection

---

## 🆘 Troubleshooting

### Keycloak Won't Start

**Check logs:**
- Railway → Keycloak service → Logs
- Look for errors
- Common: Port conflicts, memory issues

**Fix:**
- Make sure port 8080 is exposed
- Check Dockerfile is correct

### Can't Access Keycloak Admin

**Check:**
- URL is correct
- Admin credentials are correct
- Service is running (not crashed)

### Backend Can't Connect to Keycloak

**Check:**
- `KEYCLOAK_URL` is correct (no localhost!)
- Keycloak service is running
- Realm and client exist
- Client secret is correct
- Public key is correct

---

## ✅ Summary

**Yes, you can use your .env variables!**

**Just:**
1. Deploy Keycloak first (on Railway)
2. Get the deployed URL
3. Use same variable names in Railway
4. Replace `localhost` URLs with deployed URL
5. Add client secret and public key from Keycloak admin

**That's it!** Your code will work the same, just with a deployed Keycloak instead of localhost! 🚀
