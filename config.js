// 🚨 Hardcoded secret for testing GitHub Secret Scanning
const AUTH_TOKEN = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";  // ⚠️ UNSAFE: Hardcoded API key

// Dummy function to simulate API usage
function makePayment() {
    console.log("Using API key:", AUTH_TOKEN);
}

makePayment();
