import React from 'react'
import styles from './Comment.module.css'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.container}>
        <p>Komentarze (2)</p>
        <textarea cols="30" placeholder='Dodaj komentarz...' rows="10"></textarea>
        <div className={styles.post}>
          <p className={styles.nick}>hamaminur</p>
          <p className={styles.content}>Wspaniały wpis. Dużo ciekawych informacji i pięknych zdjęć. Trzymaj tak dalej! </p>
          <div className={styles.reply}>
            <p>4</p>
            <p>0</p>
            <p>Odpowiedz</p>
          </div>
        </div>
        <div className={styles.post}>
          <p className={styles.nick}>ktokyo</p>
          <p className={styles.content}>Dzięki za super opowieść i zdjęcia :) Czekam na więcej :) </p>
          <div className={styles.reply}>
            <p>2</p>
            <p>0</p>
            <p>Odpowiedz</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment