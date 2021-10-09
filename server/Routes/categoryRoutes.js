const express = require("express");
const router = express.Router();

//controllers
const {
  createCategory,
  getAllCategories,
  editCategory,
  deleteCategory,
} = require("../Controllers/categoryControllers");

//create
router.post("/create", createCategory);

//read all
router.get("/getAllCategories", getAllCategories);

//update
router.put("/edit/:id", editCategory);

//delete
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
