import React from "react";
import Memetag from "../Components/UIblocks/Memetag";
import { useState, useEffect } from "react";
import axios from "axios";
import { getCategories } from "../Functions/categories";
import styles from "../styles/Home.module.css";
import { getMemes } from "../Functions/fileUpload";
import ImageGrid from "../Components/Card";
import CARD from "../Components/Card";

const feed = () => {
  const [categories, setCategoroies] = useState([]);
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    //fetch all categories and save in local state
    getCategories().then((res) => setCategoroies(res.data));

    //fetchall meme data
    getMemes().then((res) => setMemes(res.data));
  }, []);

  return (
    <>
      {" "}
      <div className={styles.memetagContainer}>
        {categories.map((item) => {
          return <Memetag key={item.id} memeType={item.title} />;
        })}
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          {memes.map((item) => (
            <CARD key={item.id} src={item.src} category={item.category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default feed;
