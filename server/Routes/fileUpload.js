const express = require("express");
const router = express.Router();

//middlewares
const { authMiddleware } = require("../Middlewares/auth");

//controllers
const { fileUpload } = require("../Controllers/fileUpload");

//routes
router.post("/fileupload", authMiddleware, fileUpload);

router.get("/allMemes", getAllMemes);

//get memes baes on category
router.get("/meme/:id", getMemes);

module.exports = router;
