import { useState } from 'react';
// import { useLocation } from 'react-router';
import { Link, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, Paper } from '@mui/material';

import ToggleColorMode from './ToggleColorMode';
import ColorPresetsOptions from '../../components/settings/ColorPresetsOptions';
import Iconify from '../../components/iconify';

import { useLocales } from '../../locales';
import MenuPopover from '../../components/menu-popover';
import LanguagePopover from '../../sections/languages/LanguagePopover';
import { useSettingsContext } from '../../components/settings';
//  ---------------------------------------------------------------------------------------
const logoStyle = {
  // width: '140px',
  height: '65px',
  cursor: 'pointer',
};

//  ---------------------------------------------------------------------------------------
function AppAppBar() {
  const them = useSettingsContext();

  console.log("th", them);
  const { translate, } = useLocales();

  const location = useLocation();
  const isHome = location.pathname === '/';

  const [openCollapse, setOpenCollapse] = useState(null);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  const [openPopover, setOpenPopover] = useState(null);


  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 50,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={them.themeMode === 'dark' ? '/assets/images/logo/logo-1.png' : '/assets/images/logo/logo-2.png'}

                style={logoStyle}
                alt="logo"
              />
              {isHome ?
                (<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <MenuItem
                    onClick={() => scrollToSection('hero')}
                    sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {translate(`nav.home`)}
                    </Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => scrollToSection('logoCollection')}
                    sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {translate(`nav.companies`)}
                    </Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => scrollToSection('testimonials')}
                    sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {translate(`nav.projects`)}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection('highlights')}
                    sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {translate(`nav.services`)}
                    </Typography>
                  </MenuItem>




                  <MenuItem onClick={handleOpenPopover} sx={{ py: '6px', px: { md: '6px', lg: '12px' } }} >
                    <Typography variant="body2" color="text.primary">
                      {translate(`nav.category`)}
                    </Typography>

                    {openPopover ? (
                      <Iconify icon="ic:round-expand-less" width={24} />
                    ) : (
                      <Iconify icon="ic:round-expand-more" width={24} />
                    )}
                  </MenuItem>

                  <Button component={Link} sx={{ display: 'block' }} to="/about-us">

                    <Typography variant="body2" color="text.primary">
                      {translate(`nav.aboutUs`)}
                    </Typography>
                  </Button>

                  <Button component={Link} sx={{ display: 'block' }} to="/contact-us">

                    <Typography variant="body2" color="text.primary">
                      {translate(`nav.contactUs`)}
                    </Typography>
                  </Button>

                  <MenuPopover anchor="top-left" open={openPopover} onClose={handleClosePopover} sx={{ width: 260, }}>
                    <Paper sx={{ display: 'block', }}>

                      {[...Array(13)].map((item, index) => (

                        <Button color="inherit" key={index} component={Link} sx={{ display: 'block' }} to={`/category/${translate(`nav.categories.${index}.link`)}`} onClick={handleClosePopover}>
                          <MenuItem
                            sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                          >
                            {translate(`nav.categories.${index}.title`)}


                          </MenuItem>
                        </Button>
                      ))}



                    </Paper>

                  </MenuPopover>
                </Box>) : (

                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <Button color="inherit" component={Link} sx={{ display: 'block' }} to="/">
                      <Typography variant="body2" color="text.primary">
                        {translate(`nav.home`)}
                      </Typography>
                    </Button>

                    <Button color="inherit" component={Link} sx={{ display: 'block' }} to="/">
                      <Typography variant="body2" color="text.primary">
                        {translate(`nav.projects`)}
                      </Typography>


                    </Button>
                    <Button color="inherit" component={Link} sx={{ display: 'block' }} to="/">
                      <Typography variant="body2" color="text.primary">
                        {translate(`nav.services`)}
                      </Typography>
                    </Button>

                    <MenuItem onClick={handleOpenPopover} sx={{ py: '6px', px: { md: '6px', lg: '12px' }, }} >
                      <Typography variant="body1" color="text.primary">
                        {translate(`nav.category`)}
                      </Typography>

                      {openPopover ? (
                        <Iconify icon="ic:round-expand-less" width={24} />
                      ) : (
                        <Iconify icon="ic:round-expand-more" width={24} />
                      )}
                    </MenuItem>

                    <Button component={Link} sx={{ display: 'block' }} to="/about-us">

                      <Typography variant="body2" color="text.primary">
                        {translate(`nav.aboutUs`)}
                      </Typography>
                    </Button>

                    <Button component={Link} sx={{ display: 'block' }} to="/contact-us">

                      <Typography variant="body2" color="text.primary">
                        {translate(`nav.contactUs`)}
                      </Typography>
                    </Button>

                    <MenuPopover anchor="top-left" open={openPopover} onClose={handleClosePopover} sx={{ width: 260, }}>
                      {[...Array(13)].map((item, index) => (

                        <Button color="inherit" key={index} component={Link} sx={{ display: 'block' }} to={`/category/${translate(`nav.categories.${index}.link`)}`} onClick={handleClosePopover}>
                          <MenuItem
                            sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                          >
                            {translate(`nav.categories.${index}.title`)}

                          </MenuItem>
                        </Button>
                      ))}

                    </MenuPopover>

                  </Box>
                )}
            </Box>


            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1.0,
                alignItems: 'center',
                pl: 2
              }}
            >


              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/sign-in/"
                target="_blank"
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/sign-up/"
                target="_blank"
              >
                Sign up
              </Button>
              <ToggleColorMode />
              <LanguagePopover />
              <ColorPresetsOptions />


            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>

              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/sign-in/"
                target="_blank"
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/sign-up/"
                target="_blank"
              >
                Sign up
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  {isHome ? (
                    <>
                      <MenuItem onClick={() => scrollToSection('hero')}>
                        {translate(`nav.home`)}
                      </MenuItem>
                      <MenuItem onClick={() => scrollToSection('logoCollection')}>
                        {translate(`nav.companies`)}
                      </MenuItem>
                      <MenuItem onClick={() => scrollToSection('testimonials')}>
                        {translate(`nav.projects`)}
                      </MenuItem>
                      <MenuItem onClick={() => scrollToSection('highlights')}>
                        {translate(`nav.services`)}
                      </MenuItem>



                      <MenuItem onClick={handleClick} >
                        <Typography variant="body1" color="text.primary">
                          {translate(`nav.category`)}
                        </Typography>

                        {openCollapse ? (
                          <Iconify icon="ic:round-expand-less" width={24} />
                        ) : (
                          <Iconify icon="ic:round-expand-more" width={24} />
                        )}
                      </MenuItem>


                      <Button color="inherit" component={Link} sx={{ display: 'block' }} to="/about-us">
                        {translate(`nav.aboutUs`)}

                      </Button>
                      <br />
                      <Button color="inherit" component={Link} sx={{ display: 'block' }} to="/contact-us">
                        {translate(`nav.contactUs`)}

                      </Button>

                      <Collapse in={openCollapse} timeout="auto">
                        <Paper sx={{ display: 'block', }}>

                          {[...Array(13)].map((item, index) => (

                            <MenuItem
                              key={index}
                              sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                            >
                              <Button color="inherit" component={Link} sx={{ display: 'block' }} to={`/category/${translate(`nav.categories.${index}.link`)}`}>
                                {translate(`nav.categories.${index}.title`)}

                              </Button>

                            </MenuItem>
                          ))}

                        </Paper>

                      </Collapse>
                    </>) :
                    (
                      <>

                        <MenuItem color="inherit" component={Link} sx={{ display: 'block' }} to="/">
                          {translate(`nav.home`)}

                        </MenuItem>
                        <MenuItem color="inherit" component={Link} sx={{ display: 'block' }} to="/">
                          {translate(`nav.projects`)}

                        </MenuItem>
                        <MenuItem color="inherit" component={Link} sx={{ display: 'block' }} to="/">
                          {translate(`nav.services`)}

                        </MenuItem>


                        <MenuItem onClick={handleClick}  >
                          <Typography variant="body1" color="text.primary">
                            {translate(`nav.category`)}
                          </Typography>

                          {openCollapse ? (
                            <Iconify icon="ic:round-expand-less" width={24} />
                          ) : (
                            <Iconify icon="ic:round-expand-more" width={24} />
                          )}
                        </MenuItem>


                        <Button color="inherit" component={Link} sx={{ display: 'block' }} to="/about-us">
                          {translate(`nav.aboutUs`)}

                        </Button>
                        <br />
                        <Button color="inherit" component={Link} sx={{ display: 'block' }} to="/contact-us">
                          {translate(`nav.contactUs`)}

                        </Button>

                        <Collapse in={openCollapse} timeout="auto">
                          <Paper sx={{ display: 'block', mt: 8, }}>

                            {[...Array(13)].map((item, index) => (
                              <MenuItem
                                key={index}
                                sx={{ py: '6px', px: { md: '6px', lg: '12px' } }}
                              >
                                <Button color="inherit" component={Link} sx={{ display: 'block' }} to={`/category/${translate(`nav.categories.${index}.link`)}`}>
                                  {translate(`nav.categories.${index}.title`)}

                                </Button>

                              </MenuItem>
                            ))}



                          </Paper>
                        </Collapse>

                      </>
                    )
                  }

                  <Divider />

                  <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', m: 2 }}>
                    {translate(`nav.theme`)}  <ToggleColorMode />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', m: 2 }}>
                    {translate(`nav.language`)}  <LanguagePopover />
                  </Box>


                  <ColorPresetsOptions />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {

};

export default AppAppBar;
