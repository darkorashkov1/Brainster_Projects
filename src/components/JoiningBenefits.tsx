import Link from 'next/link';
import styles from '../styles/JoiningBenefits.module.css';

const JoiningBenefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.event}>
          <div className={styles.number}>01</div>
          <div className={styles.eventContent}>
            <div className={styles.eventTitle}>Едукативни настани</div>
            <Link className={styles.readMore} href={'/comingsoon'}>Прочитај повеќе</Link>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.number}>02</div>
          <div className={styles.eventContent}>
            <div className={styles.eventTitle}>Најнови информации и случувања</div>
            <Link className={styles.readMore} href={'/comingsoon'}>Прочитај повеќе</Link>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.number}>03</div>
          <div className={styles.eventContent}>
            <div className={styles.eventTitle}>Ширење на мрежата на контакти</div>
            <Link className={styles.readMore} href={'/comingsoon'}>Прочитај повеќе</Link>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.number}>04</div>
          <div className={styles.eventContent}>
            <div className={styles.eventTitle}>Вклучување во работењето на МАЧР</div>
            <Link className={styles.readMore} href={'/comingsoon'}>Прочитај повеќе</Link>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.number}>05</div>
          <div className={styles.eventContent}>
            <div className={styles.eventTitle}>HR огласи за работа</div>
            <Link className={styles.readMore} href={'/comingsoon'}>Прочитај повеќе</Link>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.title}>Бенефити од зачленување во МАЧР</div>
        <div className={styles.description}>
          Македонската асоцијација за човечки ресурси - МАЧР како невладино, непрофитно и непартиско
          здружение на граѓани, продолжува со остварување на својата мисија за промоција и унапредување
          на професијата управување со човечките ресурси, како и создавање и имплементирање на највисоките
          професионални стандарди и развој на човечкиот капитал во Република Македонија како единствен
          ентитет од овој вид во земјава.
        </div>
      </div>
    </div>
  );
};

export default JoiningBenefits;
