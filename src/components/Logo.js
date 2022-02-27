import React from 'react'
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}></div>
      <p>Japonia</p>
    </div>
  )
}

export default Logo