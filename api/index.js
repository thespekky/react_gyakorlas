const { urlencoded } = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.static("Public"));
app.use(urlencoded({ extened: true }));

app.use("/", require("./Routes/Home.routes.js"));

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(process.env.PORT + "porton a szerver");
});
