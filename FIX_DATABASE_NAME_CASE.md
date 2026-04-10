# Fix Database Name - Case Sensitivity Issue

## 🔍 The Problem

**Your database is named:** `Buzzbreach` (capital B)
**Your code expects:** `buzzbreach` (lowercase)

**ArangoDB is case-sensitive!** This mismatch can cause connection failures.

---

## ✅ Solution 1: Rename Database (Recommended)

**Rename the database to lowercase:**

1. **In ArangoDB Database UI** (where you are now)
2. **Go to "Databases"** in the left sidebar
3. **Find "Buzzbreach"** database
4. **Click on it** → **Rename** or **Delete and recreate**
5. **Create new database:** `buzzbreach` (all lowercase)

**OR:**

### Create New Database with Correct Name

1. **In ArangoDB UI** → Click "Databases" (if not already there)
2. **Create new database:**
   - Name: `buzzbreach` (all lowercase)
   - Users: (use root or add users)
3. **Click "Create"**
4. **Use this database instead**

---

## ✅ Solution 2: Update Variable to Match

**If you want to keep "Buzzbreach" name:**

**In Railway → Variables:**
- `ARANGO_DATABASE_NAME` = `Buzzbreach` (match the exact case)

**But it's better to use lowercase `buzzbreach` to match your code!**

---

## 🎯 Quick Fix Steps

### Step 1: Create Database with Correct Name

1. **In ArangoDB UI** (where you are)
2. **Click "Databases"** in left sidebar
3. **Create new database:**
   - Name: `buzzbreach` (all lowercase, no capital letters)
4. **Click "Create"**

### Step 2: Update Railway Variable

1. **Railway → `buzzbreach` service → Variables**
2. **Find `ARANGO_DATABASE_NAME`**
3. **Update to:** `buzzbreach` (all lowercase)
4. **Save**

### Step 3: Update Local .env

**In your `.env` file:**
```env
ARANGO_DATABASE_NAME=buzzbreach
```
(All lowercase)

---

## 📋 Check All Railway Variables

**While you're in Railway Variables, make sure you have ALL these:**

| Variable | Value |
|----------|-------|
| `ARANGO_URL` | `https://547947c29a04.arangodb.cloud:8529` |
| `ARANGO_DATABASE_NAME` | `buzzbreach` (lowercase!) |
| `ARANGO_USERNAME` | `root` |
| `ARANGO_PASSWORD` | (your password) |
| `PORT` | `5000` |
| `NODE_ENV` | `production` |
| `KEYCLOAK_URL` | (your Keycloak URL - not localhost!) |
| `KEYCLOAK_SERVER_URL` | (same as KEYCLOAK_URL) |
| `KEYCLOAK_ISSUER` | (your Keycloak URL + `/realms/buzzbreach`) |
| `BASE_URL` | (your Railway backend URL) |
| `JWT_SECRET` | (any random string) |

---

## 🔍 Check Railway Logs for Actual Error

**After fixing database name, check logs:**

1. **Railway → `buzzbreach` service → Deploy Logs**
2. **Scroll to TOP** (beginning of logs)
3. **Look for the first error message**
4. **Share that error** - it will tell us what else is wrong

---

## ✅ Summary

**The issue:**
- Database name case mismatch: `Buzzbreach` vs `buzzbreach`

**The fix:**
1. Create database: `buzzbreach` (all lowercase)
2. Update Railway variable: `ARANGO_DATABASE_NAME=buzzbreach`
3. Update .env: `ARANGO_DATABASE_NAME=buzzbreach`
4. Check Railway logs for other errors

**After fixing this, check Railway logs again to see if there are other issues!**
