import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useLocales } from '../../locales';
import CarouselAnimation from '../../sections/carousel/CarouselAnimation';


export default function Testimonials() {

  const { translate, } = useLocales();

  return (
    <Container
      id="testimonials"
      sx={(theme) => ({
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      })}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography variant="h3" color='primary'>
          {translate(`projects.title`)}
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.500' }}>
          {translate(`projects.desc`)}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[...Array(5)].map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" sx={(theme) => ({ color: theme.palette.text.secondary })}>
                  {translate(`projects.items.${index}.title`)}
                </Typography>
              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ maxHeight: '85vh' }}>

        <CarouselAnimation />

      </Grid>
    </Container>
  );
}
