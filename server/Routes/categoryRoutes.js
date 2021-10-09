const express = require("express");
const router = express.Router();

//controllers

//create
router.post("/create", createCategory);

//read all
router.get("/getAllCategories", getAllCategories);

//update
router.put("/edit/:id", editCategory);

//delete
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
