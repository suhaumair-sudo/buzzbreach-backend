# Fix: Collections Not Found Error

## 🔴 The Error

```
ArangoError: collection or view not found: corporateEvent
```

**What it means:**
- ✅ Database is connected (good!)
- ✅ Server started (good!)
- ❌ Collections don't exist in database (bad!)

**The app needs collections (tables) to store data, but they haven't been created yet.**

---

## ✅ Solution: Create Collections

**You have a script to create them!**

### Option 1: Run Script Locally (Easiest)

**Run this command:**

```bash
cd d:\forthlogic\buzzbreach\bbm
node createCollections.js
```

**This will:**
- Connect to your ArangoDB Cloud database
- Create all required collections
- Show which ones were created

**After running, Railway should work!**

---

### Option 2: Create Manually in ArangoDB UI

**If script doesn't work, create manually:**

1. **Go to ArangoDB Database UI:**
   - `https://547947c29a04.arangodb.cloud`
   - Login with root credentials

2. **Go to "Collections"** (left sidebar)

3. **Click "+ Add collection"** (green button)

4. **Create each collection:**
   - `corporateEvent`
   - `corporate`
   - `corporateUser`
   - `otp`
   - `emailTemplates`
   - `users`
   - `vendorSentimentsQuiz`
   - `sentimentsQuizResponses`
   - `colleagueRating`
   - `profile`
   - `careerPath`
   - `corporateServices`
   - `subscriptionRequest`
   - `subscriptionPlans`
   - `corporateSubscriptionPlans`
   - `corporateJob`
   - `jobApplication`
   - `interviewTracker`
   - `applicationConversation`
   - `eventRegistration`
   - `eventFeedback`

**For each:**
- Name: (collection name above)
- Type: Document
- Click "Create"

---

## 🚀 Quick Fix: Run the Script

**Just run this:**

```bash
cd d:\forthlogic\buzzbreach\bbm
node createCollections.js
```

**It will create all collections automatically!**

---

## 📋 Collections Needed

**The script will create these 22 collections:**

1. corporateEvent
2. corporate
3. corporateUser
4. otp
5. emailTemplates
6. users
7. vendorSentimentsQuiz
8. sentimentsQuizResponses
9. colleagueRating
10. profile
11. careerPath
12. corporateServices
13. subscriptionRequest
14. subscriptionPlans
15. corporateSubscriptionPlans
16. corporateJob
17. jobApplication
18. interviewTracker
19. applicationConversation
20. eventRegistration
21. eventFeedback

---

## ✅ After Creating Collections

1. **Run the script** (or create manually)
2. **Check Railway logs** - should work now!
3. **Service should start successfully**

---

## 🎯 Summary

**The error:** Collections don't exist in database

**The fix:** Run `node createCollections.js` to create them

**That's it!** After creating collections, Railway should work! 🚀
