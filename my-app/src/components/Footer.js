"use client"
import React from 'react'
import styles from "./footer.module.css"
import Link from "next/link"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedCameraOutlinedIcon from '@mui/icons-material/LinkedCameraOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const Footer = () => {
  const links = [
    { icon: <LinkedCameraOutlinedIcon />, text: "Visit us on instagram ..", url: "https://www.instagram.com/hotelcristallo/" },
    { icon: <FacebookOutlinedIcon />, text: "Visit us on facebook ..", url: "https://www.facebook.com/HotelCristalloVenezia" },
    { icon: <ContactMailOutlinedIcon />, text: "Email us .. ", url: "/contact" },
    { icon: <ContactPhoneOutlinedIcon />, text: "Call us ..", url: "/contact" }
  ];

  return (
    <div className={styles.footer}>
      {links.map((link, index) => {
        // Kontrollera om URL:en är extern eller intern
        const isExternal = link.url.startsWith("http");

        if (isExternal) {
          // Externa länkar använder en vanlig <a>-tagg
          return (
            <a
              key={index}
              href={link.url}
              target="_blank" // Öppna i ny flik
              rel="noopener noreferrer" // Säkerhetsåtgärd för att skydda mot referrer-based attacks
              className={styles.link}
            >
              {link.text}
              {link.icon}
            </a>
          );
        } else {
          // Interna länkar använder Next.js Link-komponenten
          return (
            <Link key={index} href={link.url} className={styles.link}>
              <span className={styles.linkText}>{link.text}</span>
              {link.icon}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Footer;
