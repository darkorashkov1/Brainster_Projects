import React from "react";
import styles from '../../styles/AboutCards.module.css';
import Image from 'next/image';
import { CardType } from "../../types/types";
import Link from "next/link";

const AboutCards: React.FC<CardType> = ({ avatarImage, name, position }) => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.teamCard}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatarBackground}></div>
          <div className={styles.avatarBackground}></div>
          <img className={styles.avatarImage} src={avatarImage} alt="placeholder" />
        </div>
        <div className={styles.positionContainer}>
          <div className={styles.name}>{name}</div>
          <div className={styles.positionContainer}>
            <div className={styles.position}>{position}</div>
            <div className={styles.socialIcons}>
              <Link href='https://www.facebook.com/mhra.mk/' title='facebook' target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/fb_card.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                />
              </Link>
              <Link href='https://x.com/home' title='twitter' target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/twitter_card.png"
                  alt="Twitter"
                  width={16}
                  height={17}
                />
              </Link>
              <Link href='https://www.instagram.com/mhramk/' title='instagram' target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/insta_card.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>

              <Link href='https://www.linkedin.com/company/macedonian-hr-association/' title='linkedin' target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin_card.png"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
