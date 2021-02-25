import React from 'react';
import { Button } from '../../../atoms';
import styles from './contact-me.module.scss';
import Link from 'next/link';

export const ContactMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.contactText}>
          <div className={styles.workTogether}>Travaillons ensemble!</div>
          <div className={styles.workTogetherSub}>
            Parlez-moi de votre projet
          </div>
        </div>
        <Link href="/contact">
          <a>
            <Button>Contactez moi</Button>
          </a>
        </Link>
      </div>
    </section>
  );
};
