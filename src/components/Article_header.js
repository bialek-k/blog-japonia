import React from 'react'
import styles from './Article_header.module.css'

const Article_header = () => {
  return (
    <div className={styles.article_header}>
      <h1>GÓRA ASO</h1>
      <h2>najwyższy wulkan w Japonii</h2>
      <div className={styles.read_time}>
        <p>10 min czytania</p>
      </div>
    </div>
  )
}

export default Article_header