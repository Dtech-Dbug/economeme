// createUser,
//   getUser,
//   getUsers,
//   deleteUser,
//   updateUser,

const pool = require("../db");

exports.createUser = async (req, res) => {
  console.log(req.body);
  const { userName, email } = req.body;

  const user = await pool.query(
    "INSERT INTO USERS (username, email) VALUES($1 , $2) RETURNING *",
    [userName, email]
  );

  res.json(user.rows[0]);
  console.log("user created", user);
};
