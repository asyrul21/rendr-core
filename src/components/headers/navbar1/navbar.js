import React from "react"
import { Link } from "gatsby"

import styles from "./navbar.module.scss"

const navbar1 = props => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}></div>

      <div className={styles.navItems}>
        <Link href="#">
          <a>About</a>
        </Link>
        <Link href="#">
          <a>Programmes</a>
        </Link>
        <Link href="#">
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
  )
}

export default navbar1
