import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// config
import { NAV } from '../../config-global';

//
import ProgressBar from '../progress-bar';
import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoadingScreen() {

  const theme = useSettingsContext();
  const { themeLayout } = useSettingsContext();


  const size =
    (themeLayout === 'mini' && NAV.W_DASHBOARD_MINI) ||
    (themeLayout === 'vertical' && NAV.W_DASHBOARD) ||
    128;

  return (
    <>
      <ProgressBar />

      <StyledRoot
        sx={{

          width: `calc(100% - ${size / 4}px)`,
          ...(themeLayout === 'horizontal' && {
            width: 1,
            height: `calc(100% - ${size / 4}px)`,
          }),

        }}
      >


        <m.div
          animate={{
            scale: [1, 0.9, 0.9, 1, 1],
            opacity: [1, 0.48, 0.48, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          {/* <Logo disabledLink sx={{ width: 64, height: 64 }} /> */}
          <img
            src={theme.themeMode === 'dark' ? '/assets/images/logo/logo-1.png' : '/assets/images/logo/logo-2.png'}
            style={{ width: 80, height: 80 }}
            alt="logo"
          />
        </m.div>

        <Box
          component={m.div}
          animate={{
            scale: [1.6, 1, 1, 1.6, 1.6],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
          sx={{
            width: 140,
            height: 140,
            position: 'absolute',
            border: (them) => `solid 3px ${alpha(them.palette.primary.dark, 0.24)}`,
          }}
        />

        <Box
          component={m.div}
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{
            ease: 'linear',
            duration: 3.2,
            repeat: Infinity,
          }}
          sx={{
            width: 220,
            height: 220,
            position: 'absolute',
            border: (them) => `solid 8px ${alpha(them.palette.primary.dark, 0.24)}`,
          }}
        />


      </StyledRoot>
    </>
  );
}
