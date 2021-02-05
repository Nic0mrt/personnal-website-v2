import React from 'react';
import styles from './button.module.scss';

export const Button = ({ children, color }) => {
  let background;
  let fontColor;
  switch (color) {
    case 'primary':
      background = '#dc3545';
      fontColor = '#fff';
      break;

    case 'seconday':
      background = '#fff';
      fontColor = '#dc3545';
      break;
    default:
      background = '#dc3545';
      fontColor = '#fff';
      break;
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: background, color: fontColor }}
    >
      {children}
    </div>
  );
};
