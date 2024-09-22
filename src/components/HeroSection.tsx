import React from 'react';
import styles from '../styles/HeroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  image1Src?: string;
  image2Src?: string;
  image3Src?: string;
  image4Src?: string;
  image5Src?: string;
  mainText?: string;
  mainText2?: string;
  mainText3?: string;
  mainText4?: string;
  subText?: string;
  topSpan?: string;
  bottomSpan?: string;
  joinText?: string;
  joinButtonText?: string;
  dottedGrid1?: string;
  linkJoin?: string;
  linkEvents?: string;
  linkBlogs?: string;
  image1Class?: string;
  image2Class?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image1Src,
  image2Src,
  image3Src,
  image4Src,
  image5Src,
  mainText,
  mainText2,
  mainText3,
  mainText4,
  subText,
  topSpan,
  bottomSpan,
  joinText,
  joinButtonText,
  linkJoin = "/",
}) => {
  return (
    <div className={styles.heroContainer}>
      {image1Src && (
        <Image
          className={styles.image1}
          src={image1Src}
          alt="Hero Image 1"
          width={784}
          height={496}
        />
      )}
      {image2Src && (
        <Image
          className={styles.image2}
          src={image2Src}
          alt="Hero Image 2"
          width={512}
          height={702}
        />
      )}
      {image3Src && (
        <Image
          className={styles.image3}
          src={image3Src}
          alt="Hero Image 3"
          width={1861}
          height={752}
        />
      )}
      {image4Src && (
        <Image
          className={styles.image4}
          src={image4Src}
          alt="Hero Image 1"
          width={784}
          height={496}
        />
      )}
      {image5Src && (
        <Image
          className={styles.image5}
          src={image5Src}
          alt="Hero Image 2"
          width={512}
          height={702}
        />
      )}
      {mainText && (
        <div className={styles.textContainer}>
          <div className={styles.mainText}>{mainText}</div>
          <div className={styles.subText}>{subText}</div>
        </div>
      )}
      {mainText2 && (
        <div className={styles.textContainer2}>
          <div className={styles.mainText2}>{mainText2}</div>
          <div className={styles.subContainer}>{subText}</div>
          <Link className={styles.containerJoinButton2} href={linkJoin} passHref>
            <button type='button' className={styles.joinButton2}>{joinButtonText}</button>
          </Link>
        </div>
      )}
      {mainText3 && (
        <div className={styles.textContainer3}>
          <div className={styles.topSpan}>{topSpan}</div>
          <div className={styles.mainText3}>{mainText3}</div>
          <Link className={styles.containerJoinButton3} href={linkJoin} passHref>
            <button type='button' className={styles.joinButton3}>{joinButtonText}</button>
          </Link>
          <div className={styles.bottomSpan}>{bottomSpan}</div>
        </div>
      )}

      {mainText4 && (
        <div className={styles.textContainer4}>
          <div className={styles.topSpan2}>{topSpan}</div>
          <div className={styles.mainText4}>{mainText4}</div>
          <div className={styles.bottomSpan2}>{bottomSpan}</div>
        </div>
      )}

      {joinText && joinButtonText && (
        <div className={styles.joinSection}>
          <div className={styles.joinText}>{joinText}</div>
          <Link className={styles.joinButton} href={linkJoin} passHref>
            <button type='button'>{joinButtonText}</button>
          </Link>
        </div>
      )}

      <div className={styles.sideBar}>
        <div className={styles.socialMediaText}>Заследи не на социјалните медиуми</div>
        <div className={styles.socialMediaIcons}>
          <Link href='https://www.linkedin.com/company/macedonian-hr-association/' title='linkedin' target="_blank" rel="noopener noreferrer" passHref>
            <Image
              src="/images/mdi_linkedin_hero.png"
              alt="LinkedIn"
              width={28}
              height={27}
            />
          </Link>
          <Link href='https://www.instagram.com/mhramk/' title='instagram' target="_blank" rel="noopener noreferrer" passHref>
            <Image
              src="/images/streamline_instagram-solid_hero.png"
              alt="Instagram"
              width={28}
              height={27}
            />
          </Link>
          <Link href='https://www.facebook.com/mhra.mk/' title='facebook' target="_blank" rel="noopener noreferrer" passHref>
            <Image
              src="/images/entypo-social_facebook_hero.png"
              alt="Facebook"
              width={28}
              height={27}
            />
          </Link>
          <Link href='https://www.youtube.com/channel/UCYLPYuZPyCI4sXArEDvGGgg' title='youtube' target="_blank" rel="noopener noreferrer" passHref>
            <Image
              src="/images/foundation_social-youtube_hero.png"
              alt="YouTube"
              width={28}
              height={27}
            />
          </Link>
        </div>
      </div>

      {/* Dotted background image */}
      <div className={styles.dottedGrid}>
        <img src="/images/group_9200.png" alt="dottedGrid" />
      </div>
    </div>
  );
};

export default HeroSection;
