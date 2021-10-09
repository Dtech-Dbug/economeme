import React from "react";
import Memetag from "../Components/UIblocks/Memetag";
import { useState, useEffect } from "react";
import axios from "axios";
import { getCategories } from "../Functions/categories";
import styles from "../styles/Home.module.css";

const feed = () => {
  const [categories, setCategoroies] = useState([]);

  useEffect(() => {
    //fetch all categories and save in local state
    getCategories().then((res) => setCategoroies(res.data));
  }, []);

  return (
    <>
      {" "}
      <div className={styles.memetagContainer}>
        {categories.map((item) => {
          return <Memetag memeType={item.title} />;
        })}
      </div>
    </>
  );
};

export default feed;
