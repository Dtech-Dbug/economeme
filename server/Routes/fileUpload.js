const express = require("express");
const router = express.Router();

//middlewares
const { authMiddleware } = require("../Middlewares/auth");

//controllers

//routes
router.post("/fileupload", authMiddleware, (req, res) => {
  console.log(req.file);
});

module.exports = router;
