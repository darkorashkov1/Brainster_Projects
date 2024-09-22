import React from 'react';
import styles from "../../styles/EventBlock.module.css";
import Link from 'next/link';
import { CardStructure } from '../../types/types';

interface Props {
  eventBlockData: CardStructure; // Change to accept a single event
}

const EventBlock: React.FC<Props> = ({ eventBlockData }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.eventContainer}>
        <h1 className={styles.topHeadline}>{eventBlockData.category}</h1>
        <p className={styles.topParagraph}>{eventBlockData.cardTitle}</p>

        <div className={styles.conferenceContainer}>
          <div className={styles.leftContainer}>
            <h1 className={styles.title}>Опис:</h1>
            <p className={styles.description}>{eventBlockData.purpose}</p>
            <h1 className={styles.title}>Цел:</h1>
            <p className={styles.description}>{eventBlockData.mission}</p>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.conferenceImage}>
              <img
                src={eventBlockData.imageUrl}
                alt="Conference"
              />
            </div>
            <div className={styles.newsletter}>
              <span>Купи карта</span><br />
              <span>mhraconference.com</span>
              {eventBlockData.link ? (
                <Link href={eventBlockData.link} target='_blank' className={styles.newsletterBtn}>
                  <img className={styles.newsletterLink} alt="newsletter_link" src="/images/newsletterLink.png" />
                </Link>
              ) : (
                <span>No link available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBlock;
