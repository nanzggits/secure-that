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
   - Go to **Settings > Security > Code Security > Code Scanning**.
   - Click **Enable Default Setup** for **CodeQL Analysis**.
   - Click **Enable CodeQL**.
   - In the **Actions** tab, CodeQL Setup is in progress.
3. **Review vulnerabilities flagged by CodeQL**:
   - Open **Settings > Security > Code Security > Code Scanning**.
   - In the ellipsis menu of **CodeQL analysis**, select **View Code Scanning alerts**.
   5. **Fix a detected vulnerability using Copilot Autofix**:
   - Open each issue and click on **Generate fix**.
  
---

### **2️⃣ Detecting and Managing Secrets (Secret Scanning & Push Protection)**
📌 **Objective:** Learn how to verify **Secret Scanning and Push Protection settings**, view secret alerts, and properly remove exposed secrets.

#### **📝 Steps:**

1. **Verify that Secret Scanning and Push Protection are enabled:**
   - Navigate to your repository on GitHub.
   - Click on **Settings** > **Code security**.
   - Ensure that both **"Secret scanning"** and **"Push protection"** are enabled.
   - If they're not enabled, toggle them on.

2. **View existing Secret Scanning alerts:**
   - Go to repo's **Security** tab > **Secret Scanning**.
   - Check if any secrets have already been detected.
📝 N.B.: The **Security** tab is not in the main navigation bar of a repository. To access it, click the ellipsis menu (…) in the top-right corner and select "Security" from the dropdown. 🚀

3. **Simulate a Secret Detection:**
   - Open `config.js` in your local repository.
   - Add a fake secret:
     ```javascript
     const TEST_SECRET = "sk_test_1234567890abcdef";
     ```
   - Commit and push the change.
   - If **Push Protection is enabled**, GitHub will block the push and notify you.

4. **Respond to a Secret Scanning Alert:**
   - Navigate to **Security > Secret Scanning Alerts**.
   - Locate the alert for the committed secret.
   - Follow GitHub’s recommended steps to **revoke** the exposed secret and **remove** it from the codebase.

By completing this exercise, you'll learn how to **manage secrets securely** and prevent accidental exposure.

---

### **3️⃣ Updating Dependencies (Dependabot)**
📌 **Objective:** Use **Dependabot** to detect and update outdated dependencies.

#### **📝 Steps:**
1. **Ensure Dependabot is enabled**:
   - Go to the **Security** tab .
   - Enable **Dependabot alerts**.
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
📌 **Objective:** Learn how to **set up a security policy, report, and manage vulnerabilities responsibly**.

#### **📝 Steps:**
1. **Create a Security Policy (`SECURITY.md`)**:
   -Navigate to **Settings > Security > Security Policy**.
   -Click **"Set up a security policy"** (this creates a new `SECURITY.md` file).
   -Define your security policy, including:
      -  How to **report security issues**.
      - Expected **response times**.
       - Preferred **contact method** (e.g., Private Vulnerability Reporting, email).

2. **Enable Private Vulnerability Reporting (PVR)**
   -Go to **Settings > Security > Private Vulnerability Reporting**.
   -Click **"Enable"** to allow responsible disclosure of vulnerabilities.

3. **Simulate a Security Report**
   -Navigate to **Security > Private Vulnerability Reporting**.
   -Click **"Report a Vulnerability"**.
   -Fill in the form with a **sample vulnerability report** (for testing purposes).
   -Submit the report.

4. **Apply a Security Fix & Publish a Security Advisory**
   -**Fix the vulnerability in your repository**.
   -Navigate to **Security > Security Advisories**.
   -Click **"New Draft Advisory"**.
   -Fill in the details, including:
    - Affected versions.
    - Severity of the issue.
    - Steps to mitigate the vulnerability.
   -Click **"Publish"** to make the advisory public once the fix is deployed.

✅ **Now, your repository has a security policy and a structured process for handling vulnerabilities!** 🚀  

For more details, check out the [GitHub Security Docs](https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories).

---
## **💡 Final Notes**
- Follow each exercise step by step.
- **Fix vulnerabilities** flagged by GitHub security tools.
- Explore **GitHub’s security features** in real-time.

**Happy Securing! 🔒**

