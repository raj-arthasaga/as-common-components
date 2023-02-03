import React, { useState } from 'react';
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import SignUpLogo from '../assets/sign-up/logo.png';
import SignUpVector from '../assets/sign-up/sign-up.png';
import SignUpForm from '../components/SignUp';
import { ReactComponent as DownChervon } from '../assets/sign-up/down-chervon.svg';

const SignUp = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ height: '100%' }}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid item xs={4} sx={{ bgcolor: '#fff' }}>
            <Container sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  flex: '0 0 30%',
                }}
              >
                <Box
                  sx={{
                    '& img': {
                      width: 100,
                    },
                    pt: '25px',
                    pl: '30px',
                  }}
                >
                  <img src={SignUpLogo} />
                </Box>
              </Box>
              <Box
                sx={{
                  flex: '0 0 30%',
                  textAlign: 'center',
                }}
              >
                <img src={SignUpVector} />
              </Box>
            </Container>
          </Grid>
          <Grid item xs={8} sx={{ bgcolor: '#E4EAF9' }}>
            <Container>
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
              <Box
                sx={{
                  mt: 10,
                  display: 'flex',
                  justifyContent: 'center',

                  '& .MuiInputBase-root': {
                    border: '1px solid #3D4659 !important',
                    borderRadius: '10px',
                  },
                  '& .MuiSelect-select': {
                    fontFamily: "'Poppins',sans-serif !important",
                    fontWeight: 400,
                    fontSize: 21,
                    display: 'flex',
                    alignItems: 'center',
                  },
                  '& .MuiInputBase-formControl': {
                    '&:hover': {
                      border: 0,
                    },
                    '& .MuiOutlinedInput-input': {
                      paddingRight: 0,
                      mr: '25px',
                      pl: '25px',
                      pr: 0,
                    },
                    '& svg': {
                      mr: '43px',
                    },
                  },
                  '& fieldset': {
                    borderColor: 'transparent !important',
                    borderWidth: '0 !important',
                  },
                }}
              >
                <FormControl fullWidth sx={{ maxWidth: 549 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    IconComponent={() => <DownChervon />}
                  >
                    <MenuItem value=''>
                      <em>Please select</em>
                    </MenuItem>
                    <MenuItem
                      value={10}
                      sx={{
                        fontFamily: "'Poppins',sans-serif !important",
                      }}
                    >
                      Start Up
                    </MenuItem>
                    <MenuItem
                      value={20}
                      sx={{
                        fontFamily: "'Poppins',sans-serif !important",
                      }}
                    >
                      Twenty
                    </MenuItem>
                    <MenuItem
                      value={30}
                      sx={{
                        fontFamily: "'Poppins',sans-serif !important",
                      }}
                    >
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <SignUpForm />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;
