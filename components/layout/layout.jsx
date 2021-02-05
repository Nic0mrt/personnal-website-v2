import React from 'react';
import styles from './layout.module.scss';
import { ActiveLink } from '../active-link';
import { Footer } from './footer/footer';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <header className={styles.header}>
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
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about">A propos</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/services">Services</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/realisations">Réalisations</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog">Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </li>
          </ul>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
