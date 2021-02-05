import React from 'react';
import styles from './footer.module.scss';
import { Icon } from 'semantic-ui-react';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.infos}>
          <Icon name="send" size="big" />
          <div href="mailto:maretnicolas22@gmail.com">
            maretnicolas22@gmail.com
          </div>
        </div>
        <div className={styles.infos}>
          <Icon name="phone" size="big" />
          <div>+33 (0)7 71 67 04 64</div>
        </div>
        <div className={styles.infos}>
          <Icon name="map" size="big" />
          <div>Lyon</div>
        </div>
      </div>
      <div className={styles.socialMedias}>
        <div
          className={styles.socialIcon}
          style={{ backgroundColor: 'purple' }}
        >
          <Icon name="github" size="large" />
        </div>
        <div
          className={styles.socialIcon}
          style={{ backgroundColor: '#0077b5' }}
        >
          <Icon name="linkedin" size="large" />
        </div>
      </div>
      <div style={{ textAlign: 'center', color: '#fff' }}>
        Copyright ©{' '}
        {new Date().toLocaleDateString([], {
          year: 'numeric',
        })}{' '}
        Nicolas MARET, all rights reserved. Developed with Next.JS and React.JS
      </div>
    </footer>
  );
};
