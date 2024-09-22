import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setEmail('');
      setError('');

      // Handle the subscription logic here (e.g., API call)
      alert('Subscription successful!');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setEmail(''); // Clear input when clicking outside the input box
      setError('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="footer">
      <div className='wrapper85'>
        <div className={styles.footerContainer}>
          <div className={styles.border}></div>
          <div className={styles.contentContainer}>

            {/* Left Container */}
            <div className={styles.infoSection}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={60}
                height={79}
              />
              <div className={styles.addressEmailContainer}>
                <div className={styles.addressSection}>
                  <div className={styles.addressTitle}>Адреса</div>
                  <div className={styles.addressDetail}>Бул. ВМРО бр. 7/1-7</div>
                  <div className={styles.addressDetail}>1000 Скопје, Македонија</div>
                </div>
                <div className={styles.emailSection}>
                  <div className={styles.emailTitle}>Е-маил</div>
                  <div className={styles.emailDetail}>contact@mhra.mk</div>
                </div>
              </div>
            </div>

            {/* Right Container */}
            <div className={styles.subscriptionSection}>
              <div className={styles.subscriptionTitle}>Претплати се на билтен</div>
              <div className={styles.subscriptionInputContainer}>
                <input
                  type="email"
                  placeholder="Е-маил"
                  value={email}
                  onChange={handleEmailChange}
                  className={`${styles.inputField} ${error ? styles.inputFieldError : ''}`}
                  ref={inputRef}
                />
                <button
                  className={styles.submitButton}
                  onClick={handleSubmit}
                  type="button"
                >
                  Претплати се
                </button>
              </div>
              {error && <span className={styles.error}>{error}</span>}
              <div className={styles.socialMediaContainer}>
                <a href='https://www.linkedin.com/company/macedonian-hr-association/' title='linkedin' target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Image
                    src="/images/mdi_linkedin.png"
                    alt="LinkedIn"
                    width={28}
                    height={27}
                  />
                </a>
                <a href='https://www.instagram.com/mhramk/' title='instagram' target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Image
                    src="/images/streamline_instagram-solid.png"
                    alt="Instagram"
                    width={28}
                    height={27}
                  />
                </a>
                <a href='https://www.facebook.com/mhra.mk/' title='facebook' target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Image
                    src="/images/entypo-social_facebook.png"
                    alt="Facebook"
                    width={28}
                    height={27}
                  />
                </a>
                <a href='https://www.youtube.com/channel/UCYLPYuZPyCI4sXArEDvGGgg' title='youtube' target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Image
                    src="/images/foundation_social-youtube.png"
                    alt="YouTube"
                    width={28}
                    height={27}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
