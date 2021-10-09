import React from "react";
import styles from "../../styles/Home.module.css";

const Form = () => {
  return (
    <form action="" method="post" className={styles.formContainer}>
      <label htmlFor="Select">
        Select a category
        <select name="" id="">
          <option value="">One</option>
          <option value="">two</option>
          <option value="">three</option>
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
  );
};

export default Form;
