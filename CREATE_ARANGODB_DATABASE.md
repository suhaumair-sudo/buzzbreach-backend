# Create Database in ArangoDB Cloud

## ✅ You Already Have ArangoDB!

**Good news:** You already have an ArangoDB deployment:
- **Endpoint:** `https://547947c29a04.arangodb.cloud:8529`
- **Status:** OK

**You just need to create the `buzzbreach` database inside it!**

---

## 🎯 Step 1: Open Database UI

**In your ArangoDB dashboard:**

1. **Find "Deployment Details" section** (bottom of the page)
2. **Click on "DATABASE UI"** link
   - URL: `https://547947c29a04.arangodb.cloud`
   - OR click the external link icon next to it

**This opens the ArangoDB web interface.**

---

## 🎯 Step 2: Login to Database UI

1. **Username:** `root`
2. **Password:** (Your root password - click the copy icon next to "Root password" in the dashboard)
3. **Click "Login"**

---

## 🎯 Step 3: Create Database

**After logging in:**

1. **Click "Databases"** in the left sidebar (or top menu)
2. **Click "+" or "Add Database"** button
3. **Fill in:**
   - **Database Name:** `buzzbreach`
   - **Users:** (you can add users or use root)
4. **Click "Create"** or "Add"

**That's it! Database `buzzbreach` is created!**

---

## 🎯 Alternative: Use Default Database

**If you can't create a new database, you can use the default:**

- ArangoDB usually has a default database called `_system`
- **OR** you can use the database that already exists

**But it's better to create `buzzbreach` specifically.**

---

## 📋 Quick Steps Summary

1. ✅ **Click "DATABASE UI"** link in ArangoDB dashboard
2. ✅ **Login** with root credentials
3. ✅ **Go to Databases** section
4. ✅ **Create database:** `buzzbreach`
5. ✅ **Done!**

---

## 🔧 If You Can't Access Database UI

**Try this URL directly:**
```
https://547947c29a04.arangodb.cloud
```

**Login with:**
- Username: `root`
- Password: (from your dashboard - click copy icon)

---

## ✅ After Creating Database

**Update Railway variables:**
- `ARANGO_DATABASE_NAME` = `buzzbreach`
- `ARANGO_URL` = `https://547947c29a04.arangodb.cloud:8529`
- `ARANGO_USERNAME` = `root`
- `ARANGO_PASSWORD` = (your root password)

**Then your backend should connect successfully!**

---

## 💡 Pro Tip

**The database UI is the web interface where you can:**
- Create databases
- Create collections
- Run queries
- Manage data

**It's like phpMyAdmin but for ArangoDB!**

---

**Click "DATABASE UI" link in your ArangoDB dashboard to get started!** 🚀
