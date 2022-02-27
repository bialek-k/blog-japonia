import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return (
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
  )
}

export default Nav