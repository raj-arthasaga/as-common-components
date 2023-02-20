import React, { useState } from 'react';
import { Grid, Box, Container, Typography, FormControl } from '@mui/material';
import SignUpLogo from '../assets/sign-up/logo.png';
import SignUpVector from '../assets/sign-up/sign-up.png';
import SignUpForm from '../components/SignUp';
import InvestorComponent from '../components/InvestorComponent';
import Consultant from '../components/Consultant';
import AngelNetwork from '../components/AngelNetwork';
import InvBank from '../components/InvBank';
import Accelerator from '../components/Accelerator';
import ControlledSelect from '../components/Select';
import { SignUpData } from '../services/data';
import { String } from '../components/string';

const SignUp = () => {
  const [value, setValue] = useState(10);
  const options = SignUpData;
  const handleChange = (value) => {
    console.log(`value: ${value}`);
    setValue(value);
  };

  return (
    <>
      <Box sx={{ height: '100%' }}>
        <Grid container sx={{ height: '100%' }}>
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
              <Box sx={{ pt: '20px' }}>
                <Box>
                  <Typography
                    variant='h3'
                    sx={{
                      fontFamily: "'Poppins',sans-serif !important",
                      fontWeight: 'bold',
                      color: '#40465d',
                    }}
                  >
                    {String.WELCOME}
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
                    {String.SIGN_UP_TXT}
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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 1 }}>
                      <Typography
                        variant='h5'
                        sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: '600' }}
                      >
                        {String.I_AM}
                      </Typography>
                    </Box>
                    <Box>
                      <ControlledSelect value={value} options={options} onChange={handleChange} />
                    </Box>
                  </Box>
                </FormControl>
              </Box>
              <Box>{value === 10 ? <SignUpForm /> : null}</Box>
              <Box>{value === 20 ? <InvestorComponent /> : null}</Box>
              <Box>{value === 30 ? <Consultant /> : null}</Box>
              <Box>{value === 40 ? <AngelNetwork /> : null}</Box>
              <Box>{value === 50 ? <InvBank /> : null}</Box>
              <Box>{value === 60 ? <Accelerator /> : null}</Box>
              <Box sx={{ mt: 6, textAlign: 'end' }}>
                <p>{String.COPY_RIGHT}</p>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;
