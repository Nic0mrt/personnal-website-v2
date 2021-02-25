import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({ project }) => {
  return (
    <React.Fragment key={project.id}>
      <Link href={`/realisations/${project.slug}`}>
        <div>
          <h5 className={styles.title}>{project.title}</h5>
          <div className={styles.card}>
            <Image
              src={`${project.images[0].url}`}
              alt={project.images[0].alternativeText}
              layout="fill"
            ></Image>
            <div className={styles.hover}>
              <div className={styles.hoverContent}>
                <h4>{project.title}</h4>
                <ul>
                  {project.technologies.map(technologie => {
                    return <li key={technologie.id}>{technologie.name}</li>;
                  })}
                </ul>
                <p>Voir plus</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};
