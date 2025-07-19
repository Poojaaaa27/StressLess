Deployment link : https://stress-less-five.vercel.app/
# Student Stress Level Prediction and Health Guidance Platform

A full-stack web application that predicts the stress levels of students using a BERT-based NLP machine learning model. The platform provides targeted health guidance and chatbot support for highly stressed students.

## 📌 Key Features
- User and Admin authentication (role-based access)
- Student stress level prediction: Highly Stressed, Stressed, Normal
- BERT-based NLP model for analysis
- Dynamic questionnaire for stress factors (academics, family, health, etc.)
- Display of reasons and remedies for high stress
- Chatbot for real-time health guidance
- Admin dashboard for analytics and user management
- Visualization of student stress distribution and model accuracy
- Responsive UI for web and mobile
- Secure data storage using Firebase

## 📁 Directory Structure
```
.
├── client/                       # React frontend source code
│   ├── src/                      # Source code (components, pages, utils, firebase.js)
│   └── public/                   # Public assets for frontend
├── server/                       # Flask or MERN backend code
│   ├── ml_model/                 # BERT model and inference scripts
│   ├── routes/                   # API endpoints
│   ├── models/                   # DB models or ML logic
│   ├── controllers/              # Backend controllers and logic
│   └── app.py / server.js        # Backend entry point (Flask)
├── assets/                       # Project images and output screenshots
│   ├── admin-dashboard.png       # Screenshot: Admin Dashboard
│   └── questionnaire-dashboard.png   # Screenshot: Questionnaire Dashboard
├── firebase/                     # Firebase configs & rules
├── requirements.txt / package.json   # Python/Node dependencies
├── README.md                     # Project documentation (this file)
└── LICENSE                       # License file
```

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone repo
cd StressLess
```

### 2. Install Dependencies
```bash
#frontend
cd client
npm install
#backend
cd ../server
npm install
#ML Model Setup
-Download/train your BERT model for stress classification.
-Place model files in /server/ml_model
-Ensure backend loads model and exposes prediction API endpoint.
```
## 📊 Visual Outputs
<img src="./home.png" alt="OUTPUT" width="500"/>
<img src="login.png" alt="REGISTRATION PORTAL" width="500"/>


Output Images
Admin Dashboard

Questionnaire Dashboard



---
