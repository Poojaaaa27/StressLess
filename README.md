Deployment link : https://stress-less-five.vercel.app/
# Student Stress Level Prediction and Health Guidance Platform

A full-stack web application that predicts the stress levels of students using a BERT-based NLP machine learning model. The platform provides targeted health guidance and chatbot support for highly stressed students.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Setup Instructions](#setup-instructions)
- [Usage Guide](#usage-guide)
- [Admin Features](#admin-features)
- [User Features](#user-features)
- [ML Model Integration](#ml-model-integration)
- [Chatbot Integration](#chatbot-integration)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Features

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

## Project Architecture

/client (React frontend)
/src
/components
/pages
/utils
/server (Flask or Node backend)
/models
/routes
/ml_model (BERT)
/controllers
/firebase
(Firebase setup, Firestore rules, Auth config)

yaml
Copy
Edit

---

## Setup Instructions

### Prerequisites

- Node.js & npm
- Python 3.7+ (for Flask)
- Firebase account
- (Optional) MongoDB for MERN stack

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
# Configure Firebase in /src/firebase.js
npm start
3. Backend Setup
For Flask:
bash
Copy
Edit
cd server
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Edit config.py with your Firebase and model paths
python app.py
For MERN:
bash
Copy
Edit
cd server
npm install
# Configure MongoDB and environment variables in .env
npm start
4. Firebase Setup
Create a project on Firebase Console

Enable Authentication (Email/Password)

Create Firestore database

Set Firestore security rules

Copy Firebase config to frontend

5. ML Model Setup
Download or train your BERT model for stress classification.

Place model files in /server/ml_model

Update backend API endpoints to load and predict using the model.

6. Chatbot Setup
Integrate GPT (OpenAI) or Rasa as per your chatbot choice.

Add chatbot widget to frontend and connect backend routes.

Usage Guide
User
Register/login as a student.

Fill the stress assessment form (academic stress, family pressure, health, study/sleep hours, etc.)

Submit to get instant stress prediction (Highly Stressed / Stressed / Normal)

If highly stressed, view reasons, remedies, and use the chat for health guidance.

Admin
Login as admin.

View all user details and stress predictions.

Analyze student stress data via visual graphs.

See ML model accuracy metrics.

Admin Features
Secure admin login

Dashboard to monitor all users and predictions

Analytics: Graphs showing stress distribution

Model accuracy and performance visualization

Export analytics data (optional)

User Features
Sign up/login securely

Fill personalized stress assessment form

Get instant, actionable results

Chatbot support for highly stressed students

View stress prediction history (optional)

ML Model Integration
The backend loads a pre-trained BERT model.

Receives user input data from frontend.

Returns stress classification and factors via REST API.

Chatbot Integration
When a user is highly stressed, show “Chat with Health Guidance” button.

Integrate chatbot using OpenAI or Rasa API.

Allow real-time chat for support and stress management advice.

Screenshots
Add screenshots of the landing page, stress assessment form, results, admin dashboard, analytics graphs, and chatbot popup here.

Future Enhancements
Multi-language support for chatbot and UI

SMS/Email notifications for highly stressed users

Admin export/download of analytics reports

Mobile app version

More advanced analytics and custom reports

License
MIT License. See LICENSE for details.

For any questions or collaboration, contact [YourName] at [your.email@example.com].

yaml
Copy
Edit
---

Just copy everything above (including the markdown code blocks) and paste it into your `README.md` file.  
If you want to personalize your name/email or add code snippets/screenshots, just update the relevant sect
