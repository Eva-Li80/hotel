import React from 'react'
import styles from "./navigation.module.css"

const NavigationBar = ({links}) => {
  return (
    <div className={styles.navigationcontainer}>
      <nav>
        <ul className={styles.ul}>
        {links.map((link, index) => (
          <li className={styles.li} key={index}>
            <a className={styles.a} href={link.url}>{link.text}</a>
          </li>
        ))}
        </ul>
      </nav>
      
    </div>
  )
}

export default NavigationBar
