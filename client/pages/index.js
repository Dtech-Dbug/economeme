// import Head from "next/head";
// import Image from "next/image";
import PrimaryBtn from "../Components/UIblocks/PrimaryBtn";
import SecondaryBtn from "../Components/UIblocks/SecondaryBtn";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Router from "next/router";
import TypewriterComponent from "../Components/Typewriter";

export default function Home() {
  const text = [
    "<strong>Divided By Languages...<strong>",
    "<strong>United By Laughter<strong>",
    "<strong>Share the Laughter<strong>",
  ];
  const routeToBrowse = () => {
    Router.push("/feed");
  };
  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreenContainer}>
        <div className={styles.welcomeText}>
          <h2>economeme</h2>
          <TypewriterComponent text={text} />
        </div>

        <ul>
          <li>
            <Link href="/feed">
              <PrimaryBtn routeToBrowse={routeToBrowse} text="Browse 🤡" />
            </Link>
          </li>

          <li>
            <SecondaryBtn text="Signin" />
          </li>
          <figcaption>
            To create an account{" "}
            <span style={{ textDecoration: "underline" }}>Signup</span>{" "}
          </figcaption>
        </ul>
      </div>
    </div>
  );
}
