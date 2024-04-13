import * as React from 'react';
// import { m } from 'framer-motion';
// @mui
// import { useTheme, } from '@mui/material/styles';
import { Container, CssBaseline, Stack, alpha } from '@mui/material';

import SignInCard from './SignInCard';
import Content from './Content';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import { MotionViewport, varFade } from '../../components/animate';

import { useLocales } from '../../locales';

// -------------------------------------------------------------------------------------------------------

export default function SignInSide() {


  const { themeStretch } = useSettingsContext();
  const { translate, currentLang } = useLocales();

  // const theme = useTheme();



  return (
    <Container maxWidth={themeStretch ? false : 'lg'} sx={{ p: 6, mt: 12 }} component={MotionViewport}>
    <CustomBreadcrumbs
      heading="category Details"
      links={[
        { name: 'Home', href: PATH_PAGE.root },
        { name: 'Sign In Side' },

      ]}
    />
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          boxShadow: `-40px 40px 80px ${alpha(
            theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
            0.48
          )}`,
          // backgroundImage:
          //   theme.palette.mode === 'light'
          //     ? 'radial-gradient(ellipse at 70% 51%, #f0f7ff, #fff)'
          //     : 'radial-gradient(at 70% 51%, rgba(2,41,79,0.5), rgb(1, 6, 11))',
          // backgroundSize: 'cover',
          height: { xs: 'auto', md: '100dvh' },
          pb: { xs: 12, sm: 0 },
        })}
        component="main"
      >
   
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="center"
          gap={{ xs: 6, sm: 12 }}
          sx={{ height: { xs: '100%', md: '100dvh' }, p: 2 }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>

    </Container>
  );
}
