# How to Get ArangoDB URL for Railway

## 🎯 You Need a Public ArangoDB URL

Your local ArangoDB at `localhost:8529` won't work with Railway. You need a **publicly accessible** ArangoDB.

---

## ✅ Option 1: ArangoDB Cloud (EASIEST - Recommended)

**This is the easiest way to get a public ArangoDB URL.**

### Step 1: Sign Up

1. Go to **https://cloud.arangodb.com**
2. Click **"Sign Up"** or **"Get Started"**
3. Create account (email or Google)
4. Verify your email

### Step 2: Create Cluster

1. After login, click **"Create Cluster"** or **"New Cluster"**
2. Choose plan:
   - **Free tier** (if available) - Good for testing
   - **Paid plan** - For production
3. Select **region** (closest to you)
4. Configure:
   - **Cluster name:** `buzzbreach-db` (or any name)
   - **Database name:** `buzzbreach`
   - **Username:** `root` (or your choice)
   - **Password:** (set a strong password - **save this!**)
5. Click **"Create Cluster"**
6. Wait 5-10 minutes for cluster to be created

### Step 3: Get Connection URL

1. Once cluster is ready, click on it
2. Go to **"Connection"** or **"Overview"** tab
3. You'll see connection details:

**Example:**
```
URL: https://xxxxx.arangodb.cloud:8529
Username: root
Password: (the one you set)
Database: buzzbreach
```

4. **Copy the URL** - this is your `ARANGO_URL`!

**Format:**
- `https://xxxxx.arangodb.cloud:8529`
- OR `https://xxxxx.arangodb.cloud:443` (HTTPS port)

### Step 4: Use in Railway

In Railway → Variables:
- `ARANGO_URL` = `https://xxxxx.arangodb.cloud:8529`
- `ARANGO_USERNAME` = `root`
- `ARANGO_PASSWORD` = (your password)
- `ARANGO_DATABASE_NAME` = `buzzbreach`

---

## ✅ Option 2: Deploy ArangoDB on Railway

**Deploy ArangoDB as a service on Railway itself.**

### Step 1: Create New Service

1. In Railway dashboard
2. Click **"New"** → **"Database"** → **"Add ArangoDB"**
   - OR **"New"** → **"Empty Service"**

### Step 2: If Using Empty Service

1. Name it: `buzzbreach-arangodb`
2. Add this to service:
   - Use Railway's ArangoDB template if available
   - OR use Docker image: `arangodb/arangodb:latest`

### Step 3: Get Connection URL

1. After deployment, go to service → **"Settings"**
2. Under **"Domains"** or **"Connection"**, you'll see:
   - Internal URL (for Railway services)
   - External URL (if exposed)

**For Railway-to-Railway connection:**
- Use the **internal service URL** (e.g., `http://buzzbreach-arangodb:8529`)
- Railway services can talk to each other internally

**For external access:**
- Expose the service
- Get public URL from Settings → Domains

### Step 4: Use in Railway

**If both services on Railway (internal):**
- `ARANGO_URL` = `http://buzzbreach-arangodb:8529` (internal service name)

**If exposed publicly:**
- `ARANGO_URL` = `https://buzzbreach-arangodb.up.railway.app:8529`

---

## ✅ Option 3: Self-Hosted ArangoDB (Advanced)

**If you have your own server/VPS:**

1. Install ArangoDB on your server
2. Configure firewall to allow port 8529
3. Get your server's public IP or domain
4. URL format: `http://your-server-ip:8529` or `https://your-domain.com:8529`

**Not recommended for beginners** - requires server management.

---

## 📋 Quick Reference

### ArangoDB Cloud (Recommended)

**URL Format:**
```
https://xxxxx.arangodb.cloud:8529
```

**How to get:**
1. Sign up: https://cloud.arangodb.com
2. Create cluster
3. Copy URL from Connection tab

**Cost:** Free tier available, or paid plans

---

### Railway Deployed ArangoDB

**Internal URL (Railway-to-Railway):**
```
http://service-name:8529
```

**External URL (if exposed):**
```
https://service-name.up.railway.app:8529
```

**How to get:**
1. Deploy ArangoDB service on Railway
2. Get URL from Settings → Connection/Domains

---

## 🎯 My Recommendation

**Use ArangoDB Cloud** because:
- ✅ Easiest setup (5 minutes)
- ✅ Managed service (no maintenance)
- ✅ Free tier available
- ✅ Reliable and fast
- ✅ Automatic backups
- ✅ No server management needed

---

## 🔧 Current Situation

**You have ArangoDB running locally:**
- URL: `http://localhost:8529`
- This works on your computer
- **But won't work with Railway** (Railway can't reach your localhost)

**Solution:**
- Use **ArangoDB Cloud** (easiest)
- OR deploy ArangoDB on Railway
- Then use that public URL in Railway variables

---

## 📝 Step-by-Step: ArangoDB Cloud

### 1. Sign Up
- Go to: https://cloud.arangodb.com
- Create account

### 2. Create Cluster
- Click "Create Cluster"
- Choose free tier (if available)
- Set database name: `buzzbreach`
- Set username: `root`
- Set password: (save this!)

### 3. Wait for Creation
- Takes 5-10 minutes
- You'll get email when ready

### 4. Get URL
- Open cluster
- Go to "Connection" tab
- Copy URL (looks like: `https://xxxxx.arangodb.cloud:8529`)

### 5. Use in Railway
- `ARANGO_URL` = The URL you copied
- `ARANGO_USERNAME` = `root`
- `ARANGO_PASSWORD` = Your password
- `ARANGO_DATABASE_NAME` = `buzzbreach`

---

## ⚠️ Important Notes

1. **Don't use localhost:**
   - `localhost:8529` only works on your computer
   - Railway servers can't reach it
   - You need a public URL

2. **Use HTTPS:**
   - ArangoDB Cloud provides HTTPS
   - Use `https://` URLs, not `http://`

3. **Save credentials:**
   - Save your password securely
   - You'll need it for Railway variables

4. **Database name:**
   - Make sure database `buzzbreach` exists
   - Create it in ArangoDB Cloud if needed

---

## 🧪 Test Your ArangoDB URL

**After getting URL, test it:**

1. **In browser:**
   ```
   https://your-cluster.arangodb.cloud:8529
   ```
   Should see ArangoDB web interface

2. **Or test connection:**
   ```bash
   curl https://your-cluster.arangodb.cloud:8529/_api/version
   ```
   Should return ArangoDB version info

---

## 📚 Useful Links

- **ArangoDB Cloud:** https://cloud.arangodb.com
- **ArangoDB Docs:** https://www.arangodb.com/docs/
- **Railway Docs:** https://docs.railway.app

---

## ✅ Summary

**To get ArangoDB URL:**

1. **Easiest:** Use ArangoDB Cloud
   - Sign up → Create cluster → Get URL
   - URL format: `https://xxxxx.arangodb.cloud:8529`

2. **Alternative:** Deploy on Railway
   - Create ArangoDB service → Get URL
   - Use internal or external URL

3. **Advanced:** Self-hosted
   - Install on your server → Use server IP/domain

**Recommended:** **ArangoDB Cloud** - It's the easiest! 🚀
