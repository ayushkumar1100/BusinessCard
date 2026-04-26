# 📇 Digital Business Card Generator

## 🚀 Overview

A full-stack web application where users can create, manage, and store digital business cards securely.

---

## ✨ Features

* 🔐 User Authentication (JWT)
* 🔑 Secure Login & Signup (bcrypt password hashing)
* 📇 Create Business Cards
* 📄 View Your Cards
* ✏️ Edit Cards
* ❌ Delete Cards
* 🔒 Protected Routes (User-specific data)

---

## 🛠️ Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Authentication: JWT, bcrypt

---

## 📂 Project Structure

```
backend/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── server.js

frontend/
 ├── login.html
 ├── dashboard.html
 ├── index.html
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd BusinessCard
```

### 2️⃣ Install backend dependencies

```
cd backend
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running:

```
mongodb://127.0.0.1:27017
```

### 4️⃣ Run backend server

```
node server.js
```

### 5️⃣ Run frontend

Open:

```
frontend/login.html
```

---

## 🔐 Authentication Flow

1. User signs up
2. Password is hashed using bcrypt
3. User logs in → receives JWT token
4. Token stored in localStorage
5. Token sent with every request
6. Backend verifies token

---


## 👨‍💻 Author

Ayush Kumar 
