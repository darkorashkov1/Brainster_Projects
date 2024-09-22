import React from 'react';
import styles from '../../styles/EventPackages.module.css';
import Link from 'next/link';

const EventPackages = () => {

  const handleShare = () => {
    const shareData = {
      title: 'Check out our Packages!',
      text: 'Discover amazing packages we offer!',
      url: window.location.href,
    };

    // Check if Web Share API is available (mostly on mobile browsers)
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

      <div className={styles.cardsContainer}>

        <div className={styles.card1}>
          <h2 className={styles.cardTitle}>Цена на поединци</h2>
          <p className={styles.cardDescription}>500ден</p>
        </div>

        <div className={styles.card2}>
          <h2 className={styles.cardTitle}>Цена на компании</h2>
          <p className={styles.cardDescription}>5000ден</p>
        </div>

      </div>
      <div className={styles.imageContainer}>
        <div className={styles.newsletter}>
          <span>Купи карта</span><br />
          <span>mhraconference.com</span>
          <Link href="https://mhraconference.mk/" target='_blank' className={styles.newsletterBtn}>
            <img className={styles.newsletterLink} alt="newsletter_link" src="/images/newsletterLink.png" />
          </Link>
        </div>
        <button className={styles.bottomButton} onClick={handleShare}>Предложи на пријател</button>
      </div>


    </div>
  );
};

export default EventPackages;
