---

# 📈 Zerodha Clone – Full-Stack Trading Platform (MERN)

A full-stack clone of **Zerodha**, built using **MERN**, featuring authentication, dashboard UI, live charts integration, and secure backend APIs.

![Tech](https://img.shields.io/badge/Tech-MERN%20%7C%20Node%20%7C%20Express%20%7C%20MongoDB-blue)
![Status](https://img.shields.io/badge/Project_Status-Completed-green)



---

## 📌 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Backend Setup](#backend-setup)
* [Frontend Setup](#frontend-setup)
* [Environment Variables](#environment-variables)
* [API Overview](#api-overview)
* [Screenshots](#screenshots)
* [Author](#author)

---

## 🚀 Overview

This **Zerodha Clone** project simulates core features of the popular trading platform Zerodha, including:

✔️ User authentication
✔️ Login / Signup with Passport.js
✔️ Dashboard with trading UI
✔️ Stock data model
✔️ MongoDB database integration

---

## 🔑 Features

### 🔐 Authentication

* User registration
* Login with username & password
* Secure password hashing
* Session-based login with Passport.js

### 📊 Dashboard

* Stocks section
* Basic UI similar to Zerodha
* Placeholder charts / positions / holdings

### 🗂️ Database Models

* Users
* Stock schemas

---

## 🛠️ Tech Stack

### **Frontend**

* React.js
* HTML / CSS
* Basic components (Login, Dashboard)

### **Backend**

* Node.js
* Express.js
* Passport.js (Authentication)
* Mongoose (MongoDB ODM)

### **Database**

* MongoDB

### **Other Tools**

* Nodemon
* dotenv
* CORS
* Body-parser

---

## 📁 Project Structure

Your actual structure:

```
Zerodha_clone/
│
├── backend/
│   ├── model/
│   ├── schemas/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
```

---

# ⚙️ Backend Setup

## 1️⃣ Go to backend folder

```bash
cd backend
```

---

## 2️⃣ Initialize Node Project

If starting fresh:

```bash
npm init
```

OR for auto defaults:

```bash
npm init -y
```

This creates **package.json**.

---

## 3️⃣ Install Nodemon (Dev Dependency)

```bash
npm i -D nodemon
```

✔ Add this inside **package.json → scripts**:

```json
"scripts": {
  "start": "nodemon index.js"
}
```

🔄 **Nodemon automatically restarts the server** when file changes are detected.

---

## 4️⃣ Install All Required Dependencies

```bash
npm i express body-parser cors dotenv mongoose passport passport-local passport-local-mongoose
```

### ✔ Breakdown of Dependencies

#### **1. Core Express & Middleware**

| Package         | Usage                                 |
| --------------- | ------------------------------------- |
| **express**     | Main framework for backend API        |
| **body-parser** | Parses JSON / form-data               |
| **cors**        | Allows frontend–backend communication |

#### **2. Environment Variables**

| Package    | Usage                            |
| ---------- | -------------------------------- |
| **dotenv** | Loads `.env` values for security |

#### **3. Database**

| Package      | Usage                   |
| ------------ | ----------------------- |
| **mongoose** | MongoDB object modeling |

#### **4. Authentication (Passport.js)**

| Package                     | Usage                            |
| --------------------------- | -------------------------------- |
| **passport**                | Middleware for authentication    |
| **passport-local**          | Username/password login          |
| **passport-local-mongoose** | Auto-hashing, sessions for users |

---

## ▶️ Start Backend Server

```bash
npm start
```

Backend runs by default on:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup (Dashboard + Login UI)

You have **two frontend folders**:

🟦 `/dashboard` → After login
🟩 `/frontend` → Login / Signup

(You can later merge if you want.)

---

## ▶️ Run Dashboard

```bash
cd dashboard
npm install
npm start
```

---

## ▶️ Run Login Frontend

```bash
cd frontend
npm install
npm start
```

---

# 🔐 Environment Variables

Create a `.env` file inside **backend/**:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

---

# 📡 API Overview

### **🔹 POST /register**

Registers a new user.

### **🔹 POST /login**

Logs in and starts a Passport session.

### **🔹 GET /logout**

Logs out user.

### **🔹 GET /user**

Returns logged-in user details.

---

# 📸 Screenshots


![Dash Page](https://github.com/Gayatrip-26/Zerodha_clone/blob/89c8c7a4fa9d955537e58b5ba94c8cabfebb63be/zero.jpg)
<p align="center"><em>Main Dashboard Page of Zerodha Trading Platform.</em></p>

![Signup Page](https://github.com/Gayatrip-26/Zerodha_clone/blob/9a6041da3bad50f4d026b355bd30bfeeefe85aab/signup.jpg)
<p align="center"><em>Zerodha account signup page with brokerage details.</em></p>

![Dashboard](https://github.com/Gayatrip-26/Zerodha_clone/blob/9a6041da3bad50f4d026b355bd30bfeeefe85aab/dashboard.jpg)
<p align="center"><em>Equity holdings dashboard with pie chart visualization.</em></p>

![Portfolio Overview](https://github.com/Gayatrip-26/Zerodha_clone/blob/9a6041da3bad50f4d026b355bd30bfeeefe85aab/user_portfolio.jpg)
<p align="center"><em>Portfolio showing stock list, prices, and margin.</em></p>

![Pricing Page](https://github.com/Gayatrip-26/Zerodha_clone/blob/9a6041da3bad50f4d026b355bd30bfeeefe85aab/pricing.jpg)
<p align="center"><em>Zerodha pricing and charges overview.</em></p>

![Partner Platforms](https://github.com/Gayatrip-26/Zerodha_clone/blob/9a6041da3bad50f4d026b355bd30bfeeefe85aab/services.jpg)
<p align="center"><em>Overview of Zerodha partner investment and trading services.</em></p>

![About Page](https://github.com/Gayatrip-26/Zerodha_clone/blob/db48756cb9511afa7167eaeacace6d6c0609b0f5/about.jpg)
<p align="center"><em>Overview of Zerodha and its founder, Nithin Kamath.</em></p>

![Product Page](https://github.com/Gayatrip-26/Zerodha_clone/blob/db48756cb9511afa7167eaeacace6d6c0609b0f5/product_page.jpg)
<p align="center"><em>Technology and investment offerings including Kite platform.</em></p>

![Support Page](https://github.com/Gayatrip-26/Zerodha_clone/blob/db48756cb9511afa7167eaeacace6d6c0609b0f5/support_portal.jpg)
<p align="center"><em>Support portal with ticket tracking and help topics.</em></p>



---

# 👩‍💻 Contribution

**Gayatri Patil**
📧 Email: gayatripp26@gmail.com
🐙 GitHub: [https://github.com/Gayatrip-26](https://github.com/Gayatrip-26)

**Aishwarya Jadhav** 🐙 GitHub: - [https://github.com/Aishwaryajadhav11](https://github.com/Aishwaryajadhav11) 

**Ruchita Chaudhari** 🐙 GitHub: [https://github.com/Ruchit1205](https://github.com/Ruchit1205) 

**Bhagyashri Jadhav** 🐙 GitHub: [https://github.com/bhagyshri-int](https://github.com/bhagyshri-int) 

---


