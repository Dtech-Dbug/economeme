import React from "react";
import styles from "../../styles/Home.module.css";

const Memetag = ({ memeType }) => {
  return <div className={styles.memetag}>{memeType}</div>;
};

export default Memetag;
