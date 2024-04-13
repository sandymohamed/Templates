import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// components
import { MotionContainer, varFade } from '../../components/animate';
import { useLocales } from '../../locales';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    bottom: 80,
    textAlign: 'left',
    position: 'absolute',
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const { translate, } = useLocales();

  return (
    <StyledRoot>
      <Container component={MotionContainer}>
        <StyledContent>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h1"
              sx={{
                mt: 5,
                color: 'primary.main',
                fontWeight: 'fontWeightMedium',
              }}
            >
              {translate('about.title')}
            </Typography>
          </m.div>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
