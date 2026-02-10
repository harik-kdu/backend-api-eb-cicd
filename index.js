const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "API is running successfully",
  });
});

// Sample API endpoint
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Elastic Beanstalk CI/CD pipeline .",
  });
});

// IMPORTANT: use PORT from environment
const PORT = process.env.PORT || 3000;

// IMPORTANT: bind to all network interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
