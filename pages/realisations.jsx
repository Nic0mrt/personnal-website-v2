import React from 'react';
import Head from 'next/head';
import { Page } from '../components/layout';
import { Portfolio } from '../components';

const realisations = ({ projects }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Réalisations | Nicolas MARET - Développeur React</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page title="Mes réalisations">
        <Portfolio projects={projects} showSeeMore={false} />
      </Page>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.STRAPI_URL}projets?_sort=position:ASC`
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

export default realisations;
