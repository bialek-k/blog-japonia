import React from 'react'
import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.container}>
        <p>Zapisz się do newslettera, żeby otrzymywać aktualne
        informacje na Twoją skrzynkę</p>
        <form>
          <input type="text" placeholder='Email'/>
          <button>Zapisz się</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter