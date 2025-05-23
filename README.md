# 🧪 Saucedemo Playwright Testing Framework

This project is an automated UI testing framework built with **Playwright** and **TypeScript** to test the core features of [SauceDemo](https://www.saucedemo.com/).

---

## ✅ Features Tested

| Feature           | Description                                  |
|------------------|----------------------------------------------|
| Login            | Validates login with correct credentials     |
| Add to Cart      | Adds items to cart and verifies them         |
| Remove from Cart | Removes items from the cart                  |
| Checkout         | Simulates user checkout process              |
| Sort Feature     | Validates sorting A-Z, Z-A, Price High-Low, Low-High |


## Add Environment Variables
Create a **.env** file:

BASE_URL=https://www.saucedemo.com/

USERNAME=standard_user

PASSWORD=secret_sauce


---

###  Features Used & Author

```markdown
---

 📌 Playwright Features Used

- ✅ Page Object Model (POM)
- ✅ Hooks (`beforeEach`)
- ✅ Parameterized tests with `.env`
- ✅ Reused login session (`storageState`)
- ✅ Multiple browser testing (Chromium, Firefox, WebKit)
- ✅ Grouped tests using `test.describe`

---

 🛠️ Technologies

- Playwright
- TypeScript
- Dotenv

---

 👩‍💻 Author

Raghad Mahmoud
