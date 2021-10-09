import React from "react";
import styles from "../styles/Home.module.css";
import SecondaryBtn from "./UIblocks/SecondaryBtn";
import { auth, Provider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";
import signup from "../pages/signup";

const Nav = () => {
  const signUp = async (e) => {
    e.preventDefault();
    console.log("jj");
    console.log(auth);
    const user = signInWithPopup(auth, Provider);
    user.then((res) => {
      console.log("user signed iup-->", res);
    });
  };

  return (
    <nav className={styles.nav}>
      <h2>SignUp/SignIn to upload your memes</h2>

      <ul>
        <li>
          <SecondaryBtn signup={signUp} text="SignUp" />
        </li>
        <li>
          {" "}
          <SecondaryBtn text="SignIn" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
