# 🛰️ Multi-Source Intelligence Fusion Dashboard

A production-ready full-stack web application that aggregates and visualizes multi-modal intelligence data (OSINT, HUMINT, IMINT) on an interactive geospatial dashboard.

---

## 🌐 Live Demo

* 🔗 Frontend: https://fusion-dashboard-three.vercel.app/
* 🔗 Backend API: https://fusion-dashboard.onrender.com/api/data

---

## 📌 Problem Statement

In modern intelligence systems, data is fragmented across multiple sources:

* OSINT (Open Source Intelligence)
* HUMINT (Human Intelligence)
* IMINT (Imagery Intelligence)

This project solves the challenge by providing a **centralized fusion dashboard** with real-time visualization and interaction.

---

## ⚙️ Features

### 🗺️ Geospatial Visualization

* Interactive map using Leaflet
* Dynamic markers based on latitude/longitude
* Real-time rendering of intelligence points

### 📊 Multi-Source Data Ingestion

* CSV upload (HUMINT reports)
* JSON/API ingestion (OSINT)
* Image-based intelligence (IMINT)

### 🧠 Intelligent UI

* Hover-based popups for quick inspection
* Image preview inside map markers
* Clean and responsive interface

### ☁️ Cloud Integration

* MongoDB Atlas for database
* Render for backend hosting
* Vercel for frontend deployment

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Leaflet (Maps)
* Axios (API calls)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer (File Upload)

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

fusion-dashboard/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── uploads/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── public/

---

## 🔌 API Endpoints

### GET all data

GET /api/data

### POST add data

POST /api/data/add

### POST upload CSV

POST /api/upload/csv

---

## 🧪 Sample Data Format

```json
{
  "title": "Intel Report",
  "description": "Suspicious activity detected",
  "latitude": 28.61,
  "longitude": 77.23,
  "imageUrl": "https://example.com/image.jpg",
  "type": "IMINT"
}
```

---

## 🚀 Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Kaifislam48/fusion-dashboard.git
cd fusion-dashboard
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
MONGO_URI=your_mongodb_connection_string
```

Run:

```bash
node server.js
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment

### Backend (Render)

* Set environment variable: `MONGO_URI`

### Frontend (Vercel)

* Connect GitHub repo
* Set root directory: `frontend`

---

## ⚠️ Challenges Faced

* Handling CORS between frontend and backend
* Managing environment variables securely
* CSV parsing and real-time data mapping
* Deployment synchronization issues

---

## 🔮 Future Improvements

* Real-time streaming (WebSockets)
* Authentication & role-based access
* Advanced filtering & clustering
* AI-based intelligence classification

---

## 👨‍💻 Author

**Kaif Islam**

* GitHub: https://github.com/Kaifislam48
* LinkedIn: https://www.linkedin.com/in/kaifislam49/

---

## ⭐ Final Note

This project demonstrates a real-world full-stack architecture integrating:

✔ Cloud Database
✔ REST APIs
✔ Geospatial Visualization
✔ Production Deployment

---
