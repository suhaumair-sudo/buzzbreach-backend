# Deploy to Cyclic - No Credit Card Required!

## 🎯 Why Cyclic?

- ✅ **NO credit card required**
- ✅ **Made specifically for Node.js**
- ✅ **Zero configuration needed**
- ✅ **Super simple web interface**
- ✅ **Free forever**

---

## 🚀 Complete Setup (5 minutes!)

### Step 1: Sign Up

1. Go to **https://cyclic.sh**
2. Click **"Get Started"** or **"Deploy Now"**
3. Sign up with **GitHub** (recommended - no credit card!)
   - OR sign up with email
4. Authorize Cyclic to access your GitHub

### Step 2: Deploy Your Backend

1. After signing up, you'll see the dashboard
2. Click **"Deploy Now"** or **"New App"**
3. Select **"Deploy from GitHub"**
4. Choose repository: **`MishiBaloch/buzzbreach`**
5. Configure:
   - **App Name:** `buzzbreach-backend` (or any name)
   - **Root Directory:** `bbm` ⚠️ **IMPORTANT!**
   - **Branch:** `main`
6. Click **"Deploy"**

### Step 3: Wait for Deployment

- Cyclic will automatically:
  - Clone your repo
  - Install dependencies (`npm install`)
  - Start your server (`node server.js`)
- Takes 2-5 minutes
- Watch progress in real-time

### Step 4: Add Environment Variables

**After deployment completes:**

1. Click on your app in dashboard
2. Go to **"Environment"** tab
3. Click **"Add Variable"** for each:

```env
PORT=5000
NODE_ENV=production

# ArangoDB
ARANGO_URL=https://your-arangodb-url:8529
ARANGO_DATABASE_NAME=buzzbreach
ARANGO_USERNAME=root
ARANGO_PASSWORD=your-password

# Keycloak
KEYCLOAK_URL=https://your-keycloak-url.com
KEYCLOAK_CLIENT_ID=buzzbreach-backend
KEYCLOAK_PUBLIC_KEY=your-public-key
REALM_NAME=buzzbreach

# Base URL (update after you get your URL)
BASE_URL=https://buzzbreach-backend.cyclic.app

# JWT Secret
JWT_SECRET=your-random-secret-key

# Email (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
```

4. **Save** each variable
5. App will **auto-restart** with new variables

### Step 5: Get Your Backend URL

1. In your app dashboard
2. You'll see your URL at the top:
   - Example: `https://buzzbreach-backend.cyclic.app`
3. **Copy this URL**

### Step 6: Update BASE_URL

1. Go back to **"Environment"** tab
2. Find `BASE_URL` variable
3. Update it to your actual Cyclic URL:
   - `https://buzzbreach-backend.cyclic.app`
4. Save (app will restart)

---

## 🧪 Test Your Deployment

### Test 1: Check if Running

Visit in browser:
```
https://buzzbreach-backend.cyclic.app/api-docs
```

Should see Swagger documentation.

### Test 2: Check Logs

1. In Cyclic dashboard → Your app
2. Click **"Logs"** tab
3. Should see:
   - "Server is running on PORT 5000"
   - "Successfully connected to ArangoDB" (if DB configured)

### Test 3: Test API

```bash
curl https://buzzbreach-backend.cyclic.app/api/v1/user/get-all-users
```

---

## 🔧 Troubleshooting

### App Won't Start

**Check logs:**
1. Go to "Logs" tab
2. Look for errors (red text)

**Common fixes:**
- Make sure `Root Directory` is set to `bbm`
- Verify all environment variables are set
- Check `package.json` has `start` script: `"start": "node server.js"`

### Build Fails

**Check:**
- Root directory is correct (`bbm`)
- `package.json` exists in `bbm` folder
- No syntax errors in code

### Database Connection Failed

**Error:** `ECONNREFUSED` or timeout

**Fix:**
1. Verify `ARANGO_URL` is correct (not localhost!)
2. Make sure ArangoDB is accessible from internet
3. Use ArangoDB Cloud (recommended)

---

## 🔄 Auto-Deploy from GitHub

Cyclic automatically deploys when you push to GitHub:

1. Make changes to your code
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push origin main
   ```
3. Cyclic detects changes
4. Auto-deploys new version
5. Done! (takes 2-3 minutes)

---

## 💰 Free Tier

**What you get:**
- ✅ Unlimited deployments
- ✅ 512MB RAM
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ **No credit card required!**

**Limitations:**
- ⚠️ Service sleeps after inactivity
- ⚠️ First request after sleep takes ~10-15 seconds (cold start)
- ⚠️ Perfect for testing!

**To prevent sleep:**
- Use UptimeRobot (free) to ping your service every 5 minutes
- Or upgrade to paid plan ($10/month)

---

## 📝 Update Mobile App Config

After deployment, update your mobile app:

**File:** `bfm/src/api/config.js`

```javascript
export const API_CONFIG = {
  BASE_URL: 'https://buzzbreach-backend.cyclic.app/api/v1',
  TIMEOUT: 30000,
};
```

Then rebuild mobile app:
```bash
cd bfm
npm run build:android
```

---

## 🎯 Next Steps

1. ✅ Sign up on Cyclic (no credit card!)
2. ✅ Deploy backend
3. ✅ Add environment variables
4. ✅ Test API
5. ✅ Deploy ArangoDB (ArangoDB Cloud)
6. ✅ Deploy Keycloak (Cyclic or separate)
7. ✅ Update mobile app config
8. ✅ Rebuild mobile app

---

## 📚 Useful Links

- **Cyclic Dashboard:** https://app.cyclic.sh
- **Cyclic Docs:** https://docs.cyclic.sh
- **ArangoDB Cloud:** https://cloud.arangodb.com
- **UptimeRobot:** https://uptimerobot.com (keep service awake)

---

## ✅ Deployment Checklist

- [ ] Signed up on Cyclic (no credit card!)
- [ ] Connected GitHub
- [ ] Deployed backend
- [ ] Set Root Directory to `bbm`
- [ ] Added all environment variables
- [ ] Got backend URL
- [ ] Updated `BASE_URL` variable
- [ ] Tested API (Swagger docs work)
- [ ] Updated mobile app config
- [ ] Rebuilt mobile app

---

## 💡 Pro Tips

1. **Use ArangoDB Cloud** - Easiest database setup
2. **Deploy Keycloak on Cyclic too** - Keep everything together
3. **Set up auto-deploy** - Push to GitHub = auto-deploy
4. **Monitor logs** - Check "Logs" tab regularly
5. **Use UptimeRobot** - Keep service awake (free)

---

## 🆘 Need Help?

- **Cyclic Docs:** https://docs.cyclic.sh
- **Cyclic Discord:** https://discord.gg/cyclic
- **Support:** support@cyclic.sh

---

## 🎉 That's It!

**Cyclic is the easiest option:**
- ✅ No credit card needed
- ✅ Made for Node.js
- ✅ Super simple
- ✅ Free forever

**Try it now:** https://cyclic.sh

You'll be deployed in 5 minutes! 🚀
