const express = require("express");
require("dotenv").config();
const db = require("./database");
const session = require("express-session");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60
    }
  })
);

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

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }
  const admin = db.prepare("SELECT * FROM admin WHERE username = ?").get(username);

  if (!admin) {
    return res.status(401).json({
      error: "Invalid username or password"
    });
  }

  bcrypt.compare(password, admin.password_hash, (err, result) => {
    if (err) {
      console.error("Error comparing password:", err);
      return res.status(500).json({
        error: "An internal server error occurred"
      });
    }
    if (!result) {
      return res.status(401).json({
        error: "Invalid username or password"
      });
    }

    req.session.regenerate((err) => {
      if (err) {
        console.error("Error regenerating session:", err);
        return res.status(500).json({
          error: "An internal server error occurred"
        });
      }
      req.session.adminId = admin.id;
      return res.json({
        message: "Password verified successfully"
      });
    });
  });
});

app.post("/api/admin/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({
        error: "An internal server error occurred"
      });
    }
    res.clearCookie("connect.sid");
    return res.json({
      message: "Logged out successfully"
    });
  });
});










app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});

