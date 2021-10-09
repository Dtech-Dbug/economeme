const express = require("express");
const cors = require("cors");
const fs = require("fs");

//init app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
const PORT = 5000;

app.listen("/", () => {
  console.log(`running on port = ${PORT}`);
});
