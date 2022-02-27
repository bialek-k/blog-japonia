import React from "react";
import styles from "./Hero.module.css";
import Logo from "./Logo";
import Nav from "./Nav";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Logo/>
      </div>
      <div className={styles.container}>
        <Nav/>
        <div className={styles.header}>
          <h1>Japonia</h1>
          <h2>kraj tysiąca wysp</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
