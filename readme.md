Milestone 7 - User Login Backend

Hey Kalvians! 👋

Welcome to Milestone 7! 🌟 In this milestone, we will create a backend endpoint for user login, focusing on validating user credentials and verifying encrypted passwords stored in the database.

Learning Goals 🎯

By the end of this milestone, you will:

Understand how to validate user credentials during login.

Learn how to compare the encrypted password with the user’s input.

Why Encrypting Passwords? 🔒

Protect User Data - Ensures passwords remain safe even if the database is compromised.

Privacy - Prevents storing passwords in plain text.

Compliance - Meets security standards like GDPR and PCI-DSS.

Prevents Password Theft - Hashed passwords are difficult to decipher, increasing security.

How Login Authentication Works 🔑

User Enters Credentials

The user provides their email/username and password on the login page.

Fetch User Data from Database

The backend retrieves the user record based on the provided email/username.

If the user is not found, return an error: User does not exist.

Compare Encrypted Passwords

Process the user’s input password using the same hashing algorithm (e.g., bcrypt).

Compare the resulting hash to the stored hashed password.

If they match, the user is authenticated; otherwise, return an error.

Steps for Milestone 7 📝

1. Create Login Endpoint:

Accept user credentials (email/username and password).

Retrieve the corresponding user from the database.

2. Validate Password:

Use bcrypt to hash the entered password.

Compare it with the stored hashed password for authentication.

Note: Password hashing is a one-way process. Instead of decrypting, we compare hashes.

