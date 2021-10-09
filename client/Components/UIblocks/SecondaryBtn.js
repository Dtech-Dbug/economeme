import React from "react";
import styles from "../../styles/Home.module.css";

const SecondaryBtn = ({ text }) => {
  return <button className={styles.secondaryBtn}>{text}</button>;
};

export default SecondaryBtn;
