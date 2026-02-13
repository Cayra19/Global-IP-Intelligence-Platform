# 🌍 Global IP Intelligence Platform – Frontend

## 📌 Overview

The frontend of the Global IP Intelligence Platform is a React-based dashboard application designed to provide structured and real-time insights into global patent data.

It dynamically renders role-aware interfaces for:

- Viewing patent filings
- Tracking legal status updates
- Monitoring IP activity
- Managing subscriptions
- Accessing secure user and admin dashboards

The application communicates with the Spring Boot backend through secure REST APIs and follows a modular, scalable architecture.

---

## 🛠️ Tech Stack

- React (Functional Components + Hooks)
- React Router (Protected & Role-based Routing)
- Axios (Centralized API layer)
- Tailwind CSS (Utility-first styling)
- Context API (Global state management)

---

## 🏗️ Architecture

The frontend follows a structured modular design:

- Separation of UI components and business logic
- Dedicated service layer for API communication
- Context-based global state management
- Role-aware routing and conditional rendering

This approach ensures maintainability, scalability, and clean separation of concerns.

---

## 📂 Project Structure

```
src/
│
├── components/       # Dashboard, login, admin & shared UI components
├── constants/        # Application constants
├── services/         # Axios configuration & API calls
├── context/          # Global state management
├── admin/            # Admin dashboard, management & settings
├── firebase/         # Firebase config
├── utils/            # Utility files
└── App.js            # Root component
```

---

## 🔐 Authentication & Authorization

- Login system integrated with backend
- JWT-based token authentication
- Role-based rendering (User / Admin)
- Protected routes using React Router
- Secure API request handling

---

## 🌐 Environment Configuration

Create a `.env` file inside the `frontend/` directory:

```
REACT_APP_API_URL=http://localhost:8080/api
```

Only variables prefixed with `REACT_APP_` are exposed to the client.

For production, configure API URLs using deployment-specific environment variables.

---

## 📡 API Integration

All API requests are centralized using Axios.

Example configuration:

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default API;
```

Environment-based configuration is recommended for production deployment.

---

## 🎨 UI & Styling

Built using Tailwind CSS for:

- Responsive dashboard layouts
- Card-based data presentation
- Tables & status indicators
- Clean administrative interface
- Consistent design system

---

## 📈 Performance Considerations

- Route-based lazy loading
- Centralized API handling
- Token-based session management
- Optimized component re-rendering

---

## 🚀 Running the Frontend

### 1️⃣ Navigate to frontend directory
```
cd frontend
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Start development server
```
npm start
```

Application runs at:

```
http://localhost:3000
```

> Ensure the backend server is running on `http://localhost:8080` before starting the frontend.

Admin route:

```
http://localhost:3000/admin/login
```

Demo access available upon request.

---

## 📊 Key Features

- Interactive IP analytics dashboard
- Legal status tracking interface
- Under-examination count visualization
- Admin data management panel
- Real-time REST API integration
- Clean, responsive UI design

---

## 🔮 Future Enhancements

- Advanced filtering & search capabilities
- Interactive data visualization charts
- Performance optimizations
- Cloud deployment support
- Improved caching & API response handling
