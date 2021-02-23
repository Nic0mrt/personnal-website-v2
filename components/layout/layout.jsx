import React, { useState } from 'react';
import styles from './layout.module.scss';
import { ActiveLink } from '../active-link';
import { Footer } from './footer/footer';
import { Icon } from 'semantic-ui-react';
import { Hamburger } from '../atoms/hamburger/hamburger';

export const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(state => !state);
  };

  const handleSelectLink = () => {
    console.log('click');
    setIsMenuOpen(false);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <header className={`${styles.header} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.headerSidebar}>
            <div className={styles.photo} />
            <p>
              <strong>
                Nicolas <span>MARET</span>
              </strong>
            </p>
            <h1>
              Développeur Frontend <br />
              Spécialiste React
            </h1>
          </div>
          <ul className={styles.menuList}>
            <li onClick={handleSelectLink}>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li onClick={handleSelectLink}>
              <ActiveLink href="/about">A propos</ActiveLink>
            </li>
            <li onClick={handleSelectLink}>
              <ActiveLink href="/realisations">Réalisations</ActiveLink>
            </li>
            <li onClick={handleSelectLink}>
              <ActiveLink href="/blog">Blog</ActiveLink>
            </li>
            <li onClick={handleSelectLink}>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </li>
          </ul>
        </header>
        <div className={styles.mobileMenu}>
          <Hamburger onClick={handleMenuOpen} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
