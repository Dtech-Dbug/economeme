import React from "react";
import styles from "../../styles/Home.module.css";

const SecondaryBtn = ({ text, signup }) => {
  return (
    <button onClick={signup} className={styles.secondaryBtn}>
      {text}
    </button>
  );
};

export default SecondaryBtn;
