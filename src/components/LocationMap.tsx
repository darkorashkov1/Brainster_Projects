import React from 'react';
import styles from '../styles/LocationMap.module.css';

const LocationMap = () => {

  const handleGetDirections = () => {
    const destination = "Hotel Continental, Skopje, Macedonia";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destination
    )}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.0683775251914!2d21.449998875813645!3d41.998808057848386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415986f9f2cd7%3A0x61669f4d3a9aa58c!2sHotel%20Continental!5e0!3m2!1sen!2shr!4v1726916781377!5m2!1sen!2shr"
        style={{ borderRadius: 50 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      ></iframe>
      <button className={styles.directionsButton} onClick={handleGetDirections}>Насоки</button>
    </div>
  );
};

export default LocationMap;
