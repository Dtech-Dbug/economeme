import React from "react";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { getCategories } from "../Functions/categories";
import { useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";
import { fileUpload } from "../Functions/fileUpload";
import Router from "next/router";

const createMeme = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  function fileUploadAndResize(e) {
    let files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          200,
          200,
          "JPEG",
          100,
          0,
          (uri) => {
            //the calback dunction : most important
            console.log("uri ===> ", uri);
            setUrl(uri);
          },
          "base64"
        );
      }
    }
  }

  const handleFile = (e) => {
    console.log(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const test = (e) => {
    e.preventDefault();
    const values = {
      url,
      category,
    };

    console.table(values);

    fileUpload(values, user.token).then((res) => {
      // window.location.reload();
      console.log("res after uplaod,", res);
      Router.push("/feed");
    });
  };
  return (
    <>
      <div className={styles.createMeme}>
        <h2 style={{ textAlign: "center" }}>Share the Laughter</h2>
        <form
          action="http://localhost:8000/api/fileupload"
          method="post"
          className={styles.formContainer}
        >
          <label htmlFor="Select">
            Select a category
            <select name="" id="" onChange={handleCategoryChange}>
              {categories.map((item) => (
                <>
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                </>
              ))}
            </select>
          </label>
          <br />

          <label
            htmlFor="
      "
          >
            {" "}
            Upload meme
            <input onChange={fileUploadAndResize} type="file" />
          </label>

          <br />

          <button onClick={test}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default createMeme;
