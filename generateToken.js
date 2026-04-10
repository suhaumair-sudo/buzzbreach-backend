const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { 
    id: 1,
    email: "test@test.com",
    isAdmin: true
  },
  "dev-secret-key-change-in-production",
  { expiresIn: "1h" }
);

console.log(token);