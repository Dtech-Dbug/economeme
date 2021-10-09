import Head from "next/head";
import Image from "next/image";
import SignUp from "../Components/SignUp";
import PrimaryBtn from "../Components/UIblocks/PrimaryBtn";
import SecondaryBtn from "../Components/UIblocks/SecondaryBtn";
import styles from "../styles/Home.module.css";
import { auth, Provider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";

export default function Home() {
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
    <div className={styles.homeScreen}>
      <div className={styles.homeScreenContainer}>
        <h2>economeme</h2>

        <ul>
          <li>
            <PrimaryBtn handleSignup={signUp} text="Login" />
          </li>
          <li>
            {" "}
            <SecondaryBtn text="Browse" />
          </li>
        </ul>
      </div>
    </div>
  );
}
