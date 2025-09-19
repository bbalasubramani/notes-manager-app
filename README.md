# 📚 Notes Manager App

This is a MERN stack fullstack web application (MongoDB, Express, React, Node. js) for users to add, view, edit and delete their notes. The app features JWT (Json Web Tokens) authentication to safeguard user data.

---

## ✨ Features

-User Auth: Safe user sign up and login with email and password.

-CRUD operations: Each user can create, read, update and delete notes.

-Personalised Dashboard: A personalized dashboard to see and manage all notes of an authenticated user.

-Protected Routes: The API endpoints for notes are protected, meaning only authenticated users can reach them.

---

## 🚀 Live Demo

-Frontend (Vercel): https://notes-manager-app-gamma.vercel.app

-Backend (Render): https://notes-manager-api.onrender.com

---

## ⚙️ Technology Stack

### Frontend

-React: A JavaScript library for creating user interfaces.

-Vite: An alternative to Webpack for modern build setups.

-React Router: Used for client-side routing and navigation.

-Axios: A promise-based HTTP client to make API calls.

---

### Backend

-Node. js & Express: Fast, unopinionated, minimalist web framework for node.

-MongoDB & Mongoose: MongoDB serves as the NoSQL database, while Mongoose is the ODM library in a more schema world.

-JSON Web Tokens (JWT): used for stateless, secure authentication.

-Bcrypt. js and hashing/salting passwords.

-CORS: Middleware for allowing cross-origin request.

---

## 💻 Setup and Installation

-To set it up and run locally, follow this steps.

### Prerequisites

- **Node.js** (v14 or higher)

- **MongoDB** (either on-premise or cloud such as MongoDB Atlas)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/notes-manager-app.git

cd notes-manager-app

### Step 2: Backend Setup

Go to the backend directory and install dependencies by running: # Front-end Project $ cd backend & npm install & touch. env file.

```bash
cd backend

npm install

---

Create a. env file from backend folder and paste your enviroment vars :

```ini
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

PORT=5000

---

### Run the backend server:

```bash
npm run dev

---

### Step 3: Frontend Setup

Open up another terminal Go to the frontend directory, install a packages and start the dev server.

```bash

cd../frontend

npm install

---

###Start the frontend server:

```bash
npm run dev

---

The app can be found at:

👉 http://localhost:5173
