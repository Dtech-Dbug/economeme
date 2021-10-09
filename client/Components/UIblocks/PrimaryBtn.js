import React from "react";
import styles from "../../styles/Home.module.css";

const PrimaryBtn = ({ text }) => {
  return <button className={styles.primaryBtn}>{text}</button>;
};

export default PrimaryBtn;
