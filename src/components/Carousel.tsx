import React from 'react';
import styles from '../styles/Carousel.module.css';
import EventCard from './CarouselEventCard';
import { NextPage } from 'next';
import { EventsType } from '../types/types';

interface Props {
  eventCardsData: EventsType[];
}

const Carousel: NextPage<Props> = ({ eventCardsData }) => {
  return (
    <div className={`h-2/5`}>
      <div className={styles.carouselContainer}>
        <img src="/images/group_9200.png" alt="Carousel background" className={styles.carouselBackground} />
        <div className={styles.carousel}>
          <div className={styles.slidesContainer}>
            {eventCardsData.map(eventCard => (
              <div key={eventCard.id} className={styles.slide}>
                <EventCard {...eventCard} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
