import React from 'react'
import styles from './Other.module.css'

const Other = () => {
  return (
    <div className={styles.other}>
      <div className={styles.container}>
        <h2>Pozostałe wpisy</h2>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <div className={styles.p_background}>
              <p>Architektura w harmonii z naturą</p>
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles.p_background}>
              <p>Hanami - w cieniu kwitnącej wiśni</p>
            </div>
          </div>
          <div className={styles.img}>
            <div className={styles.p_background}>
              <p>Japoński lifestyle w praktyce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Other