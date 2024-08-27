import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.p}>Official Booking - Best Rate Guaranteed</p>
      <Link className={styles.link} href="/booking">
         Go to Book room <CalendarMonthOutlinedIcon/> 
      </Link>
    </div>
  );
};

export default Navbar;
