import React from "react";
import styles from "../../styles/Home.module.css";

const PrimaryBtn = ({ text, handleSignup, routeToBrowse }) => {
  return (
    <button onClick={routeToBrowse} className={styles.primaryBtn}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
