# back-end TechLearn Build Page Backend
This is the backend for the TechLearn Build Page used to manage Mini, Mid, and Major projects. It helps students and clubs to upload, manage, and retrieve project-related data through a RESTful API.

Features
Store and manage mini, mid, and major projects

User registration and login

Book project slots

Save and access logs

Club-only project visibility

CORS-enabled for frontend integration

Technologies Used
Node.js

Express.js

MongoDB Atlas

Mongoose

dotenv

CORS

Folder Overview
models/: Database schemas

routes/: API route handlers

controller/: Logic for APIs

config/: MongoDB connection

app.js: Main server file

API Base URL
Hosted on Render:
https://backend-web-1-cr1w.onrender.com

📤 How to Add Projects
Use Postman to make POST requests to:

/api/mini-projects

/api/major-projects

/api/mid-projects

Include fields like:

Title

Description

Image URL

Tags or tech stack

Duration

Difficulty

Trainer flag (for major)

Hosting Project Images

postimages.org

imgur.com

Copy the direct link and use it as the image URL in your project data.

Sample Frontend Integration
Your frontend can fetch data using APIs like:

/api/mini-projects

/api/major-projects

/api/users

/api/bookings
