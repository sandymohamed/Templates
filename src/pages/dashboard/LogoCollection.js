import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useLocales } from '../../locales';
import CarouselCenterMode from '../../sections/carousel/CarouselCenterMode';
// ----------------------------------------------------------------------------

export default function LogoCollection() {
  const { translate, } = useLocales();

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="h6"
        align="center"
        color="text.secondary"
      >
        {translate('companies.title')}

      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 1.5, }}>

        <CarouselCenterMode />

      </Grid>
    </Box>
  );
}
