In this milestone, we learned how to extract a JWT token from the browser cookie, send it to the server, and validate it using middleware to ensure that only authenticated users can access certain routes.

🎯 Learning Goals
Extract the JWT token from the browser cookie.

Send the token to the backend server.

Create a middleware function in the backend to validate the JWT token.

Secure pages by checking for authentication before allowing access.

🛠️ What I Did
✅ Frontend
Accessed the JWT token from document.cookie.

Sent it as a request (usually in Authorization header or through a cookie itself) to the backend.

✅ Backend
Created a middleware function verifyToken to:

Read token from req.cookies.

Use jsonwebtoken.verify() to validate the token.

If valid → allow access.

If invalid or missing → return an error or redirect to login.

js
Copy
Edit
// Example middleware in Node.js (Express)
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized: No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden: Invalid token" });
    req.user = decoded;
    next();
  });
};
✅ Page Protection
Applied the middleware to protected routes (e.g., dashboard, profile).

Ensured user cannot access protected routes without a valid token.

