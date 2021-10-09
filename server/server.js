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

app.listen(PORT, () => {
  console.log(`running on port = ${PORT}`);
});

fs.readdirSync("./Routes").map((route) => {
  app.use("/api", require("./Routes/" + route));
});
