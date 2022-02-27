import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}></div>
      {/* <p></p> */}
      <Link to='/blog-japonia'>Japonia</Link>
    </div>
  )
}

export default Logo