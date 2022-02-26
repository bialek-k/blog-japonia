import React from "react";
import styles from "./Favourite.module.css";

import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

import gokoku from "../assets/Gokoku.png";
import gyoen from "../assets/Gyoen.png";
import tokio from "../assets/Tokio.png";

const Favourite = () => {
  return (
    <div className={styles.container}>
      <h1>Moje top 10 w Japonii</h1>
      <div className={styles.items}>
        <div className={styles.favourite}>
          <img src={gokoku} />
          <p className={styles.hiroshima}>Hiroshima, Świątynia Gokoku</p>
        </div>
        <div className={styles.favourite}>
          <img src={gyoen} />
          <p className={styles.gyoen}>Shinjuku Gyoen National Garden</p>
        </div>
        <div className={styles.favourite}>
          <img src={tokio} />
          <p className={styles.tokio}>Główna ulica Tokio nocą</p>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
