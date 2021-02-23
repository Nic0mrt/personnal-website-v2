import Head from 'next/head';
import styles from '../styles/pages/index/index.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import { PageSection, Portfolio, SkillsGrid } from '../components';
import { ContactMe } from '../components/homepage/section/contact-me';
import Image from 'next/image';

const titles = [
  'Développeur Frontend ',
  'Développeur React.JS ',
  'Développeur Freelance ',
];
function Home({ projects }) {
  const [cpt, setCpt] = useState(0);
  const section = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCpt(state => (state === titles.length - 1 ? 0 : state + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    section.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Home | Nicolas MARET - Développeur React</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <section className={styles.bgHero}>
          <Image
            priority
            src="/assets/bg-hero.jpg"
            alt="Nicolas MARET développeur React"
            layout="fill"
            quality={20}
          ></Image>
          <div className={styles.bgText}>
            <h3>
              Nicolas <strong>MARET</strong>
            </h3>
            <h2>
              <span className={styles.textCaroussel}>
                <strong>{titles[cpt]}</strong>{' '}
              </span>
            </h2>
          </div>
          <div className={styles.mouse} onClick={handleScroll}>
            <div className={styles.mouseWheel}></div>
          </div>
        </section>

        <div ref={section}></div>
        <PageSection
          title="Mes compétences"
          subtitle="Ma stack technique de prédilection"
          bgColor="#f7f7f7"
        >
          <SkillsGrid />
        </PageSection>
        <ContactMe />
        <PageSection
          title="Mon portefolio"
          subtitle="Des exemples de réalisations"
          bgColor="#f7f7f7"
        >
          <Portfolio projects={projects} />
        </PageSection>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.STRAPI_URL}projets?_sort=id:DESC&_limit=4`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: data },
  };
}

export default Home;
