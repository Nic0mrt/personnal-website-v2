import React from 'react';
import styles from './page.module.scss';
export const Page = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
