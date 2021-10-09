import React from "react";
import styles from "../styles/Home.module.css";
import SecondaryBtn from "./UIblocks/SecondaryBtn";
import { auth, Provider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";
import signup from "../pages/signup";

import { useDispatch } from "react-redux";
import { createUser } from "../Functions/user";
// import { useHistory } from "react-router-dom";
import Router from "next/router";

const Nav = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const signUp = async (e) => {
    e.preventDefault();

    //async function to get result after signup
    const result = await signInWithPopup(auth, Provider);
    const { user } = result;
    const userIdToken = await user.getIdTokenResult();

    console.log("user", user.displayName, userIdToken.token);

    const values = {
      userName: user.displayName,
      email: user.email,
    };

    createUser(values)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "USER_LOGGED_IN",
          payload: {
            name: res.data.username,
            email: res.data.email,
            id: res.data.id,
            token: userIdToken.token,
          },
        });
        Router.push("/feed");
      })
      .catch((err) => console.log(err.message));

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
