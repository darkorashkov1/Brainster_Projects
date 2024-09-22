import React, { useEffect, useState } from 'react';
import styles from '../../styles/AboutBlock.module.css';
import { NextPage } from 'next';
import SubscribeModal from '../SubscribeModal';
import Link from 'next/link';

const AboutBlock: NextPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => setIsModalOpen(false);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className={styles.container}>
      <div className="wrapper85">
        <div className={styles.topSection}>
          <div className={styles.imageContainer1}>
            <img className={styles.image1} alt="Image1" src="/images/about/image_8.png" />
            <div className={styles.paragraph}>Сакаш да бидеш во тек со нас и најновите содржини што ги споделуваме?</div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}><h2>Дознај повеќе за нас и нашите цели и задачи!</h2></div>
            <div className={styles.subtitle}><p>Нашиот огранок за коучинг е формиран 22 април 2019 година и е првата мрежа за професионални ментори во земјава.</p></div>
            <a href="/about"><button className={styles.moreButton}>Повеќе за нас</button></a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.paragraph2}>Претплати се на нашиот информативен билтен и никогаш повеќе не пропуштај важни настани и известувања</p>
          <img className={styles.image2} alt="Image2" src="/images/about/image_6.png" />
          <div className={styles.newsletter}>
            <span>МАЧР билтен</span><br />
            <span>contact@mrha.mk</span>
            <Link onClick={openModal} href='/' className={styles.newsletterBtn}>
              <img className={styles.newsletterLink} alt="newsletter_link" src="/images/newsletterLink.png" />
            </Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <>
          <div className={styles.overlay} onClick={closeModal} />
          <SubscribeModal closeModal={closeModal} />
        </>
      )}
    </div>
  );
};

export default AboutBlock;
