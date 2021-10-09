//requiring the connected and confuring database
const pool = require("../db");

exports.createCategory = async (req, res) => {
  try {
    console.log(req.body);
    const { title } = req.body;

    const addCategory = await pool.query(
      "INSERT INTO memecategories (title) VALUES($1) RETURNING *",
      [title]
    );

    res.json(addCategory);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const fetchAll = "SELECT * FROM memecategories";
    const allCategories = await pool.query(fetchAll);

    res.json(allCategories.rows);
  } catch (error) {
    console.log("Error while fetching all ->", error.message);
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletCategory = await pool.query(
      `DELETE FROM memecategories WHERE category_id=($1)`,
      [id]
    );

    res.json(`${id} deleted`);
  } catch (error) {
    console.log("error while deleting:", error.message);
  }
};

exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    // const UPDATE = `UPDATE memecategories SET title = $1 WHERE category_id = $2;`;
    const update = await pool.query(
      "UPDATE memecategories SET title = $1 WHERE category_id = $2;",
      [title, id]
    );

    res.json(`updated`);
  } catch (error) {
    console.log("error while editing:", error.message);
  }
};
