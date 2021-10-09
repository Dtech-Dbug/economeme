import React from "react";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { getCategories } from "../Functions/categories";

const createMeme = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Share the Laughter</h2>
      <form action="" method="post" className={styles.formContainer}>
        <label htmlFor="Select">
          Select a category
          <select name="" id="" onClick={(e) => console.log(e.target.value)}>
            {categories.map((item) => (
              <>
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              </>
            ))}
          </select>
        </label>
        <br />

        <label
          htmlFor="
      "
        >
          {" "}
          Upload meme
          <input type="file" />
        </label>
      </form>
    </>
  );
};

export default createMeme;
