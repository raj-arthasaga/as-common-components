import React from 'react';
import { Grid, Box, Container, Typography, Button } from '@mui/material';
import SingUpLogo from '../assets/sign-up.png';
import Input from '../components/Input';

const SignUp = () => {
  return (
    <>
      <Box sx={{ height: '100%' }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid item xs={4} sx={{ bgcolor: '#e8efff' }}>
            <Container>
              <Box
                sx={{
                  '& img': {
                    width: 100,
                  },
                  pt: '25px',
                  pl: '30px',
                }}
              >
                <img src={SingUpLogo} />
              </Box>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Box sx={{ pt: '25px' }}>
                <Box>
                  <Box>
                    <Typography
                      variant='h3'
                      sx={{
                        fontFamily: "'Poppins',sans-serif !important",
                        fontWeight: 'bold',
                        color: '#40465d',
                      }}
                    >
                      Welcome to Arthasaga
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins',sans-serif !important",
                        fontWeight: '400',
                        color: '#40465d',
                        mt: 2,
                      }}
                    >
                      We're excited to have you on board, Let's get started by creating your account
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 10 }}>
                  <Box
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        maxWidth: '450px',
                      },
                      mb: 5,
                    }}
                  >
                    <Input label={'I am'} />
                  </Box>
                  <Box
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        maxWidth: '450px',
                      },
                      mb: 5,
                    }}
                  >
                    <Input label={'Designation'} />
                  </Box>
                  <Box
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        maxWidth: '450px',
                      },
                      mb: 5,
                    }}
                  >
                    <Input label={'Email'} />
                  </Box>
                  <Box
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        maxWidth: '450px',
                      },
                      mb: 5,
                    }}
                  >
                    <Input label={'Phone no'} />
                  </Box>
                  <Box
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        maxWidth: '450px',
                      },
                      mb: 5,
                    }}
                  >
                    <Input label={'Aadhar no'} />
                  </Box>
                  <Box
                    sx={{
                      '& .MuiTextField-root': {
                        width: '100%',
                        maxWidth: '450px',
                      },
                      mb: 5,
                    }}
                  >
                    <Input label={'CIN No'} />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      '& button': {
                        backgroundColor: '#5fbd6f',
                        color: '#fff',
                        padding: '.5rem 5rem',
                        textTransform: 'capitalize',
                        fontFamily: "'Poppins',sans-serif !important",

                        '&:hover': {
                          backgroundColor: '#5fbd6f',
                        },
                      },
                    }}
                  >
                    <Button variant='text'>Sign UP</Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;
