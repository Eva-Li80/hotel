import React from 'react'
import NavigationBar from './Navigation';
import styles from "./sidebar.module.css"

const Sidebar = () => {
  const links = [
    { text: "Hotel", url: "/" },
    { text: "Rooms", url: "/room" },
    { text: "Offers", url: "/gallery" },
    { text: "Events", url: "/restaurang" },
    { text: "Itineraries & Activities", url: "/info" },
    { text: "Gallery", url: "/info" },
    { text: "Reviews", url: "/info" },
    { text: "Requests", url: "/info" },
  ];

  return (
    <div className={styles.sidebar}>
      <NavigationBar links={links} />
    </div>
  )
}

export default Sidebar
