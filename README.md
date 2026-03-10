# 🚀 Cypress POC

## ⚙️ Installation

### 1️⃣ Clone Repository

```
git clone https://github.com/aslamrpl/playwright-poc.git
cd playwright-poc
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Install Cypress

```
npx cypress install
```

---

## 🔐 Environment Setup

Create a `.env` file in the project root and add:

```
YAHOO_URL=https://search.yahoo.com
```

## 🧪 Running Tests

### Run All Tests (Headless)

```
npx cypress run
```

### Run Tests in Interactive Mode

```
npx cypress open
```

### Run Specific Test File

```
npx cypress run --spec cypress/e2e/CypressPOC.cy.js
```