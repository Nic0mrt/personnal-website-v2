import React from 'react';
import styles from './section.module.scss';
export const PageSection = ({ title, subtitle, children, bgColor }) => {
  return (
    <section
      className={styles.container}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <h4>
        {title} <p>{subtitle}</p>
      </h4>
      {children}
    </section>
  );
};
