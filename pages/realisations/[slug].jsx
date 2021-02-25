import React from 'react';
import { Page } from '../../components';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import Image from 'next/image';
import style from './realisation.module.scss';
import ReactMarkdown from 'react-markdown';

export default function Project({ project }) {
  return (
    <React.Fragment>
      <Page title={project.title}>
        <div className={style.container}>
          <Carousel className={style.carousel} animation="slide" autoPlay>
            {project.images.map(image => {
              return (
                <Paper key={image.id} className={style.paper}>
                  <Image
                    src={image.url}
                    alt={image.name}
                    height={500}
                    width={1000}
                  />
                </Paper>
              );
            })}
          </Carousel>

          <div className={style.technologies}>
            <h4>Technologies :</h4>
            <ul>
              {project.technologies.map(techno => (
                <li key={techno.id}>{techno.name}</li>
              ))}
            </ul>
          </div>

          <div className={style.description}>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
        </div>
      </Page>
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.STRAPI_URL}projets`);
  const data = await response.json();
  const paths = data.map(project => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params.slug);
  const response = await fetch(
    `${process.env.STRAPI_URL}projets?slug=${params.slug}`
  );
  const project = await response.json();
  console.log(project);
  return {
    props: {
      project: project[0],
    },
  };
}
