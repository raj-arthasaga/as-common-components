import React from 'react';
import { Grid, Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { ReactComponent as ArrowBtn } from '../../assets/svg/arrow-btn.svg';
import HeroHome from '../../assets/HomeHero.png';

const HeroSection = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ height: '100%' }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={6}>
            <Box sx={{ width: '100%', maxWidth: '656px' }}>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: '64px',

                    color: '#3D4659',
                    fontFamily: "'Poppins',sans-serif !important",
                    fontWeight: 700,
                    lineHeight: '77px',
                    letterSpacing: '-0.02em',

                    '& span': {
                      fontSize: '72px',
                      background: 'linear-gradient(90.11deg, #5FBD6F 0.14%, #A4B8D8 47.62%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    },
                  }}
                >
                  Get More Done with <span>arthasaga</span>
                </Typography>
              </Box>
              <Box sx={{ mt: '40px' }}>
                <Typography
                  sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '30px',
                    fontFamily: "'Poppins',sans-serif !important",
                  }}
                >
                  <span>
                    Arthasaga unlocks exclusive private credit investments for your portfolio. Access select
                    alternative investments on the platform powering the future of private markets.
                  </span>
                </Typography>
              </Box>
              <Box sx={{ mt: '40px' }}>
                <Button
                  sx={{
                    bgcolor: '#5FBD6F',
                    padding: '10px 40px',
                    color: '#FFFFFF',
                    fontFamily: "'Poppins',sans-serif !important",
                    borderRadius: '7px',
                    '&:hover': {
                      bgcolor: '#5FBD6F',
                    },
                  }}
                >
                  Read More{' '}
                  <Box sx={{ ml: 1 }}>
                    <ArrowBtn />
                  </Box>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                '& img': {
                  width: '100%',
                },
              }}
            >
              <img src={HeroHome} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeroSection;
