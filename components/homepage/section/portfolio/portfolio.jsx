import React, { useEffect } from 'react';
import styles from './portfolio.module.scss';
import Image from 'next/image';
import { Card } from './card';
import { Button } from '../../../atoms';
import Link from 'next/link';
import { ProjectsService } from '../../../services/projects';

export const Portfolio = ({ projects }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {projects &&
          projects.map(project => {
            return <Card project={project}></Card>;
          })}
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
