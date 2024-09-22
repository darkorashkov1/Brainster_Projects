import React from 'react';
import styles from '../styles/ConferenceBlock.module.css';
import Link from 'next/link';

const ConferenceBlock = () => {
  return (
    <div className={styles.conferenceContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>
          Најголемиот <span>HR</span> настан на нашите простори - Годишната <span>HR</span> конференција на МАЧР
        </h1>
        <p className={styles.description}>
          Меѓународна размена на искуства во полето на човечки ресурси и константно движење во чекор со светските трендови.
        </p>
        <div className={styles.speakerInfo}>
          <div className={styles.speakerImage}>
            <img src="https://s3-alpha-sig.figma.com/img/8b59/4f18/d69e904de3a2d62d17678217ea32f849?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IDZAt2RmoPcG0SSciCi5MxF6PXAaqXpEJl7jTPHUohPrUP0r-kyUbeK1KwgZu6cOvNlzH-xvTIxWj04U78GAANCmX3te2~awOAlIXxnqQ4fOaIVyHu6tZwaj4cwbsCImxcmZjE7liqo6WaQwkXIMtRFX2kcjNxBBqz5xouOH9BowLbyih~RJXUwxWELGiNevSRdBTsH8wD7kg-egCRsAGtrndMK138v0C-WLX218SV7y3nuxCtmPWVa3e2QeE2szFc2tjVl9GHtQeUzhLlUnjogRll8McbG6PwROZXsoVWyN4cNiBXIxNOkBlouLqm~NIN14C-KABaHZELvBhNXXXQ__" alt="speakerAvatar" />
          </div>
          <div className={styles.speakerDetails}>
            <div className={styles.speakerName}>
              м-р Дарко Петровски
            </div>
            <div className={styles.speakerTitle}>
              Претседател на МАЧР
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.spanCircle}>
          <div className={styles.spanImage}>
            <img
              src="https://s3-alpha-sig.figma.com/img/95d8/6303/14fc19512d7a0f212ed5b48067eadec2?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9hFA3A0TYDr4T1d4DMIKpuRX67erAYqqc2vUtp5XWmyUowd86FVix6Sd4kphBAE4u0Eev0Y6wVmrxLKcQicyURckFWv4ZJzIls8oLIJ7AG0PQpFM0GrJHvne-Fk8KLzkAWI5egltXjGp-1rRB4I6Zde2zkWKRzvp6LAQTiG7VPTPHtNP8nNjMtLNkXfpOvCkNwmFYZUlcNXylisJhQ9mWD8vxMm2hyQ2RdBeLv-bqopUtpGl1~-D7qZyrg-ipFS2DGycOx9rBRSFme7TFQYbvHEWLVD5Ie80JjMA7Uuo7pznaGNMKhKorvs7h43Ud23AMW6LQMQAj1Pci-mKlgE5w__"
              alt="Conference"
            />
          </div>
        </div>
        <div className={styles.conferenceImage}>
          <img
            src="https://s3-alpha-sig.figma.com/img/7ecd/b498/64829e1c32537fdb30f8c1f31dc686af?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dq-BOR3CbDM2U5wfVxuvWouR~x4g6kyXQeSkHkRYstm6U5Bs5aqBI5Vp75bab4hH0WoCp2VhZaGcM~rsddOudSdsfglGV~xJQJFEWTnMXg-iMm9~Ec-C0VmXEOFzHZJUwJUfQ31AYkCEfmCLIiyLUb2SsJJjT4RnZsFq8T5Bnrh-bEDeUhlElFM5c7qUmbg4DAKrxIu3QKMytVWrmLV7r5hyR9-AxlFczF3yYo0ong-pd-xdXAc9URSke-yrJD1i02I2Sn54L0XNk0aWZnIby597ZMzgNM6UlN~aYeG~Rox85YZngezCXeBko-gW-JnLPMMgusA5jflRZoTYfpTIEQ__"
            alt="Conference"
          />
        </div>
        <div className={styles.newsletter}>
          <span>Купи карта</span><br />
          <span>mhraconference.com</span>
          <Link href="https://mhraconference.mk/" target='_blank' className={styles.newsletterBtn}>
            <img className={styles.newsletterLink} alt="newsletter_link" src="/images/newsletterLink.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConferenceBlock;
