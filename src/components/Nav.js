import React from 'react'
import styles from './Nav.module.css'
import Logo from './Logo.js'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Logo/>
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
    </div>
  )
}

export default Nav