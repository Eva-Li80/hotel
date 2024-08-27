// components/ReadMoreButton.jsx
import React from 'react';
import styles from "./readmore.module.css" // Importera stilar från CSS-modulen

const ReadMoreButton = () => {
  return (
    <button className={styles.readMore}>
      Read More
    </button>
  );
};

export default ReadMoreButton;
