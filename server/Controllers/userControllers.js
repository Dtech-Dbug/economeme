// createUser,
//   getUser,
//   getUsers,
//   deleteUser,
//   updateUser,

const pool = require("../db");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { userName, email } = req.body;

    //for undefined entries skip
    if (userName === "undefined" || email === "undefined") {
      return;
    }

    const user = await pool.query(
      "INSERT INTO USERS (username, email) VALUES($1 , $2) RETURNING *",
      [userName, email]
    );

    res.json(user.rows[0]);
    console.log("user created", user);
  } catch (error) {
    res.status(400).send("error while creating, view console");
    console.log(error.message);
  }
};

exports.getUsers = async (req, res) => {
  const allUsers = await pool.query("SELECT * FROM users");
  res.json(allUsers.rows);
};

//delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletCategory = await pool.query(`DELETE FROM users WHERE id=$1`, [
      id,
    ]);

    res.json(`${id} deleted`);
  } catch (error) {
    res.status(400).send("error while creating, view console");
    console.log("err", error.message);
  }
};

//get details of user from req.header token
exports.currentUser = async (req, res) => {
  try {
    console.log("token", req.user.email);
    const currentLoggedInUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [req.user.email]
    );

    res.json(currentLoggedInUser.rows);
    console.log("current-->", currentLoggedInUser.rows);
  } catch (error) {
    console.log("err whike checking curreny user", error.message);
  }
};
