import * as React from 'react';
import { Container, CssBaseline, Box, Divider } from '@mui/material';


import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import { MotionViewport } from '../../components/animate';

import { useLocales } from '../../locales';

// -------------------------------------------------------------------------------------------------------

export default function LandingPage() {
  const { themeStretch } = useSettingsContext();



  return (
    <Container maxWidth={themeStretch ? false : 'lg'} sx={{ p: 6, mt: 12 }} component={MotionViewport}>
    <CustomBreadcrumbs
      heading="Landing Page"
      links={[
        { name: 'Home', href: PATH_PAGE.root },
        { name: 'Landing Page' },

      ]}
    />      <CssBaseline />
      {/* <AppAppBar mode={mode} toggleColorMode={toggleColorMode} /> */}
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>

</Container>
  );
}
