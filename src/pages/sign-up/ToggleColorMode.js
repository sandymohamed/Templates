import * as React from 'react';
import PropTypes from 'prop-types';

// import IconButton from '@mui/material/IconButton';

// import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={toggleColorMode}
      color="primary"
      aria-label="Theme toggle button"
    >
      {mode === 'dark' ? 'light' : 'dark'}
    </button>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
