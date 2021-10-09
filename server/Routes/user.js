const express = require("express");
const router = express.Router();

//routes
router.post("/create-user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/update/user/:id", updateUser);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;
