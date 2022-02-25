import React from 'react'
import styles from "./Islands.module.css";

const Islands = () => {
  return (
    <div className={styles.islands}>
      <h2>Wybierz region:</h2>
      <div className={styles.container}>
        <div className={styles.island}><p>Honsiu</p></div>
        <div className={styles.island}><p>Hokkaido</p></div>
        <div className={styles.island}><p>Sikoku</p></div>
        <div className={styles.island}><p>Ksiusiu</p></div>
      </div>
    </div>
  )
}

export default Islands