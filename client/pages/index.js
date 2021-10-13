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
    "<strong>divided by languages...<strong>",
    "<strong>united by laughter<strong>",
    "<strong>share the laughter<strong>",
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
              <PrimaryBtn routeToBrowse={routeToBrowse} text="browse 🤡" />
            </Link>
          </li>

          <li>
            <SecondaryBtn text="signin" />
          </li>
          <figcaption>
            to create an account{" "}
            <span style={{ textDecoration: "underline" }}>Signup</span>{" "}
          </figcaption>
        </ul>
      </div>
    </div>
  );
}
