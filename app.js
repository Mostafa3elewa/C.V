const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
console.log(PORT);
app.use(express.static("dist"));
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
