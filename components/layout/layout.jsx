import React, { useState } from 'react';
import styles from './layout.module.scss';
import { ActiveLink } from '../active-link';
import { Footer } from './footer/footer';
import { Hamburger } from '../atoms/hamburger/hamburger';
import Head from 'next/head';

export const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(state => !state);
  };

  const handleSelectLink = () => {
    setIsMenuOpen(false);
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Nicolas MARET Développeur freelance spécialisé React vous accompagne pour tous vos projets frontend, disponible sur Lyon ou remote"
        />
        <meta name="title" content="Nicolas MARET - Développeur React à Lyon" />
        <meta name=" robots " content="index, follow" />
      </Head>
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
