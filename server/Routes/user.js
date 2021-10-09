const express = require("express");
const router = express.Router();

const {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../Controllers/userControllers");

//routes
router.post("/create-user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/update/user/:id", updateUser);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;
