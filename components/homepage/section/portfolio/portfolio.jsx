import React from 'react';
import styles from './portfolio.module.scss';
import Image from 'next/image';
import { Card } from './card';
import { Button } from '../../../atoms';
import Link from 'next/link';

export const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Card title="Super truc" image="/assets/bg-hero.jpg" />
        <Card title="Super truc" image="/assets/bg-hero.jpg" />
        <Card title="Super truc" image="/assets/bg-hero.jpg" />
      </div>
      <div className={styles.bottom}>
        <Link href="/realisations">
          <a>
            <Button>En voir plus</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
