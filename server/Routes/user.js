const express = require("express");
const router = express.Router();

const {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  currentUser,
} = require("../Controllers/userControllers");
const { authMiddleware } = require("../Middlewares/auth");

//routes
router.post("/create-user", createUser);
//current user
router.post("/user", authMiddleware, currentUser);

router.get("/users", getUsers);
// router.get("/user/:id", getUser);
// router.put("/update/user/:id", updateUser);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;
