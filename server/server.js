const express = require("express");
require("dotenv").config();
const db = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Flooring API is running!",
  });
});

app.get("/api/flooring", (req, res) => {
  try {
    const flooring = db
      .prepare("SELECT * FROM flooring ORDER BY created_at DESC")
      .all();

    res.json(flooring);
  } catch (error) {
    console.error("Error fetching flooring:", error);
    res.status(500).json({ error: "Failed to fetch flooring" });
  }
});

app.get("/api/admin", (req, res) => {
  try {
    const admin = db
      .prepare("SELECT * FROM admin ORDER BY created_at DESC")
      .all();

    res.json(admin);
  } catch (error) {
    console.error("Error fetching admin:", error);
    res.status(500).json({ error: "Failed to fetch admin" });
  }
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
