# Fix Git Authentication Error

## 🔴 Error

```
Permission to MishiBaloch/buzzbreach.git denied to rimsha-mukhtiar01
```

**Problem:** You're logged in as a different GitHub user.

---

## ✅ Solution Options

### Option 1: Use Personal Access Token (Recommended)

1. **Generate Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name: `buzzbreach-push`
   - Expiration: 90 days (or custom)
   - Select scopes: ✅ **repo** (all repo permissions)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Update Remote URL with Token:**
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/MishiBaloch/buzzbreach.git
   ```
   
   Replace `YOUR_TOKEN` with the token you copied.

3. **Push:**
   ```bash
   git push -u origin main
   ```

---

### Option 2: Switch GitHub Account

1. **Logout current account:**
   ```bash
   git config --global --unset user.name
   git config --global --unset user.email
   ```

2. **Set correct account:**
   ```bash
   git config --global user.name "MishiBaloch"
   git config --global user.email "your-email@example.com"
   ```

3. **Use Personal Access Token** (still needed for HTTPS):
   - Follow Option 1 to generate token
   - Use token as password when pushing

---

### Option 3: Use SSH (Alternative)

1. **Generate SSH Key:**
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```
   Press Enter to accept defaults.

2. **Add SSH Key to GitHub:**
   - Copy public key:
     ```bash
     cat ~/.ssh/id_ed25519.pub
     ```
   - GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste the key and save

3. **Change Remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:MishiBaloch/buzzbreach.git
   ```

4. **Push:**
   ```bash
   git push -u origin main
   ```

---

## 🚀 Quick Fix (Easiest)

**Use Personal Access Token:**

1. Get token from: https://github.com/settings/tokens
2. Update remote:
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/MishiBaloch/buzzbreach.git
   ```
3. Push:
   ```bash
   git push -u origin main
   ```

---

## 🔍 Check Current Config

```bash
# Check remote URL
git remote -v

# Check git user
git config user.name
git config user.email
```

---

## ⚠️ Security Note

- **Never share your token**
- **Don't commit tokens to git**
- **Use environment variables for tokens in code**

---

## 📝 Complete Steps (Token Method)

```bash
# 1. Get token from GitHub (see above)

# 2. Update remote with token
git remote set-url origin https://YOUR_TOKEN@github.com/MishiBaloch/buzzbreach.git

# 3. Verify
git remote -v

# 4. Push
git push -u origin main
```
