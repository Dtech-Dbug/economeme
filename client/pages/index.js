// import Head from "next/head";
// import Image from "next/image";
import PrimaryBtn from "../Components/UIblocks/PrimaryBtn";
import SecondaryBtn from "../Components/UIblocks/SecondaryBtn";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Router from "next/router";

export default function Home() {
  const routeToBrowse = () => {
    Router.push("/feed");
  };
  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreenContainer}>
        <h2>economeme</h2>

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
