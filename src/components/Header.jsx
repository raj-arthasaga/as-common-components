import * as React from 'react';
import { Box, Toolbar, Container, AppBar, Button, Menu, MenuItem } from '@mui/material';
import Logo from '../assets/logo-header.png';
import { Link } from 'react-router-dom';
import Menus from './Menus';

function Header() {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#fff', boxShadow: 'none', padding: '15px' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              '& img': {
                width: '130px',
              },
              display: 'flex',
              alignItems: 'center',
              flex: '0 0 15%',
            }}
          >
            <Box>
              <img src={Logo} />
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 0 70%',

              ul: {
                display: 'flex',
                margin: 0,
                padding: 0,

                li: {
                  listStyleType: 'none',
                  a: {
                    fontSize: '16px',
                    padding: '1.2rem .5rem',
                    color: '#0a0a0a',
                    textDecoration: 'none',
                  },
                },
              },
            }}
          >
            <Menus />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: '0 0 20%',

              '& a': {
                textDecoration: 'none',
                color: '#0a0a0a',
                mr: 3,
              },
            }}
          >
            <Box
              sx={{
                '& button': {
                  backgroundColor: '#5FBD6F',
                  color: '#fff',
                  padding: '.5rem 1rem',

                  '&:hover': {
                    backgroundColor: '#5FBD6F',
                  },
                },
              }}
            >
              <Link to='/sign-up'>
                <Button variant='text'>Sign Up</Button>
              </Link>
            </Box>
            <Box
              sx={{
                '& button': {
                  backgroundColor: '#3D4659',
                  color: '#fff',
                  padding: '.5rem 1rem',

                  '&:hover': {
                    backgroundColor: '#3D4659',
                  },
                },
              }}
            >
              <Link to='/'>
                <Button variant='text'>Try Arthsaga Free</Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
