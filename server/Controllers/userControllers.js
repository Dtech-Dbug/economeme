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
    res.send(400).send("error while creating, view console");
    console.log(error.message);
  }
};

exports.getUsers = async (req, res) => {
  const allUsers = await pool.query("SELECT * FROM users");
  res.json(allUsers.rows);
};
