const app = require("./app");
const connectDatabase = require("./db/Database");

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server for handling uncaught exception");
});

// Config
require("dotenv").config({
  path: "./config/.env", // Ensure the correct path to your .env file inside the config folder
});

// Connect to the database
connectDatabase();

// Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for: ${err.message}`);
  console.log("Shutting down the server for unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
