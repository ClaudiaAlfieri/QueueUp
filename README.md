
# 📋 QueueUp

A support ticket management system built with **React** as part of a React learning journey. This project demonstrates how to build a full-featured helpdesk-style app with user authentication, real-time data, and complete ticket control 🎫.

## 🚀 Features

- 🔐 User authentication (login & register)
- ➕ Create, edit and track support tickets
- ⚡ Real-time updates with Firestore
- 📄 Paginated ticket listing
- 🔍 Ticket detail modal
- 👤 User profile with avatar upload
- 🏢 Customer registration
- 🔒 Protected routes for authenticated users

## 🛠️ Tech Stack

- ⚛️ React
- 🧭 React Router DOM
- 🎨 Custom CSS
- 🔥 Firebase (Authentication, Firestore & Storage)
- 🍞 React Toastify
- 📅 date-fns
- 🎯 React Icons

## 📦 Installation

```bash
git clone https://github.com/yourusername/queueup.git
cd queueup
npm install
```

### 🔑 Firebase Configuration

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** (Email/Password), **Firestore Database** and **Firebase Storage**
3. Create a `firebaseConnection.js` file in the services directory with your Firebase config:

```js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
```

4. Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000` 🚀

## 🎯 How to Use

### Authentication:
- Register a new account or log in with an existing one
- Protected routes ensure only authenticated users can access the system

### Ticket Management:
- ➕ Click **"Novo chamado"** to open a new ticket
- 🔍 Click the **search icon** to view ticket details in a modal
- ✏️ Click the **edit icon** to update an existing ticket
- 📄 Use **"Buscar mais"** to load more tickets

### Profile:
- 👤 Update your display name
- 🖼️ Upload a profile avatar
- 🚪 Click **"Sair"** to log out

### Customers:
- 🏢 Register clients with company name, CNPJ, and address

## 👩‍💻 Author

This project was developed by Cláudia Alfieri as part of a React learning journey.

## 📝 Contribution 🤝

Contributions are welcome through pull requests!


Made with ❤️ and React
