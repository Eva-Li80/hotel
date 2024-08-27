import React from 'react'
import styles from "./header.module.css"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const Header = ({title}) => {
  return (
    <div className={styles.header}>
      <italic className={styles.h3}>{title}</italic>
      <span className={styles.p}> Venice Lido <StarOutlinedIcon/> <StarOutlinedIcon/></span>
      <p>Granviale Santa Maria Elisabetta, 51 - 30126 Lido di Venezia</p>
    </div>
  )
}

export default Header
