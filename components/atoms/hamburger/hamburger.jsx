import React, { useState } from 'react';
import styles from './hamburger.module.scss';

export const Hamburger = ({ onClick }) => {
  return (
    <div role="button" className={styles.container} onClick={() => onClick()}>
      <span className={styles.firstBar}></span>
      <span className={styles.secondBar}></span>
      <span className={styles.thirdBar}></span>
    </div>
  );
};
