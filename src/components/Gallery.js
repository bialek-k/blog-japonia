import React from 'react'
import styles from './Gallery.module.css'

const Gallery = () => {
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.container}>
          <h2>Galeria</h2>
          <div className={styles.wrapper}>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
          </div>
          <button>Zobacz więcej</button>
        </div>
      </div>

      <div className={styles.share}>
        <p>Udostępnij:</p>
        <div className={styles.social}></div>
        <div className={styles.social}></div>
        <div className={styles.social}></div>
      </div>
    </>
  )
}

export default Gallery