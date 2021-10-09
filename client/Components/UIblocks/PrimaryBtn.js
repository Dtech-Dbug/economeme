import React from "react";
import styles from "../../styles/Home.module.css";

const PrimaryBtn = ({ text, handleSignup }) => {
  return (
    <button onClick={handleSignup} className={styles.primaryBtn}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
