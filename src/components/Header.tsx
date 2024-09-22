import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const { asPath } = useRouter();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchDropdown = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchValue('');
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsSearchOpen(false);
      setSearchValue('');
    }
  };

  const handleSearchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchValue.trim() !== '') {
      router.push({
        pathname: '/search',
        query: { q: searchValue },
      });
      setSearchValue('');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`${styles.header} fixed top-0 left-0 w-full z-50`}>
      <div className="wrapper85 flex items-center justify-between py-2">

        {/* Logo */}
        <a href="/" title="logo" className="flex-shrink-0">
          <Image
            className={styles.logo}
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={62}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full items-center justify-between">
          <nav className={`flex justify-center ${styles.linksContainer}`}>
            <div className={`flex ${styles.linksGroup}`}>

              {/* Информативни Содржини dropdown */}
              <div className="relative group">
                <a
                  typeof='info'
                  href="/info/"
                  className={`${styles.navLink} ${asPath === '/info/' ? styles.navLinkActive : ''}`}
                >
                  Информативни Содржини
                </a>
                <div typeof='info' className={`${styles.dropdown} absolute left-0 mt-0 w-60 bg-white border rounded shadow-lg z-10 group-hover:block`}>
                  <a href="/about" className={`${styles.dropdownItem}`}>За нас</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>Членство</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>Огранок на коучинг</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>Галерии</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>Огласи за работа</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>HR награди</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>Е-весник</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>Архива</a>
                  <a href="/comingsoon" className={`${styles.dropdownItem}`}>FAQ</a>
                </div>
              </div>

              {/* Едукативни Содржини dropdown */}
              <div className="relative group">
                <a
                  typeof='education'
                  href="/*"
                  className={`${styles.navLink} ${asPath === '/*' ? styles.navLinkActive : ''}`}
                >
                  Едукативни Содржини
                </a>
                <div typeof='education' className={`${styles.dropdown} absolute left-0 mt-0 w-48 bg-white border rounded shadow-lg z-10 group-hover:block`}>
                  <a href="/comingsoon" className={styles.dropdownItem}>Статии</a>
                  <a href="/comingsoon" className={styles.dropdownItem}>Истражувања</a>
                  <a href="/comingsoon" className={styles.dropdownItem}>Интервјуа</a>
                  <a href="/comingsoon" className={styles.dropdownItem}>Обуки</a>
                  <a href="/comingsoon" className={styles.dropdownItem}>Македонски академии</a>
                  <a href="/comingsoon" className={styles.dropdownItem}>Проекти</a>
                  <a href="/comingsoon" className={styles.dropdownItem}>Експерти</a>
                  <a href="/comingsoon" className={styles.dropdownItem}>Трендови</a>
                </div>
              </div>

              {/* Годишна Конференција */}
              <a
                href="/conference"
                className={`${styles.navLink} ${asPath === '/conference' ? styles.navLinkActive : ''}`}
              >
                Годишна Конференција
              </a>

              {/* Настани dropdown */}
              <div className="relative group">
                <a
                  typeof='events'
                  href="/event"
                  className={`${styles.navLink} ${asPath === '/event' ? styles.navLinkActive : ''}`}
                >
                  Настани
                </a>
                <div typeof='events' className={`${styles.dropdown} absolute left-0 mt-0 w-60 bg-white border rounded shadow-lg z-10 group-hover:block`}>
                  <div className={`${styles.dropdownItem}`}>
                    <a href="/event/hr-cafe" className={styles.navLink}>HR café</a>
                    <div className={`${styles.subDropdown}`}>
                      <a href="/event/hr-cafe/event1" className={styles.dropdownItem}>Event 1</a>
                      <a href="/event/hr-cafe/event2" className={styles.dropdownItem}>Event 2</a>
                      <a href="/event/hr-cafe/event3" className={styles.dropdownItem}>Event 3</a>
                      <a href="/event/hr-webinar/event-all" className={styles.dropdownItem}>See all CTA</a>
                    </div>
                  </div>

                  <div className={`${styles.dropdownItem}`}>
                    <a href="/event/hr-weekend" className={styles.navLink}>HR weekend</a>
                    <div className={styles.subDropdown}>
                      <a href="/event/hr-weekend/event1" className={styles.dropdownItem}>Event 1</a>
                      <a href="/event/hr-weekend/event2" className={styles.dropdownItem}>Event 2</a>
                      <a href="/event/hr-weekend/event3" className={styles.dropdownItem}>Event 3</a>
                      <a href="/event/hr-webinar/event-all" className={styles.dropdownItem}>See all CTA</a>
                    </div>
                  </div>

                  <div className={`${styles.dropdownItem}`}>
                    <a href="/event/hr-webinar" className={styles.navLink}>HR webinar</a>
                    <div className={styles.subDropdown}>
                      <a href="/event/hr-webinar/webinar1" className={styles.dropdownItem}>Webinar 1</a>
                      <a href="/event/hr-webinar/webinar2" className={styles.dropdownItem}>Webinar 2</a>
                      <a href="/event/hr-webinar/webinar3" className={styles.dropdownItem}>Webinar 3</a>
                      <a href="/event/hr-webinar/event-all" className={styles.dropdownItem}>See all CTA</a>
                    </div>
                  </div>

                  <div className={`${styles.dropdownItem}`}>
                    <a href="/event/hr-conference" className={styles.navLink}>HR conferences</a>
                    <div className={styles.subDropdown}>
                      <a href="/event/hr-conference/event1" className={styles.dropdownItem}>Event 1</a>
                      <a href="/event/hr-conference/event2" className={styles.dropdownItem}>Event 2</a>
                      <a href="/event/hr-conference/event3" className={styles.dropdownItem}>Event 3</a>
                      <a href="/event/hr-conference/event-all" className={styles.dropdownItem}>See all CTA</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Блог */}
              <div className="relative group">
                <a
                  typeof='blog'
                  href="/blog"
                  className={`${styles.navLink} ${asPath === '/blog-article' ? styles.navLinkActive : ''}`}
                >
                  Блог
                </a>
                <div typeof='blog' className={`${styles.dropdown} absolute left-0 mt-0 w-48 bg-white border rounded shadow-lg z-10 hidden group-hover:block`}>
                  <a href="/blog-article/topic1" className={styles.dropdownItem}>Топик 1</a>
                  <a href="/blog-article/topic1" className={styles.dropdownItem}>Топик 2</a>
                  <a href="/blog-article/topic1" className={styles.dropdownItem}>Топик 3</a>
                </div>
              </div>
            </div>

            {/* Пребарување */}
            <a href="#" title="Пребарувај" onClick={toggleSearchDropdown}>
              <SearchIcon className={`${styles.headerSearchIcon} ${styles.navLink}`} />
            </a>
            <div className={`relative ${isSearchOpen ? 'block' : 'hidden'}`}>
              <input
                ref={searchRef}
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Пребарај..."
                className={`${styles.searchInput} p-1 w-60 mx-2 bg-white border rounded shadow-lg`}
                onKeyDown={handleSearchEnter}
                autoFocus={isSearchOpen}
              />
            </div>
          </nav>

          {/* Actions: Notifications, Language Switcher, Sign Up Button */}
          <div className="flex items-center">
            <div className="relative group">
              <a className={`${styles.notificationContainer}`}>
                <NotificationsIcon className={`${styles.notificationIcon} ${styles.navLink}`} />
              </a>

              {/* Notification Dropdown */}
              <div className={`${styles.dropdown} absolute right-0 mt-0 w-60 bg-white border rounded shadow-lg z-10 group-hover:block`}>
                <a href="#" className={`${styles.dropdownItem}`}>Notification 1</a>
                <a href="#" className={`${styles.dropdownItem}`}>Notification 2</a>
                <a href="#" className={`${styles.dropdownItem}`}>Notification 3</a>
              </div>
            </div>

            <div className="flex items-center ml-6">
              <a title='Македонски' className={`${styles.languageSwitcher} ${styles.navLink} mx-1`}>МК</a>
              <span>/</span>
              <a title='Англиски' className={`${styles.languageSwitcher} ${styles.navLink} mx-1`}>ЕN</a>
            </div>

            <div className="flex-shrink-0 ml-6 relative group">
              <a href="/sign-up" className={styles.joinButtonText}>
                ЗАЧЛЕНИ СЕ
              </a>

              {/* Dropdown */}
              <div className={`${styles.dropdown} absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block`}>
                <a href="/sign-up/individual" className={`${styles.dropdownItem}`}>Индивидуално членство</a>
                <a href="/sign-up/corporative" className={`${styles.dropdownItem}`}>Корпоративно членство</a>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center ml-auto" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <CloseIcon className="text-gray-600" />
          ) : (
            <MenuIcon />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex items-center justify-between p-4">
            <a href="/" title="logo">
              <Image
                className={styles.logo}
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={62}
              />
            </a>
            <button className="text-gray-600" title='hamburger_button' onClick={toggleMobileMenu}>
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col items-start px-4 py-6">
            <a href="/about" className={`text-gray-800 text-lg py-2 ${asPath === '/about' ? styles.navLinkActive : ''}`}>
              Информативни Содржини
            </a>
            <a href="/blog" className={`text-gray-800 text-lg py-2 ${asPath === '/blog' ? styles.navLinkActive : ''}`}>
              Едукативни Содржини
            </a>
            <a href="/conference" className={`text-gray-800 text-lg py-2 ${asPath === '/conference' ? styles.navLinkActive : ''}`}>
              Годишна Конференција
            </a>
            <a href="/event" className={`text-gray-800 text-lg py-2 ${asPath === '/event' ? styles.navLinkActive : ''}`}>
              Настани
            </a>
            <a href="/blog-article" className={`text-gray-800 text-lg py-2 ${asPath === '/blog-article' ? styles.navLinkActive : ''}`}>
              Блог
            </a>
            <div className="mt-4 w-full text-center">
              <a href="sign-up" className={styles.joinButtonText}>
                ЗАЧЛЕНИ СЕ
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
