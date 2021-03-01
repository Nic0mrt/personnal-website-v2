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
              Développeur Frontend Freelance basé à Lyon, je vous accompagne
              dans la réalisation de vos projets d'applications avec React.
              Veritable passionné par le monde du web je suis en constante
              recherche de performance et d'amélioration et je vous apporterai
              mon envie et mon sens du travail bien fait !
            </p>
            <p>
              Faisons connaissance et faites moi confiance dans vos futurs
              projets ou venez voir quelques-uns de mes projets{' '}
              <a href="/realisations">ici</a>.
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
