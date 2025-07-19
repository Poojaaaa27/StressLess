Deployment link : https://stress-less-five.vercel.app/
# Student Stress Level Prediction and Health Guidance Platform

A full-stack web application that predicts the stress levels of students using a BERT-based NLP machine learning model. The platform provides targeted health guidance and chatbot support for highly stressed students.
---

## Directory Structure

student-stress-prediction/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── utils/
│ │ └── firebase.js
│ └── public/
│
├── server/ # Flask or MERN backend
│ ├── ml_model/ # BERT and related scripts
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── app.py / server.js
│
├── assets/ # Images & other assets
│ ├── admin-dashboard.png
│ └── questionnaire-dashboard.png
│
├── firebase/ # Firebase config & rules
│
├── README.md
└── LICENSE
---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/student-stress-prediction.git
cd student-stress-prediction
2. Frontend Setup (React)
bash
Copy
Edit
cd client
npm install
npm start
3. Backend Setup
For Flask:
bash
Copy
Edit
cd ../server
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Configure Firebase and BERT model paths in config.py
python app.py
For MERN:
bash

cd ../server
npm install
npm start
4. Firebase Setup

5. ML Model Setup
Download/train your BERT model for stress classification.

Place model files in /server/ml_model

Ensure backend loads model and exposes prediction API endpoint.

Output Images
Admin Dashboard

Questionnaire Dashboard


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

---
