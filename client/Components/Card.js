import styles from "../styles/Home.module.css";

function CARD({ src, category }) {
  return (
    <>
      <div className={styles.cardContainer}>
        {/* <img src="" height={150} width={150} alt="oop" /> */}
        <img className={styles.img} src={src}></img>

        <figcaption>
          <h3 className={styles.cardInfo}>
            CATEGORY : <span style={{ fontSize: "1rem" }}>{category}</span>{" "}
          </h3>
        </figcaption>
      </div>
    </>
  );
}

export default CARD;
