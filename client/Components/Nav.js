import React from "react";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h2>economeme</h2>

      <ul>
        <li>About</li>
        <li>Browse</li>
      </ul>
    </nav>
  );
};

export default Nav;
