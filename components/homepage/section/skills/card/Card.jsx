import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './card.module.scss';

export const SkillCard = ({ name, icon, color }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <div className={styles.icon}>
        <img src={`/assets/icons/${icon}.svg`} alt="" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};
