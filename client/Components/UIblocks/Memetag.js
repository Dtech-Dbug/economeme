import React from "react";
import styles from "../../styles/Home.module.css";

const Memetag = ({ memeType }) => {
  return (
    <div className={styles.memetag}>
      <p className={styles.memeTagTextContent}>{memeType}</p>
    </div>
  );
};

export default Memetag;
