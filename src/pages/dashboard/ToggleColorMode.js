import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import { useSettingsContext } from '../../components/settings/SettingsContext';
// ---------------------------------------------------------------------------------
ToggleColorMode.propTypes = {
  sx: PropTypes.object,

};

// ---------------------------------------------------------------------------------
function ToggleColorMode({sx}) {

  const { themeMode, onToggleMode } = useSettingsContext();

  return (
    <Box sx={{ width: '32px', ...sx }}>
      <Button
        variant="text"
        onClick={onToggleMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ width: 1, height: 1, p: '4px' }}
      >
     
        {themeMode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" />
        )}
      </Button>
    </Box>
  );
}



export default ToggleColorMode;
