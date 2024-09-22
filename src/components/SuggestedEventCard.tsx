import React from 'react';
import styles from '../styles/SuggestedEventCard.module.css';
import { SuggestedEventType } from '../types/types';

const SuggestedEventCard: React.FC<SuggestedEventType> = ({ imageUrl, cardTitle, description, month, day, cardSubTitle, readMore }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay} />
      </div>
      <div className={styles.numberContainer}>
        <div className={styles.month}>{month}</div>
        <div className={styles.number}>{day}</div>
      </div>
      <span className={styles.readMore}>
        {readMore}
      </span>
      <div className={styles.textContainer}>
        <p className={styles.title}>
          {cardTitle}
        </p>
        <p className={styles.description}>
          {cardSubTitle}<br /> {description}
        </p>
      </div>
    </div>
  );
};

export default SuggestedEventCard;
