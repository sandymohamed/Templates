import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { useLocales } from '../../locales';

const logoStyle = {
  width: '180px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="#">Khairy Trading Industrial&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const { translate, } = useLocales();


  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      // setOpen(false);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >

        <Box sx={{ display: 'flex', justifyContent: 'center' }}
        >

          <Box sx={{ ml: '-15px' }}>
            <img
              src='/assets/images/logo/logo.jpeg'
              style={logoStyle}
              alt="logo"
            />
          </Box>

        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'row',
            gap: 4,
          }}
        >
          <Typography sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
            {translate(`nav.home`)}
          </Typography>
          <Typography sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('logoCollection')}>
            {translate(`nav.companies`)}
          </Typography>
          <Typography sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('highlights')}>
            {translate(`nav.services`)}
          </Typography>
          <Typography sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('testimonials')}>
            {translate(`nav.projects`)}
          </Typography>
          <Typography sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('about')}>
            {translate(`nav.aboutUs`)}
          </Typography>
          <Typography sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('faq')}>{translate(`nav.contactUs`)}</Typography>


        </Box>


      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            // href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            // href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            // href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
