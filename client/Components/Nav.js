import React from "react";
import styles from "../styles/Home.module.css";
import SecondaryBtn from "./UIblocks/SecondaryBtn";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h2>SignUp/Login to upload your memes</h2>

      <ul>
        <li>
          <SecondaryBtn text="SignUp" />
        </li>
        <li>Browse</li>
      </ul>
    </nav>
  );
};

export default Nav;
