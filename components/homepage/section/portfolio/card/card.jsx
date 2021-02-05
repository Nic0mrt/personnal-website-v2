import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';

export const Card = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <Image src={image} layout="fill"></Image>
      <div className={styles.hover}>
        <div className={styles.hoverContent}>
          <h4>{title}</h4>
          <p>Voir plus</p>
        </div>
      </div>
    </div>
  );
};
