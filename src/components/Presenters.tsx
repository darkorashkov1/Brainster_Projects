import React, { useEffect, useState } from 'react';
import styles from '../styles/Presenters.module.css';
import { PresenterType } from '../types/types';

const Presenters = () => {
  const [presenters, setPresenters] = useState<PresenterType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5001/presenter');
      const data = await response.json();
      setPresenters(data);
    };

    fetchData();
  }, []);

  const handlePrevAndPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + presenters.length) % presenters.length);
  };

  if (presenters.length === 0) return <div>Loading...</div>;

  const { avatar, firstName, lastName, occupation, statement } = presenters[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.imageBorderWrapper}>
          <div className={styles.image}>
            <img src={avatar} alt={`${firstName} ${lastName}`} />
          </div>
          <div className={styles.dottedPattern}>
            <img src='/images/PatternDotSquare.png' alt='dotted pattern' />
          </div>
        </div>
      </div>
      <div className={styles.textFrame}>
        <div className={styles.textContainer}>
          <h1>{`${firstName} ${lastName}`}</h1>
          <span>{occupation}</span>
          <p>{statement}</p>
          <div className={styles.carouselButtons}>
            <button onClick={handlePrevAndPrev}>{"<    "}{currentIndex + 1} / {presenters.length}{"    >"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presenters;
