const bcrypt = require("bcrypt");
const db = require("./database");
const readline = require("readline");
const { read } = require("read");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a username for the admin account: ", async (username) => {
  console.log("Username entered", username);
  rl.close();

  let password;

  try {
    password = await read({
      prompt: "Enter a password for the admin account: ",
      silent: true
    });
  } catch (err) {
    console.error("Error reading password:", err);
    db.close();
    return;
  }

  if (!password) {
  console.log("Password cannot be empty.");
  db.close();
  return;
}

  const existingAdmin = db.prepare("SELECT id FROM admin LIMIT 1").get();

  if (existingAdmin) {
    console.log("An admin account already exists.");
    rl.close();
    db.close();
    return;
  }

  bcrypt.hash(password, 12, (err, hash) => {

    if (err) {
      console.error("Error hashing password:", err);
      db.close();

    }
    else {
      console.log("Password received");

      const statement = db.prepare("INSERT INTO admin (username, password_hash) VALUES (?, ?)");
      statement.run(username, hash);
      console.log("Admin account created successfully!");
      db.close();

    }

  });
});

