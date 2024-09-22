import React from 'react';
import styles from '../../styles/Cards.module.css';
import { CardStructure } from '../../types/types';
import { NextPage } from 'next';
import Cards from './Cards';

interface Props {
  headline?: string;
  cardData: CardStructure[];
}

const CurrentEvents: NextPage<Props> = ({ headline, cardData }) => {
  return (
    <div>
      <div className={styles.eventsContainer}>
        <h2 className={styles.title}>{headline}</h2>
        <div className={styles.container}>
          {cardData.map((card) => (
            <Cards {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentEvents;
