import React from 'react';
import styles from '../styles/EventCard.module.css';
import { EventsType } from '../types/types';

const EventCard: React.FC<EventsType> = ({ id, imageUrl, cardTitle, description, month, day }) => {
  return (
    <div key={id} className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.imageContainer} >
        <div className={styles.overlay} />
      </div>
      <div className={styles.numberContainer}>
        <div className={styles.month}>{month}</div>
        <div className={styles.number}>{day}</div>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.title}>
          {cardTitle}<br /> {description}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
