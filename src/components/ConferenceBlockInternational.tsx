import React from 'react';
import styles from '../styles/ConferenceBlockInternational.module.css';
import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';

const ConferenceBlockInternational = () => {
  return (
    <>
      <div className={styles.mainContainer}>

        <div className={styles.conferenceContainer}>

          <div className={styles.leftContainer}>
            <Breadcrumbs />
            <h1 className={styles.title}>
              13та меѓународна МАЧР конференција
            </h1>
            <p className={styles.eventDateAndLocation}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <g clip-path="url(#clip0_269_56153)">
                    <path d="M12.75 2.875H15.75C15.9489 2.875 16.1397 2.95402 16.2803 3.09467C16.421 3.23532 16.5 3.42609 16.5 3.625V15.625C16.5 15.8239 16.421 16.0147 16.2803 16.1553C16.1397 16.296 15.9489 16.375 15.75 16.375H2.25C2.05109 16.375 1.86032 16.296 1.71967 16.1553C1.57902 16.0147 1.5 15.8239 1.5 15.625V3.625C1.5 3.42609 1.57902 3.23532 1.71967 3.09467C1.86032 2.95402 2.05109 2.875 2.25 2.875H5.25V1.375H6.75V2.875H11.25V1.375H12.75V2.875ZM11.25 4.375H6.75V5.875H5.25V4.375H3V7.375H15V4.375H12.75V5.875H11.25V4.375ZM15 8.875H3V14.875H15V8.875Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_269_56153">
                      <rect width="18" height="18" fill="white" transform="translate(0 0.625)" />
                    </clipPath>
                  </defs>
                </svg>
                24-25 Декември, 2024
              </span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <g clip-path="url(#clip0_269_56156)">
                    <path d="M9 18.4209L4.227 13.6479C3.28301 12.7039 2.64014 11.5012 2.3797 10.1918C2.11925 8.88246 2.25293 7.52526 2.76382 6.29187C3.27472 5.05847 4.13988 4.00427 5.24991 3.26257C6.35994 2.52088 7.66498 2.125 9 2.125C10.335 2.125 11.6401 2.52088 12.7501 3.26257C13.8601 4.00427 14.7253 5.05847 15.2362 6.29187C15.7471 7.52526 15.8808 8.88246 15.6203 10.1918C15.3599 11.5012 14.717 12.7039 13.773 13.6479L9 18.4209ZM12.7125 12.5874C13.4467 11.8532 13.9466 10.9177 14.1492 9.89935C14.3517 8.88096 14.2477 7.82539 13.8503 6.86611C13.4529 5.90683 12.78 5.08692 11.9167 4.51007C11.0533 3.93321 10.0383 3.62532 9 3.62532C7.96167 3.62532 6.94666 3.93321 6.08332 4.51007C5.21997 5.08692 4.54706 5.90683 4.14969 6.86611C3.75231 7.82539 3.64831 8.88096 3.85084 9.89935C4.05337 10.9177 4.55333 11.8532 5.2875 12.5874L9 16.2999L12.7125 12.5874ZM9 10.3749C8.60218 10.3749 8.22065 10.2169 7.93934 9.9356C7.65804 9.6543 7.5 9.27277 7.5 8.87494C7.5 8.47712 7.65804 8.09559 7.93934 7.81428C8.22065 7.53298 8.60218 7.37494 9 7.37494C9.39783 7.37494 9.77936 7.53298 10.0607 7.81428C10.342 8.09559 10.5 8.47712 10.5 8.87494C10.5 9.27277 10.342 9.6543 10.0607 9.9356C9.77936 10.2169 9.39783 10.3749 9 10.3749Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_269_56156">
                      <rect width="18" height="18" fill="white" transform="translate(0 0.625)" />
                    </clipPath>
                  </defs>
                </svg>
                Хотел Континентал, Скопје
              </span>

            </p>
            <p className={styles.description}>
              Годишната меѓународна HR конференција, организирана од страна на Македонска асоцијација за човечки ресурси, има за цел да ги истражи и презентира најновите трендови и практики во областа на човечките ресурси кои ќе им помогнат на организациите да станат "future fit". Оваа конференција ќе ги собере најдобрите умови и лидери во HR за да дискутираат и разменат идеи за проактивни стратегии кои можат да ја трансформираат работната сила и да ја унапредат организациската ефикасност.
            </p>
            <div className={styles.newsletter}>
              <span>Купи карта</span><br />
              <span>mhraconference.com</span>
              <Link href="https://mhraconference.mk/" target='_blank' className={styles.newsletterBtn}>
                <img className={styles.newsletterLink} alt="newsletter_link" src="/images/newsletterLink.png" />
              </Link>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.spanCircle1}>
              <div className={styles.spanImage1}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7ecd/b498/64829e1c32537fdb30f8c1f31dc686af?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dq-BOR3CbDM2U5wfVxuvWouR~x4g6kyXQeSkHkRYstm6U5Bs5aqBI5Vp75bab4hH0WoCp2VhZaGcM~rsddOudSdsfglGV~xJQJFEWTnMXg-iMm9~Ec-C0VmXEOFzHZJUwJUfQ31AYkCEfmCLIiyLUb2SsJJjT4RnZsFq8T5Bnrh-bEDeUhlElFM5c7qUmbg4DAKrxIu3QKMytVWrmLV7r5hyR9-AxlFczF3yYo0ong-pd-xdXAc9URSke-yrJD1i02I2Sn54L0XNk0aWZnIby597ZMzgNM6UlN~aYeG~Rox85YZngezCXeBko-gW-JnLPMMgusA5jflRZoTYfpTIEQ__"
                  alt="Conference"
                />
              </div>
            </div>
            <div className={styles.dottedSquarePattern}>
              <img
                src="/images/PatternDotSquare.png"
                alt="dotted pattern"
              />
            </div>
            <div className={styles.spanCircle2}>
              <div className={styles.spanImage2}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/95d8/6303/14fc19512d7a0f212ed5b48067eadec2?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9hFA3A0TYDr4T1d4DMIKpuRX67erAYqqc2vUtp5XWmyUowd86FVix6Sd4kphBAE4u0Eev0Y6wVmrxLKcQicyURckFWv4ZJzIls8oLIJ7AG0PQpFM0GrJHvne-Fk8KLzkAWI5egltXjGp-1rRB4I6Zde2zkWKRzvp6LAQTiG7VPTPHtNP8nNjMtLNkXfpOvCkNwmFYZUlcNXylisJhQ9mWD8vxMm2hyQ2RdBeLv-bqopUtpGl1~-D7qZyrg-ipFS2DGycOx9rBRSFme7TFQYbvHEWLVD5Ie80JjMA7Uuo7pznaGNMKhKorvs7h43Ud23AMW6LQMQAj1Pci-mKlgE5w__"
                  alt="Conference"
                />
              </div>
            </div>
            <div className={styles.conferenceImage}>
              <img
                src="https://s3-alpha-sig.figma.com/img/95d8/6303/14fc19512d7a0f212ed5b48067eadec2?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9hFA3A0TYDr4T1d4DMIKpuRX67erAYqqc2vUtp5XWmyUowd86FVix6Sd4kphBAE4u0Eev0Y6wVmrxLKcQicyURckFWv4ZJzIls8oLIJ7AG0PQpFM0GrJHvne-Fk8KLzkAWI5egltXjGp-1rRB4I6Zde2zkWKRzvp6LAQTiG7VPTPHtNP8nNjMtLNkXfpOvCkNwmFYZUlcNXylisJhQ9mWD8vxMm2hyQ2RdBeLv-bqopUtpGl1~-D7qZyrg-ipFS2DGycOx9rBRSFme7TFQYbvHEWLVD5Ie80JjMA7Uuo7pznaGNMKhKorvs7h43Ud23AMW6LQMQAj1Pci-mKlgE5w__"
                alt="Conference"
              />
            </div>
          </div>

        </div>

        {/* New Bottom Container */}
        <div className={styles.mainBottomContainer}>
          <div className={styles.bottomContainer}>

            <div className={styles.bottomItem}>
              <img src="/images/Conference_CalendarIcon.png" alt="Image 1" />
              <div className={styles.textContainer}>
                <h3>2</h3>
                <p>Дена</p>
              </div>
            </div>

            <div className={styles.bottomItem}>
              <img src="/images/Conference_UserIcon.png" alt="Image 2" />
              <div className={styles.textContainer}>
                <h3>9</h3>
                <p>Неверојатни спикери</p>
              </div>
            </div>

            <div className={styles.bottomItem}>
              <div className={styles.imageContainer}>
                <img src="/images/Conference_CupIcon.png" alt="Image 3" />
              </div>
              <div className={styles.textContainer}>
                <h3>6</h3>
                <p>Ресторани</p>
              </div>
            </div>

            <div className={styles.bottomItem}>
              <img src="/images/Conference_BookIcon.png" alt="Image 3" />
              <div className={styles.textContainer}>
                <h3>28</h3>
                <p>Едукативни книги</p>
              </div>
            </div>
            <div>
            </div>

          </div>
          <img src="/images/group_9201.png" alt="dottedGrid" className={styles.dottedGrid} />
        </div>

      </div>

    </>

  );
};

export default ConferenceBlockInternational;
