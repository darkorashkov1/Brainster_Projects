import React, { useState } from 'react';
import styles from '../styles/SignUp.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignUp: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Ве молиме внесете точна e-mail адреса');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || emailError || !checked1) {
      alert('Ве молиме пополнете ги сите задолжителни полиња.');
      return;
    }
    setEmail('');
    router.push('/user-dashboard');
  };

  return (
    <>
      <div className={styles.signUpContainer}>
        <h1 className={styles.headline}><b>Најави се</b> или <b>Регистрирај се</b></h1>

        <Link href="https://myaccount.google.com/">
          <button className={styles.googleButton}>
            <img src="/images/flat-color-icons_google.png" alt="" />
            Продолжи со Google
          </button>
        </Link >

        <div className={styles.separator}>
          <span className={styles.line}></span>
          <span className={`${styles.or} my-10`}><b>Или</b></span>
          <span className={styles.line}></span>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.label}>
            е-маил
          </label>
          <input
            type="email"
            id="email"
            placeholder='mhra@primer.com'
            className={styles.input}
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className={styles.error}>{emailError}</p>}

          <button type="submit" className={`${styles.submitButton} my-7`}>
            Продолжи со овој email
          </button>

          <p className={`${styles.conditions} my-10`}>
            Со кликнување на 'Продолжи со Google/Email', се согласувате со нашите <a href='/terms-conditions'>Услови на користење</a> и <a href='/privacy-policy'>Политика за приватност</a>
          </p>

          <div className={`${styles.checkboxContainer} my-4`} >
            <label>
              <input
                type="checkbox"
                checked={checked1}
                onChange={(e) => setChecked1(e.target.checked)}
                required
              />
              Сакам да станам член на МАЧР
            </label>
          </div>

          <div className={`${styles.checkboxContainer} my-4`}>
            <label>
              <input
                type="checkbox"
                checked={checked2}
                onChange={(e) => setChecked2(e.target.checked)}
              />
              Сакам редовно да добивам информации на е-маил
            </label>
          </div>
        </form>
      </div>

      <div className={styles.container}>
        <div className="wrapper85">

          <div className={styles.topSection}>
            <div className={styles.imageContainer}>
              <img className={styles.image1} alt="" />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Бенефити од индивидуално зачленување</h2>
              <ul className={styles.unordered_list}>
                <li>Едукативни настани</li>
                <li>Најнови информации и случувања</li>
                <li>Ширење на мрежата на контакти</li>
                <li>Вклучување во работењето на МАЧР</li>
                <li>HR огласи за работа</li>
              </ul>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.textContainer}>
              <h2 className={styles.title2}>Бенефити од корпоративно зачленување</h2>
              <ul className={styles.unordered_lis2}>
                <li>Претсатвник во корпоративниот одбор на МАЧР</li>
                <li>Можности за промоција на вашата компанија</li>
                <li>Ширење на мрежата регионално и интернационално</li>
                <li>Попусти на HR настани, обуки, конференции и сл.</li>
                <li>HR огласи за работа</li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.image2} alt="" />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default SignUp;
