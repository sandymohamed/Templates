import * as React from 'react';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useLocales } from '../../locales';
import Iconify from '../../components/iconify';



export default function Highlights() {
  const { translate, } = useLocales();

  return (
    <Box
      id="highlights"
      sx={(theme) => ({
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },

      })}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography variant="h3" color='primary'>
            {translate('services.title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.500' }}>
            {translate('services.desc')}

          </Typography>
        </Box>


        <Grid container spacing={2.5}>
          {[...Array(8)].map((item, index) => (


            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={(theme) => ({
                  p: 3,
                  height: '100%',
                  boxShadow: theme.customShadows.card,
                })}
              >
                <Box sx={{ opacity: '70%' }}>
                  <Iconify icon={translate(`services.items.${index}.icon`)} width={26} />

                </Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom color='primary'>
                    {translate(`services.items.${index}.title`)}
                  </Typography>
                  <Typography variant="body2" sx={(theme) => ({ color: theme.palette.text.secondary })}>
                    {translate(`services.items.${index}.description`)}
                  </Typography>
                </div>
              </Stack>
            </Grid>

          ))}
        </Grid>
      </Container>
 

    </Box>
  );
}
