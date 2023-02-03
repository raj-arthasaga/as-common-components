import * as React from 'react';
import { Box, Toolbar, Container, AppBar, Button, Typography } from '@mui/material';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#fff', boxShadow: 'none', padding: '15px' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              '& img': {
                width: 55,
              },
              display: 'flex',
              alignItems: 'center',
              flex: '0 0 15%',
            }}
          >
            <Box>
              <img src={Logo} />
            </Box>
            <Box
              sx={{
                color: '#000',
                ml: 1,
                '& p': {
                  fontSize: 20,
                },
              }}
            >
              <Typography>arthasaga</Typography>
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
            <ul>
              <li>
                <Link href='#'>Invest</Link>
              </li>
              <li>
                <Link href='#'>Raise Capital</Link>
              </li>
              <li>
                <Link href='#'>Underwriter</Link>
              </li>
              <li>
                <Link href='#'>Company</Link>
              </li>
              <li>
                <Link href='#'>Resources</Link>
              </li>
            </ul>
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
            <Box>
              <Link to='/'>Sign In</Link>
            </Box>
            <Box
              sx={{
                '& button': {
                  backgroundColor: '#52a9ff',
                  color: '#fff',
                  padding: '.5rem 1rem',

                  '&:hover': {
                    backgroundColor: '#52a9ff',
                  },
                },
              }}
            >
              <Link to='/sign-up'>
                <Button variant='text'>Sign Up</Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
