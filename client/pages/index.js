import Head from "next/head";
import Image from "next/image";
import SignUp from "../Components/SignUp";
import PrimaryBtn from "../Components/UIblocks/PrimaryBtn";
import SecondaryBtn from "../Components/UIblocks/SecondaryBtn";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreenContainer}>
        <h2>economeme</h2>

        <ul>
          <li>
            <PrimaryBtn text="Browse 🤡" />
          </li>
        </ul>
      </div>
    </div>
  );
}
