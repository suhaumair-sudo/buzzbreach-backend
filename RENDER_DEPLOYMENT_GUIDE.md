# Deploy Backend to Render - Step by Step

## 🎯 Why Render?

- ✅ **Easiest** deployment platform
- ✅ **Free tier** (750 hours/month)
- ✅ **No credit card** required
- ✅ **Simple web interface** (no CLI needed)
- ✅ **Auto-deploy** from GitHub
- ✅ **Automatic HTTPS**

---

## 🚀 Complete Setup (10 minutes)

### Step 1: Sign Up

1. Go to **https://render.com**
2. Click **"Get Started for Free"**
3. Sign up with **GitHub** (recommended) or email
4. Verify your email

### Step 2: Create Web Service

1. In Render dashboard, click **"New +"** button (top right)
2. Select **"Web Service"**
3. Connect GitHub (if not already connected):
   - Click **"Connect account"**
   - Authorize Render to access your GitHub
4. Select repository: **`MishiBaloch/buzzbreach`**
5. Click **"Connect"**

### Step 3: Configure Service

Fill in these settings:

**Basic Settings:**
- **Name:** `buzzbreach-backend` (or any name)
- **Region:** Choose closest to you (e.g., `Oregon (US West)`)
- **Branch:** `main`
- **Root Directory:** `bbm` ⚠️ **IMPORTANT!**

**Build & Deploy:**
- **Environment:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `node server.js`

**Plan:**
- Select **"Free"** plan

### Step 4: Add Environment Variables

**Before clicking "Create Web Service":**

1. Scroll down to **"Environment Variables"** section
2. Click **"Add Environment Variable"** for each:

```env
PORT=5000
NODE_ENV=production

# ArangoDB (get from ArangoDB Cloud)
ARANGO_URL=https://your-cluster.arangodb.cloud:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password

# Keycloak (deploy separately first)
KEYCLOAK_URL=https://your-keycloak-url.com
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_PUBLIC_KEY=your-public-key
REALM_NAME=buzzbreach

# Base URL (will be your Render URL)
BASE_URL=https://buzzbreach-backend.onrender.com

# JWT Secret (generate random string)
JWT_SECRET=your-random-secret-key-here

# Email (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-gmail-app-password
```

**Important:**
- Replace all placeholder values
- Don't use `localhost` - use actual deployed URLs
- You can update `BASE_URL` after deployment

### Step 5: Deploy

1. Click **"Create Web Service"** button
2. Render will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Start your server (`node server.js`)
3. Wait 5-10 minutes for first deployment
4. Watch the build logs in real-time

### Step 6: Get Your Backend URL

1. After deployment completes, you'll see:
   - **Status:** "Live" (green)
   - **URL:** `https://buzzbreach-backend.onrender.com`
2. **Copy this URL** - you'll need it!

### Step 7: Update BASE_URL

1. Go to **"Environment"** tab
2. Find `BASE_URL` variable
3. Click to edit
4. Update to your actual Render URL:
   - `https://buzzbreach-backend.onrender.com`
5. Save (service will auto-redeploy)

---

## 🧪 Test Your Deployment

### Test 1: Check if Running

Visit in browser:
```
https://buzzbreach-backend.onrender.com/api-docs
```

Should see Swagger documentation page.

### Test 2: Check Logs

1. In Render dashboard → Your service
2. Click **"Logs"** tab
3. Should see:
   - "Server is running on PORT 5000"
   - "Successfully connected to ArangoDB" (if DB configured)

### Test 3: Test API Endpoint

```bash
curl https://buzzbreach-backend.onrender.com/api/v1/user/get-all-users
```

---

## 🔧 Troubleshooting

### Service Won't Start

**Check logs:**
1. Go to "Logs" tab
2. Look for errors (red text)
3. Common issues:
   - Missing environment variables
   - Database connection failed
   - Port already in use

**Fix:**
- Verify all environment variables are set
- Check ArangoDB URL is correct
- Make sure no `localhost` URLs

### Build Fails

**Check build logs:**
1. Go to "Events" tab
2. Click latest deployment
3. Check "Build Logs"

**Common fixes:**
- Make sure `package.json` has `start` script
- Verify `Root Directory` is set to `bbm`
- Check Node.js version compatibility

### Database Connection Failed

**Error:** `ECONNREFUSED` or connection timeout

**Fix:**
1. Verify `ARANGO_URL` is correct
2. Make sure ArangoDB is accessible from internet
3. Check firewall settings
4. Use ArangoDB Cloud (recommended)

---

## 📝 Update Mobile App Config

After deployment, update your mobile app:

**File:** `bfm/src/api/config.js`

```javascript
export const API_CONFIG = {
  BASE_URL: 'https://buzzbreach-backend.onrender.com/api/v1',
  TIMEOUT: 30000,
};
```

Then rebuild mobile app:
```bash
cd bfm
npm run build:android
```

---

## 🔄 Auto-Deploy from GitHub

Render automatically deploys when you push to GitHub:

1. Make changes to your code
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push origin main
   ```
3. Render detects changes
4. Auto-deploys new version
5. Done! (takes 2-5 minutes)

---

## 💰 Free Tier Limits

**What you get:**
- ✅ 750 hours/month (enough for 24/7)
- ✅ 512MB RAM
- ✅ Automatic HTTPS
- ✅ Custom domain support

**Limitations:**
- ⚠️ Service sleeps after 15 min inactivity
- ⚠️ First request after sleep takes ~30 seconds (cold start)
- ⚠️ Still perfect for testing!

**To prevent sleep:**
- Use a service like UptimeRobot (free) to ping your service every 5 minutes
- Or upgrade to paid plan ($7/month)

---

## 🎯 Next Steps

1. ✅ Deploy backend on Render
2. ✅ Deploy ArangoDB (ArangoDB Cloud)
3. ✅ Deploy Keycloak (Render or separate)
4. ✅ Update environment variables
5. ✅ Test API
6. ✅ Update mobile app config
7. ✅ Rebuild mobile app

---

## 📚 Useful Links

- **Render Dashboard:** https://dashboard.render.com
- **Render Docs:** https://render.com/docs
- **ArangoDB Cloud:** https://cloud.arangodb.com
- **Status Page:** https://status.render.com

---

## ✅ Deployment Checklist

- [ ] Signed up on Render
- [ ] Connected GitHub account
- [ ] Created Web Service
- [ ] Set Root Directory to `bbm`
- [ ] Added all environment variables
- [ ] Deployed successfully
- [ ] Got backend URL
- [ ] Updated `BASE_URL` variable
- [ ] Tested API (Swagger docs work)
- [ ] Updated mobile app config
- [ ] Rebuilt mobile app

---

## 💡 Pro Tips

1. **Use ArangoDB Cloud** - Easiest database setup
2. **Deploy Keycloak on Render too** - Keep everything in one place
3. **Set up auto-deploy** - Push to GitHub = auto-deploy
4. **Monitor logs** - Check "Logs" tab regularly
5. **Use UptimeRobot** - Keep service awake (free)

---

## 🆘 Need Help?

- **Render Support:** https://render.com/docs/support
- **Community:** https://community.render.com
- **Status:** https://status.render.com

---

**That's it!** Render is much simpler than Railway. You should be up and running in 10 minutes! 🚀
