const Database = require("better-sqlite3");
const path = require("path");

// Store the database file in the server folder
const dbPath = path.join(__dirname, "flooring.db");
const db = new Database(dbPath);

// Create the flooring table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS flooring (
    flooringID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT DEFAULT '',
    price REAL NOT NULL CHECK (price >= 0),
    image_url TEXT DEFAULT '',
    in_stock INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log("SQLite database connected successfully.");

module.exports = db;
