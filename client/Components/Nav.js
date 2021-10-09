import React from "react";
import styles from "../styles/Home.module.css";
import SecondaryBtn from "./UIblocks/SecondaryBtn";
import { auth, Provider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";
import signup from "../pages/signup";

import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  const signUp = async (e) => {
    e.preventDefault();

    //async function to get result after signup
    const result = await signInWithPopup(auth, Provider);
    const { user } = result;
    const userIdToken = await user.getIdTokenResult();

    console.log("user", user.displayName, userIdToken.token);

    dispatch({
      type: "USER_LOGGED_IN",
      payload: {
        name: user.displayName,
        email: user.email,
        token: userIdToken.token,
      },
    });

    // user.then((res) => {
    //   console.log("user signed iup-->", res);
    // });
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
