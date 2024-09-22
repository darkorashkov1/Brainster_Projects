import React from 'react';
import styles from '../../styles/Cards.module.css';
import Link from 'next/link';
import { CardStructure } from '../../types/types';

const Cards: React.FC<CardStructure> = ({ id, imageUrl, cardTitle, description, readMore }) => {
  return (
    <div key={id} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="HR coffee image" />
      </div>
      <div className={styles.textContainer}>
        <h3>{cardTitle}</h3>
        <p>{description}</p>
        <span><Link href={`/event/${id}`}>{readMore}</Link></span>
      </div>
    </div>
  );
};

export default Cards;
