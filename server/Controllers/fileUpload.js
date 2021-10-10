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
