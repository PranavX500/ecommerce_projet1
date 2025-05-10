Welcome to Milestone 3 of our Follow-Along Project! 🚀
After successfully completing Milestone 2, we’ve laid the frontend groundwork for our e-commerce application. Now, it's time to build the backend, connect to a database, and implement basic error handling.

📚 Learning Goals
By completing this milestone, we will:

✅ Structure backend folders (routes, controllers, models, etc.)

✅ Set up a Node.js + Express server

✅ Connect the backend to MongoDB

✅ Implement basic error-handling mechanisms

✅ Update the README.md file with Milestone 3 progress

🛠️ Key Features Implemented
1. Backend Folder Structure
We organized the backend with the following folders:

pgsql
Copy
Edit
backend/
│
├── controllers/
├── routes/
├── models/
├── middlewares/
├── utils/
└── index.js
Note: Concepts like middlewares and utils will be explored more deeply in future lessons.

2. Server Setup
Initialized a Node.js project

Installed essential packages: express, dotenv, mongoose, nodemon

Created an Express server and configured it to listen on a specific port

3. Database Connection
Connected to MongoDB Atlas using Mongoose

Verified the connection using console logs

4. Error Handling
Implemented basic error responses for failed routes or DB issues

Ensured the app doesn’t crash with unexpected input