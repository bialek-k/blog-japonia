import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}></div>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul>
            <li>Miasta</li>
            <li>Świątynie</li>
            <li>Kultura</li>
            <li>Natura</li>
            <li>Kontakt</li>
            <li></li>
          </ul>
        </nav>
        <div className={styles.header}>
          <h1>Japonia</h1>
          <h2>kraj tysiąca wysp</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
