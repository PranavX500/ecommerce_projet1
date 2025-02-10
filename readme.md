Follow-along Project Milestone #6

Welcome to Milestone 6! 🌟

In this milestone, we will create a backend endpoint for the Signup Page to securely store user data. We will focus on encrypting passwords before saving them in the database.

Learning Goals 🎯

By completing this milestone, you will:

Understand how to encrypt passwords before saving them.

Learn how to store complete user data securely in the database.

Why Encrypt Passwords?

✅ Protect User Data: Prevents exposure in case of a data breach.
✅ Privacy: Ensures that passwords remain hidden.
✅ Compliance: Meets security regulations like GDPR and PCI-DSS.
✅ Stops Password Theft: Hashed passwords cannot be easily stolen or guessed.

Steps for Milestone 6 📝

1. Encrypt the Password

Use bcrypt to hash the user's password during signup.

Store the hashed password in the database instead of plain text.

2. Store Complete User Data

Save all user information (name, email, etc.) in the database.

Ensure that the password is securely encrypted.

