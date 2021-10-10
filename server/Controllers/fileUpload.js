const pool = require("../db");

exports.fileUpload = async (req, res) => {
  try {
    const { url, category } = req.body;

    const saveMemeEntry = await pool.query(
      "INSERT INTO memestorage (src, category) VALUES($1 , $2) RETURNING *",
      [url, category]
    );

    res.json(saveMemeEntry.rows);
  } catch (error) {
    console.log("error while saving meme in db", error.message);
  }
};

exports.getAllMemes = async (req, res) => {
  const allMemes = await pool.query("SELECT * FROM memestorage");

  res.json(allMemes.rows);
};

//memes based on specific route
exports.getMemes = async (req, res) => {
  const memes = await pool.query(
    "SELECT * FROM memestorage WHERE category=$1",
    [req.params.category]
  );

  res.json(memes.row);
};
