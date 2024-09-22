import React from 'react';
import styles from "../../styles/EventSpeakers.module.css";
import AboutCards from '../about/AboutCards';
import { CardType } from '../../types/types';

interface Props {
  speakers: CardType[]
}

const EventSpeakers: React.FC<Props> = ({ speakers }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Говорници на настанот:</h1>
      </div>
      <div className={styles.rightContainer}>
        {speakers.map((card, index) => (
          <AboutCards key={index} {...card} />
        ))}
      </div>
      <img src='/images/group_9201.png' alt='dotted pattern' className={styles.dottedImage} />
    </div>
  );
};

export default EventSpeakers;
