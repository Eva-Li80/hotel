// components/Card.jsx
import React from "react";
import styles from "./card.module.css"; // Lägg till CSS-modul för att hantera stilar
import ReadMoreButton from "./ReadMoreButton";

const Card = ({ children, url }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.cardBackground}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className={styles.cardContent}>{children}</div>
      <div className={styles.buttonContainer}>
        <ReadMoreButton />
      </div>
    </div>
  );
};

export default Card;
