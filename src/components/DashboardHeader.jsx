import * as React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Button,
  Typography,
  Toolbar,
  List,
  IconButton,
  Drawer,
  Divider,
  Box,
  AppBar,
  Menu,
  MenuItem,
} from '@mui/material';
import { Container } from '@mui/system';
import Logo from '../assets/logo-header.png';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  {
    name: 'Offerings',
    path: '/',
  },
  {
    name: 'Portfolio',
    path: '/',
  },
  {
    name: 'Borrowers',
    path: '/',
  },
  {
    name: 'Resources',
    path: '/',
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box>
        <img src={Logo} />
      </Box>
      <Divider />
      <List>
        {navItems?.map((item, index) => {
          return (
            <>
              <Link to={item.path}>{item.name}</Link>
            </>
          );
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        '& nav': {
          position: 'unset',
        },
        '& .MuiToolbar-root': {
          padding: '0',
        },
      }}
    >
      <AppBar component='nav'>
        <Container maxWidth='xl'>
          <Toolbar sx={{ justifyContent: 'space-between', padding: '0' }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flex: '0 0 10%' }}>
              <Box
                sx={{
                  '& img': {
                    width: '100%',
                    maxWidth: '90px',
                  },
                }}
              >
                <Typography
                  variant='h5'
                  sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: '600' }}
                >
                  Arthasaga
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, flex: '0 0 60%' }}>
              {navItems?.map((item, index) => {
                return (
                  <>
                    <Box
                      sx={{
                        ml: 1,
                        '& a': {
                          textDecoration: 'none',
                          color: '#fff',
                          fontFamily: "'Poppins',sans-serif !important",
                          ml: 2,
                        },
                      }}
                    >
                      <Link to={item.path}>{item.name}</Link>
                    </Box>
                  </>
                );
              })}
            </Box>
            <Box sx={{ flex: '0 0 20%', textAlign: 'end', mr: 2 }}>
              <Box>
                <Typography variant='h6'>$0.00</Typography>
              </Box>
              <Box>
                <Typography variant='p'>Portfolio Value</Typography>
              </Box>
            </Box>
            <Box sx={{ flex: '0 0 5%', textAlign: 'end' }}>
              <Box>
                <Button
                  id='basic-button'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: '#fff' }}
                >
                  Dashboard
                </Button>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
