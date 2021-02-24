import React, { useState } from 'react';
import { Page } from '../components/layout';
import emailjs from 'emailjs-com';
import { Button, Input, Form, TextArea, Message } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';

const validationSchema = Yup.object({
  name: Yup.string().required('Champ requis'),
  firstname: Yup.string().required('Champ requis'),
  email: Yup.string()
    .email('Entrez une adresse email valide')
    .required('Champ requis'),
  company: Yup.string(),
  phone: Yup.string(),
  message: Yup.string().required('Champ requis'),
});

const contact = () => {
  const [formMessage, setFormMessage] = useState({
    error: false,
    message: '',
  });

  const sendEmail = (values, actions) => {
    try {
      actions.setSubmitting(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          document.querySelector('#form'),
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(result => {
          console.log('success');
          setFormMessage({
            error: false,
            message: 'message bien envoyé',
          });
          actions.resetForm();
          actions.setSubmitting(false);
        })
        .catch(error => {
          console.log(error);
          setFormMessage({
            error: true,
            message: "Erreur lors de l'envoi du message",
          });
          actions.setSubmitting(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Contact | Nicolas MARET - Développeur React</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page
        title="Contactez moi"
        subtitle="Faîtes moi part de vos projets et je vous répondrai rapidement"
      >
        <div style={{ width: '100%', marginBottom: '2rem' }}>
          <iframe
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=37%20rue%20Mathieu%20Varille+(Nicolas%20MARET)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
        <Formik
          initialValues={{
            name: '',
            firstname: '',
            company: '',
            phone: '',
            message: '',
            email: '',
          }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            isValid,
            dirty,
            isSubmitting,
            touched,
          }) => (
            <Form id="form" onSubmit={handleSubmit}>
              <Form.Field>
                <label>Nom (requis)</label>
                <Input
                  type="text"
                  fluid
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Nom"
                  onBlur={handleBlur}
                  name="name"
                />
                <Message visible={errors.name && touched.name} error>
                  {errors.firstname}
                </Message>
              </Form.Field>

              <Form.Field>
                <label>Prénom (requis)</label>
                <Input
                  type="text"
                  fluid
                  value={values.firstname}
                  onChange={handleChange}
                  placeholder="Prénom"
                  onBlur={handleBlur}
                  name="firstname"
                />
                <Message visible={errors.firstname && touched.firstname} error>
                  {errors.firstname}
                </Message>
              </Form.Field>

              <Form.Field>
                <label>Société</label>
                <Input
                  type="text"
                  fluid
                  value={values.company}
                  onChange={handleChange}
                  placeholder="Société"
                  onBlur={handleBlur}
                  name="company"
                />
              </Form.Field>
              <Form.Field>
                <label>Téléphone</label>
                <Input
                  type="text"
                  fluid
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Téléphone"
                  onBlur={handleBlur}
                  name="phone"
                />
              </Form.Field>
              <Form.Field>
                <label>Email (requis)</label>
                <Input
                  type="email"
                  fluid
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email"
                  onBlur={handleBlur}
                  name="email"
                />
                <Message visible={errors.email && touched.email} error>
                  {errors.email}
                </Message>
              </Form.Field>
              <Form.Field>
                <label>Message (requis)</label>
                <TextArea
                  type="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Message"
                  onBlur={handleBlur}
                  name="message"
                />
                <Message visible={errors.message && touched.message} error>
                  {errors.message}
                </Message>
              </Form.Field>
              <Button
                disabled={!isValid || !dirty}
                loading={isSubmitting}
                color="red"
              >
                Envoyer
              </Button>
              <Message
                error={formMessage.error}
                success={!formMessage.error}
                visible={formMessage.message.length > 0}
              >
                {formMessage.message}
              </Message>
            </Form>
          )}
        </Formik>
      </Page>
    </React.Fragment>
  );
};

// export async function getStaticProps() {
//   return {
//     props: {
//       EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
//       EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
//       EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
//     },
//   };
// }

export default contact;
