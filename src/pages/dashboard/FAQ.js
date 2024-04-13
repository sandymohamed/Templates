import * as React from 'react';
import { m } from 'framer-motion';
// @mui
import { Typography, Paper, Container, Box } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';
import ContactForm from './ContactForm'
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

export default function FAQ() {
  const { translate, currentLang } = useLocales();

  console.log("currentLang", currentLang);

  return (
    <Container
      component={MotionViewport}
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >

      <Container sx={{ py: 10 }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2">
            {translate('contact.title')}

          </Typography>
        </m.div>
        <Box
          gap={10}
          display="grid"

          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm />

          <Paper gap={10}

            display="grid" sx={{ p: 4, mt: 6 }}

          >

            <m.div variants={varFade().inUp}>
              <Typography variant="h5" color="primary">
                {translate('contact.mail')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography variant="body1">
                P.O:6845 Jeddah -21452 Saudi Arabia
              </Typography>
            </m.div>

            <br />
            <br />
            <m.div variants={varFade().inUp}>
              <Typography variant="h5" color="primary">
                {translate('contact.phone')}
              </Typography>
            </m.div>

            {currentLang.value === 'ar' ? (
              <m.div variants={varFade().inUp}>
                <Typography variant="h6" >

                  966535377542 +

                </Typography>
                <Typography variant="h6">
                  966505640325 +
                </Typography>
              </m.div>
            ) : (
              <m.div variants={varFade().inUp}>
                <Typography variant="h6" >

                  + 966535377542

                </Typography>
                <Typography variant="h6">
                  +966505640325
                </Typography>
              </m.div>
            )}


            <br />
            <br />
            <m.div variants={varFade().inUp}>
              <Typography variant="h5" color="primary">
                {translate('contact.fax')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography variant="body1">
                +96626200513
              </Typography>
            </m.div>
            <br />
            <br />
            <m.div variants={varFade().inUp}>
              <Typography variant="h5" color="primary">
                {translate('contact.email')}
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="body1">
                kkastero@khairy.com.sa <br />
                info@khairy.com.sa
              </Typography>
            </m.div>
          </Paper>
        </Box>
      </Container>
    </Container>
  );
}
