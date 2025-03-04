# Secure Open Source Training Repository

## 🛠️ What You'll Learn
This repository is designed for **hands-on exercises** to learn the **basic steps to start securing open-source projects on GitHub**. You'll learn how to:

- **Find and fix vulnerabilities** using **CodeQL and Copilot Autofix**
- **Detect and remove hardcoded secrets** using **GitHub Secret Scanning & Push Protection**
- **Keep dependencies secure** with **Dependabot**
- **Prevent unreviewed code from being merged** by enabling **branch protection**
- **Set up responsible security reporting** with **SECURITY.md and Private Vulnerability Reporting (PVR)**

Each section below contains a **practical exercise** to apply these security best practices.

---

## 🔒 Hands-on Security Exercises

### **1️⃣ Running Code Scanning (CodeQL) & Using Copilot Autofix**
📌 **Objective:** Use **CodeQL scanning** to detect vulnerabilities and **Copilot Autofix** to quickly fix them.

#### **📝 Steps:**
1. **Fork this repository** to your GitHub account.
2. **Enable Code Scanning** in your repository:
   - Go to **Settings > Security > Code Scanning**.
   - Click **Enable Default Setup** for **CodeQL Analysis**.
3. **Trigger CodeQL manually**:
   - Navigate to **Security > Code Scanning Alerts**.
   - Click **"Run Analysis"** if it hasn't been triggered automatically.
4. **Review vulnerabilities flagged by CodeQL**:
   - Open **Security > Code Scanning Alerts**.
   - Look for issues in `vulnerable.js`, such as:
     - **Insecure deserialization (Remote Code Execution - RCE)**
     - **Local File Inclusion (LFI)**
     - **Server-Side Request Forgery (SSRF)**
5. **Fix a detected vulnerability using Copilot Autofix**:
   - Open `vulnerable.js` and hover over a flagged issue.
   - Click **"Fix with Copilot"**.
   - Review and apply the suggested fix.
   - Commit and push your changes.

---

### **2️⃣ Detecting and Managing Secrets (Secret Scanning & Push Protection)**
📌 **Objective:** Learn how to verify **Secret Scanning and Push Protection settings**, view secret alerts, and properly remove exposed secrets.

#### **📝 Steps:**

1. **Verify that Secret Scanning and Push Protection are enabled:**
   - Navigate to your repository on GitHub.
   - Click on **Settings** > **Code security and analysis**.
   - Ensure that both **"Secret scanning"** and **"Push protection"** are enabled.
   - If they're not enabled, toggle them on.

2. **View existing Secret Scanning alerts:**
   - Go to **Security** > **Secret Scanning Alerts**.
   - Check if any secrets have already been detected.

3. **Simulate a Secret Detection:**
   - Open `config.js` in your local repository.
   - Add a fake secret:
     ```javascript
     const TEST_SECRET = "sk_test_1234567890abcdef";
     ```
   - Commit and push the change.
   - If **Push Protection is enabled**, GitHub will block the push and notify you.

4. **Bypass Push Protection (For Learning Purposes):**
   - Attempt to **bypass** the push protection by providing a reason (e.g., "It's used in tests").
   - Observe that GitHub allows the push but **generates a Secret Scanning alert**.

5. **Respond to a Secret Scanning Alert:**
   - Navigate to **Security > Secret Scanning Alerts**.
   - Locate the alert for the committed secret.
   - Follow GitHub’s recommended steps to **revoke** the exposed secret and **remove** it from the codebase.

6. **Properly Remove the Secret from Git History:**
   - Use tools like `git filter-repo` or **BFG Repo-Cleaner** to remove the secret from history.
   - After cleaning, **force-push** the changes:
     ```bash
     git push origin main --force
     ```
   - ⚠️ Be cautious with force-pushing, as it **overwrites history**.

By completing this exercise, you'll learn how to **manage secrets securely** and prevent accidental exposure.

---

### **3️⃣ Updating Dependencies (Dependabot)**
📌 **Objective:** Use **Dependabot** to detect and update outdated dependencies.

#### **📝 Steps:**
1. **Ensure Dependabot is enabled**:
   - Go to **Settings > Code Security & Analysis**.
   - Enable **Dependabot alerts** and **Dependabot security updates**.
2. **Check for outdated dependencies**:
   - Open `package.json`, and look for:
     - `express: 4.15.0` (contains vulnerabilities)
     - `lodash: 4.17.20` (contains vulnerabilities)
3. **Check for Dependabot alerts**:
   - Go to **Security > Dependabot Alerts**.
   - Look for dependency warnings.
4. **Apply Dependabot's suggested fixes**:
   - Click on a **Dependabot security alert**.
   - Follow instructions to **create a pull request (PR)** for the update.
   - **Merge the PR** to apply the update.

---

### **4️⃣ Configuring Branch Protection**
📌 **Objective:** Set up **branch protection rules** to enforce security best practices.

#### **📝 Steps:**
1. **Go to** **Settings > Branches**.
2. **Click "Add Rule"** for the `main` branch.
3. **Enable the following protection settings**:
   - ✅ Require **pull requests before merging**.
   - ✅ Require at least **one approval** before merging.
   - ✅ Require **status checks to pass** before merging.
   - ✅ Prevent **force pushes** to `main`.
4. **Save the changes** and test:
   - Try to push directly to `main`:
     ```bash
     echo "New Change" >> test.txt
     git add test.txt
     git commit -m "Testing direct push"
     git push origin main
     ```
   - The push should be **blocked**. Instead, create a **pull request**.

---

### **5️⃣ Handling a Security Report (`SECURITY.md` & Private Vulnerability Reporting)**
📌 **Objective:** Learn how to **report and manage security vulnerabilities responsibly**.

#### **📝 Steps:**
1. **Navigate to `SECURITY.md`** and review the **disclosure policy**.
2. **Enable Private Vulnerability Reporting (PVR)**:
   - Go to **Settings > Security > Private Vulnerability Reporting**.
   - Click **Enable**.
3. **Simulate a security report**:
   - Go to **Security > Private Vulnerability Reporting**.
   - Click **Report a Vulnerability** and describe a potential issue.
   - Submit the report.
4. **Apply a security fix** and **publish a security advisory**:
   - Fix a vulnerability.
   - Go to **Security > Security Advisories**.
   - Click **New Draft Advisory**, fill in details, and publish.
---
## **💡 Final Notes**
- Follow each exercise step by step.
- **Fix vulnerabilities** flagged by GitHub security tools.
- Explore **GitHub’s security features** in real-time.

**Happy Securing! 🔒**

