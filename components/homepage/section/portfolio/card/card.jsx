import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';

export const Card = ({ project }) => {
  return (
    <React.Fragment>
      <div>
        <h5 className={styles.title}>{project.title}</h5>
        <div className={styles.card}>
          <Image
            src={`http://localhost:1337${project.images[0].url}`}
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
    </React.Fragment>
  );
};
