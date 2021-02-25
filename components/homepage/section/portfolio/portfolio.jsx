import React from 'react';
import styles from './portfolio.module.scss';
import { Card } from './card';
import { Button } from '../../../atoms';
import Link from 'next/link';

export const Portfolio = ({ projects, showSeeMore = true }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {projects &&
          projects.map(project => {
            return <Card project={project}></Card>;
          })}
      </div>
      {showSeeMore && (
        <div className={styles.bottom}>
          <Link href="/realisations">
            <a>
              <Button>En voir plus</Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};
