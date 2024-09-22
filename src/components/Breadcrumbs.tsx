import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const router = useRouter();

  const isBlogsRoute = router.pathname === '/blogs';
  const isBlogPostRoute = router.pathname === '/blogs/[id]';
  const isEventsRoute = router.pathname === '/events';
  const isEventRoute = router.pathname === '/event/[id]';
  const isAboutRoute = router.pathname === '/about';
  const isConferenceRoute = router.pathname === '/conference';

  return (
    <nav className={styles.breadcrumbs}>
      <ol className={styles.arrows}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {isBlogsRoute && (
          <li>
            <Link href="/blogs">Блогови</Link>
          </li>
        )}
        {isBlogPostRoute && (
          <li>
            <Link href="/blogs/[id]">Блог Пост</Link>
          </li>
        )}
        {isEventsRoute && (
          <li>
            <Link href="/event">Настани</Link>
          </li>
        )}
        {isEventRoute && (
          <>
            <li>
              <Link href="/event/[id]">Настани</Link>
            </li>
            <li>Информации за настан</li>
          </>
        )}
        {isAboutRoute && (
          <li>
            <Link href="/about">За нас</Link>
          </li>
        )}
        {isConferenceRoute && (
          <li>
            <Link href="/conference">Годишна конференција</Link>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
