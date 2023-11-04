// server.js
const express = require("express");
const server = express();

// Enable CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace * with your client's origin(s)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// ...other server setup code...

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
