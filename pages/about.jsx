import React from 'react';
import Head from 'next/head';
import { Page } from '../components/layout';
import {
  ContactMe,
  SkillsGrid,
  PageSection,
} from '../components/homepage/section/';
import styles from './about.module.scss';
import { Button } from '../components/atoms';
import Image from 'next/image';

const about = () => {
  return (
    <React.Fragment>
      <Head>
        <title>A propos | Nicolas MARET - Développeur React</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page title="A propos de moi" subtitle="Pour un peu mieux me connaitre">
        <div className={styles.container}>
          <div className={styles.photoContainer}>
            <Image src="/assets/Nicolas.jpg" height={535} width={400} />
          </div>
          <div className={styles.aboutContainer}>
            <h4 className={styles.aboutTitle}>Qui suis-je ?</h4>
            <h3 className={styles.aboutSubtitle}>
              Développeur React.JS passionné par les technlogies Javascript
            </h3>
            <p className={styles.aboutParagraph}>
              I am a freelancer based in the United Kingdom and i have been
              building noteworthy UX/UI designs and websites for years, which
              comply with the latest design trends. I help convert a vision and
              an idea into meaningful and useful products. Having a sharp eye
              for product evolution helps me prioritize tasks, iterate fast and
              deliver faster.
            </p>
            <div className={styles.divider}></div>
            <div className={styles.aboutInfos}>
              <div className={styles.aboutInfosName}>
                <span>Nom :</span> Nicolas MARET
              </div>
              <div className={styles.aboutInfosEmail}>
                <span>Email :</span>{' '}
                <a href="mailto:maretnicolas22@gmail.com">
                  maretnicolas22@gmail.com
                </a>
              </div>
              <div className={styles.aboutInfosAge}>
                <span>Age :</span> 29 ans
              </div>
              <div className={styles.aboutInfosFrom}>
                <span>Ville :</span> Lyon
              </div>
            </div>
            <div className={styles.aboutButtons}>
              <a
                href="https://www.malt.fr/profile/nicolasmaret"
                target="__blank"
              >
                Voir mon profil sur
                <img src="/assets/icons/malt.svg" />
              </a>
            </div>
          </div>
        </div>
      </Page>
      <ContactMe />
      <PageSection
        title="Mes compétences"
        subtitle="Ma stack technique de prédilection"
      >
        <SkillsGrid />
      </PageSection>
    </React.Fragment>
  );
};

export default about;
