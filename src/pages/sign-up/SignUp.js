import * as React from 'react';
import { Container , Box, Button, Card, Checkbox, Divider, FormControlLabel, 
FormLabel, FormControl, Link, TextField, Typography, Stack, } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';


// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

// routes
import { PATH_PAGE } from '../../routes/paths';

import { GoogleIcon, FacebookIcon, SitemarkIcon  } from './CustomIcons';
// components
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import { MotionViewport } from '../../components/animate';

import { useLocales } from '../../locales';

// -------------------------------------------------------------------------------------------------------


export default function SignUp() {

  const { themeStretch } = useSettingsContext();
  const { currentLang } = useLocales();

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');
    const lastName = document.getElementById('lastName');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    if (!lastName.value || lastName.value.length < 1) {
      setLastNameError(true);
      setLastNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage('');
    }

    return isValid;
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    // <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
       <Container maxWidth={themeStretch ? false : 'lg'} sx={{ p: 6, mt: 12 }} component={MotionViewport}>
    <CustomBreadcrumbs
      heading={ currentLang.value === 'ar' ?  ' انشاء حساب' :'Sign Up'}
      links={[
        { name:  currentLang.value === 'ar' ? 'الصفحة الرئيسية': 'Home', href: PATH_PAGE.root },
        { name: currentLang.value === 'ar' ?   ' انشاء حساب' :'Sign Up' },

      ]}
    />
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          // backgroundImage:
          //   theme.palette.mode === 'light'
          //     ? `linear-gradient(180deg, ${alpha('#CEE5FD', 0.2)}, #FFF)`
          //     : `linear-gradient(${alpha('#02294F', 0.2)}, ${alpha('#021F3B', 0.0)})`,
          // backgroundRepeat: 'no-repeat',
          height: { xs: 'auto', sm: '100dvh' },
          pb: { xs: 12, sm: 0 },
        })}
        component="main"
      >
       
        <Stack
          justifyContent="center"
          sx={{ height: { xs: '100%', sm: '100dvh' }, p: 2 }}
        >
          <Card
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: { xs: '100%', sm: '450px' },
              p: { xs: 2, sm: 4 },
              gap: 4,
              boxShadow:
                theme.palette.mode === 'light'
                  ? 'rgba(0, 0, 0, 0.05) 0px 5px 15px 0px, rgba(25, 28, 33, 0.05) 0px 15px 35px -5px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'
                  : 'rgba(0, 0, 0, 0.5) 0px 5px 15px 0px, rgba(25, 28, 33, 0.08) 0px 15px 35px -5px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
            })}
          >
            <SitemarkIcon sx={{ width: 100 }} />
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  placeholder="John"
                  error={nameError}
                  helperText={nameErrorMessage}
                  color={nameError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  placeholder="Snow"
                  name="lastName"
                  autoComplete="last-name"
                  error={lastNameError}
                  helperText={lastNameErrorMessage}
                  color={lastNameError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="your@email.com"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  error={emailError}
                  helperText={emailErrorMessage}
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="outlined"
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates via email."
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign up
              </Button>
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Already have an account? Sign in
              </Link>
            </Box>
            <Divider>
              <Typography color="text.secondary">or</Typography>
            </Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => alert('Sign up with Google')}
                startIcon={<GoogleIcon />}
              >
                Sign up with Google
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => alert('Sign up with Facebook')}
                startIcon={<FacebookIcon />}
              >
                Sign up with Facebook
              </Button>
            </Box>
          </Card>
        </Stack>
      </Stack>
   
      </Container>
  );
}
