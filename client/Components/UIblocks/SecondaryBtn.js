import React from "react";
import styles from "../../styles/Home.module.css";
import { useSelector } from "react-redux";

const SecondaryBtn = ({ text, signup, logout, createMeme }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <>
      {user ? (
        <button
          onClick={logout ? logout : createMeme}
          className={styles.secondaryBtn}
        >
          {text}
        </button>
      ) : (
        <button onClick={signup} className={styles.secondaryBtn}>
          {text}
        </button>
      )}
    </>
  );
};

export default SecondaryBtn;
