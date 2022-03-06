import React from "react";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Japonia</h1>
          <h2>kraj tysiąca wysp</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
