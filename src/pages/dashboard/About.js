import * as React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// @mui
import { Grid, Container, Typography, Divider, } from '@mui/material';
import { alpha, useTheme, styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import { useLocales } from '../../locales';
import { AboutHero } from '../../sections/about';
import Footer from './Footer';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------


export default function About() {
  const { translate, } = useLocales();

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;
  return (
    <>
      <Helmet>
        <title> About us | Khairy Trading Industrial</title>
      </Helmet>

      <StyledRoot id="about">
        <AboutHero />
        <Container component={MotionViewport}>
          <Grid container spacing={3} sx={{ py: 6 }}>
            {isDesktop && (
              <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid item xs={6}>
                    <m.div variants={varFade().inUp}>
                      <Image
                        alt="our office 1"
                        src="https://picsum.photos/200/"
                        ratio="3/4"
                        sx={{
                          borderRadius: 2,
                          boxShadow: shadow,
                        }}
                      />
                    </m.div>
                  </Grid>

                </Grid>
              </Grid>
            )}

            <Grid item xs={12} md={6} lg={5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  {translate('about.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                  }}
                >
                  {translate('about.desc')}

                </Typography>
              </m.div>



            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ py: 6 }}>


            <Grid item xs={12} md={6} lg={5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  {translate('Vision.Vision_title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                  }}
                >
                  {translate('Vision.Vision_desc')}

                </Typography>
              </m.div>



            </Grid>

            {isDesktop && (
              <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid item xs={6}>
                    <m.div variants={varFade().inUp}>
                      <Image
                        alt="our office 1"
                        src="https://picsum.photos/200/300"
                        ratio="3/4"
                        sx={{
                          borderRadius: 2,
                          boxShadow: shadow,
                        }}
                      />
                    </m.div>
                  </Grid>
                  <Grid item xs={6}>
                    <m.div variants={varFade().inUp}>
                      <Image
                        alt="our office 2"
                        src="https://picsum.photos/200/400"
                        ratio="1/1"
                        sx={{ borderRadius: 2 }}
                      />
                    </m.div>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>


          <Grid container spacing={3} sx={{ py: 6 }}>
            {isDesktop && (
              <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
                <Grid container spacing={3} alignItems="flex-end">

                  <Grid item xs={6}>
                    <m.div variants={varFade().inUp}>
                      <Image
                        alt="our office 2"
                        src="https://picsum.photos/220/"
                        ratio="1/1"
                        sx={{ borderRadius: 2 }}
                      />
                    </m.div>
                  </Grid>
                </Grid>
              </Grid>
            )}

            <Grid item xs={12} md={6} lg={5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  {translate('Vision.Mission_title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                  }}
                >
                  {translate('Vision.Mission_desc')}

                </Typography>
              </m.div>



            </Grid>
          </Grid>
        </Container>
      </StyledRoot>
      <br />
      <br />
      <br />
      <Divider />
      <Footer />
    </>
  );
}
