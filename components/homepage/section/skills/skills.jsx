import React from 'react';
import styles from './skills.module.scss';
import { SkillCard } from './card';
import { Button } from '../../../atoms';
import Link from 'next/link';

export const SkillsGrid = () => {
  return (
    <div className={styles.container}>
      <SkillCard name="React.JS" icon="react" color="#5ed3f3" />
      <SkillCard name="Javascript" icon="javascript" color="#e9d44d" />
      <SkillCard name="Typescript" icon="typescript" color="#2f74c0" />
      <SkillCard name="Gatsby" icon="gatsby" color="#633194" />
      <SkillCard name="Next.JS" icon="nextJS" color="#f7c427" />
      <SkillCard name="Node.JS" icon="nodeJS" color="#8cbf3d" />
      <SkillCard name="MongoDB" icon="mongoDB" color="#569234" />
      <SkillCard name="Mapbox" icon="mapbox" color="#dc3545" />
    </div>
  );
};
