import React from 'react'
import Image from 'next/image';
import styles from "../styles/ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className=" mTopHeader">
      <div className={styles.container}>
        <a href="/">
          <img
            src="/images/mhra-logo_with_text.png"
            alt="brainster-logo"
            className={styles.mhraLogo}
          />
        </a>
        <h1>НАСКОРО</h1>
        <h2>Страницата е во изградба...</h2>
        <div className={styles.progressBar}>
          <span></span>
        </div>
        <div className={styles.sm}>
          <a
            href="https://www.facebook.com/mhra.mk/"
            title="mhra_facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.socialLogo}
              src="/images/entypo-social_facebook_hero.png"
              alt="Facebook"
              width={36}
              height={35}
            />
          </a>
          <a
            href="https://www.instagram.com/mhramk/"
            title="mhra_instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.socialLogo}
              src="/images/streamline_instagram-solid_hero.png"
              alt="Instagram"
              width={36}
              height={35}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/macedonian-hr-association/"
            title="mhra_linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.socialLogo}
              src="/images/mdi_linkedin_hero.png"
              alt="LinkedIn"
              width={36}
              height={35}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCYLPYuZPyCI4sXArEDvGGgg"
            title="mhra_YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.socialLogo}
              src="/images/foundation_social-youtube_hero.png"
              alt="YouTube"
              width={36}
              height={35}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon
