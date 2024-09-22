import React from 'react';
import styles from '../styles/Packages.module.css';
import Link from 'next/link';

const Packages = () => {

  const handleShare = () => {
    const shareData = {
      title: 'Check out our Packages!',
      text: 'Discover amazing packages we offer!',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing', error));
    } else {

      // Fallback for desktop or unsupported browsers
      alert("Web Share API not supported. Sharing via social media links.");
      const shareUrl = encodeURIComponent(window.location.href);

      // Example for Twitter (you can add more platforms below)
      const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=Check%20out%20these%20amazing%20packages!`;

      window.open(twitterUrl, '_blank');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Пакети за поединци и корпорации</h1>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Поединци</h2>
          <p className={styles.cardDescription}>1500ден</p>
          <ul className={styles.cardList}>
            <li>1 седиште</li>
            <li>Пауза за ручек</li>
            <li>WiFi</li>
          </ul>

          <button className={styles.buyButton}>
            <Link href="https://mhraconference.mk/" target='_blank'>Купи карта</Link>
          </button>

        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Корпорации</h2>
          <p className={styles.cardDescription}>20 000ден</p>
          <ul className={styles.cardList}>
            <li>20 седишта</li>
            <li>Паузи за чај и кафе</li>
            <li>Пауза за ручек</li>
            <li>WiFi</li>
          </ul>

          <button className={styles.buyButton}>
            <Link href="https://mhraconference.mk/" target='_blank'>Купи карта</Link>
          </button>

        </div>
      </div>

      <button className={styles.bottomButton} onClick={handleShare}>Предложи на пријател</button>
    </div>
  );
};

export default Packages;
