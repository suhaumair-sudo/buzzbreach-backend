# Exact Values to Add to Railway

## 🎯 From Your ArangoDB Dashboard

**I can see your ArangoDB details. Here's exactly what to add:**

---

## ✅ Step 1: Get Your Password

**In your ArangoDB dashboard:**

1. **Find "ROOT PASSWORD" section**
2. **Click the "copy password" icon** (clipboard icon) next to the password
3. **This copies your password** - you'll paste it in Railway

**OR click "show password" (eye icon) to see it, then copy manually.**

---

## ✅ Step 2: Add to Railway Variables

**Go to Railway → `buzzbreach` service → Variables tab**

### Variable 1: ARANGO_URL

- **Variable name:** `ARANGO_URL`
- **Value:** `https://547947c29a04.arangodb.cloud:8529`
- (This is your APPLICATION ENDPOINT)

### Variable 2: ARANGO_DATABASE_NAME

- **Variable name:** `ARANGO_DATABASE_NAME`
- **Value:** `buzzbreach`

### Variable 3: ARANGO_USERNAME

- **Variable name:** `ARANGO_USERNAME`
- **Value:** `root`

### Variable 4: ARANGO_PASSWORD

- **Variable name:** `ARANGO_PASSWORD`
- **Value:** (Paste the password you copied from ArangoDB dashboard)
- (The one you copied using the copy icon)

---

## 📋 Exact Values to Copy-Paste

**From your dashboard:**

| Railway Variable | Value from Dashboard |
|-----------------|---------------------|
| `ARANGO_URL` | `https://547947c29a04.arangodb.cloud:8529` (APPLICATION ENDPOINT) |
| `ARANGO_DATABASE_NAME` | `buzzbreach` |
| `ARANGO_USERNAME` | `root` |
| `ARANGO_PASSWORD` | (Click copy icon next to ROOT PASSWORD) |

---

## 🚀 Quick Steps

1. **In ArangoDB dashboard:**
   - Click **copy icon** (clipboard) next to "ROOT PASSWORD"
   - Password is now copied

2. **In Railway:**
   - Go to `buzzbreach` service → Variables tab
   - Add/update these 4 variables:
     - `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529`
     - `ARANGO_DATABASE_NAME` = `buzzbreach`
     - `ARANGO_USERNAME` = `root`
     - `ARANGO_PASSWORD` = (paste the copied password)

3. **Save** → Service auto-redeploys → Check logs!

---

## ✅ Summary

**What to add:**

1. **ARANGO_URL:** `https://547947c29a04.arangodb.cloud:8529` (from APPLICATION ENDPOINT)
2. **ARANGO_PASSWORD:** (Click copy icon next to ROOT PASSWORD in dashboard)
3. **ARANGO_USERNAME:** `root`
4. **ARANGO_DATABASE_NAME:** `buzzbreach`

**That's it!** After adding these, your backend will connect! 🚀
