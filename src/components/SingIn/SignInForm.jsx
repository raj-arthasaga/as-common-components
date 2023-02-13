import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { String } from '../string';
import { Theme } from '../../styles/Theme';
import Input from '../Input';
import Logo from '../../assets/sign-up/logo.png';

const validationSchema = yup.object({
  email: yup.string(String.EMAIL_UP).email(String.VALID_EMAIL).required(String.VALID_EMAIL_REQ),
  Password: yup.string(String.PASSWORD).min(8, String.PASSWORD_LEN).required(String.PASSWORD_REQ),
});

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      Password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        p: '40px 40px 24px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
        borderRadius: '5px',
        [Theme.breakpoints.down('md')]: {
          height: '100%',
          width: '100%',
        },
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <img src={Logo} />
      </Box>
      <Box>
        <Typography
          variant='h6'
          sx={{
            fontFamily: "'Poppins',sans-serif !important",
            fontWeight: 'bold',
            textAlign: 'center',
            mt: '10px',
            mb: '16px',
          }}
        >
          Welcome
        </Typography>
      </Box>
      <Box>
        <Typography variant='p'>Please sign-in to continue to Percent Investor</Typography>
      </Box>
      <Box>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mb: '20px', mt: '20px' }}>
              <Input
                fullWidth
                id='email'
                name='email'
                label='Email address'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box sx={{ mb: '20px', mt: '20px' }}>
              <Input
                fullWidth
                id='Password'
                name='Password'
                label='Password'
                value={formik.values.Password}
                onChange={formik.handleChange}
                error={formik.touched.Password && Boolean(formik.errors.Password)}
                helperText={formik.touched.Password && formik.errors.Password}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box
              sx={{
                mt: 2,
                a: {
                  color: '#007bad',
                  textDecoration: 'none',
                },
              }}
            >
              <Link to='/sign-in'>Forgot password?</Link>
            </Box>
            <Box>
              <Button
                color='primary'
                variant='contained'
                fullWidth
                type='submit'
                sx={{
                  mt: 3,
                  bgcolor: '#635dff',
                  p: '10px 16px',
                  fontFamily: "'Poppins',sans-serif !important",
                }}
              >
                Continue
              </Button>
            </Box>
            <Box
              sx={{
                '&:before': {
                  content: '""',
                  borderBottom: '1px solid #c2c8d0',
                  flex: '1 0 auto',
                  height: '0.5em',
                  margin: '0',
                },
                '&:after': {
                  content: '""',
                  borderBottom: '1px solid #c2c8d0',
                  flex: '1 0 auto',
                  height: '0.5em',
                  margin: '0',
                },
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                textTransform: 'uppercase',
                border: 'none',
                fontSize: '12px',
                fontWeight: '500',
                margin: '0',
                padding: '24px 0 0 0',
                alignItems: 'center',
                '& span': {
                  bgcolor: '#fff',
                  p: '0 10px',
                  mt: '5px',
                },
              }}
            >
              <span>Or</span>
            </Box>
            <Box>
              <Button
                color='primary'
                variant='contained'
                fullWidth
                sx={{
                  mt: 3,
                  bgcolor: '#fff',
                  p: '10px 16px',
                  fontFamily: "'Poppins',sans-serif !important",
                  color: '#2d333a',
                  boxShadow: 'none',
                  border: '1px solid #c2c8d0',

                  '&:hover': {
                    bgcolor: '#fff',
                    boxShadow: 'none',
                  },
                }}
              >
                Continue With Google
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInForm;
