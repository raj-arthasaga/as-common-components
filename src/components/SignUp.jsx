import React from 'react';
import { useFormik } from 'formik';
import { Grid, Box, Container, Typography, Button } from '@mui/material';
import Input from '../components/Input';
import 'yup-phone';

import * as yup from 'yup';

const validationSchema = yup.object({
  StartUp: yup.string('Enter your name').required('Name is required'),
  Designation: yup.string('Enter your Designation').required('Designation is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  phoneNumber: yup.string().phone('IN', true).required('Enter Valid Number'),
  aadhar: yup.string('Enter your aadhar number').required('Aadhar number is required'),
  Cin: yup.string('Enter your CIN No').required('CIN number is required'),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      StartUp: '',
      Designation: '',
      email: '',
      phoneNumber: '',
      aadhar: '',
      Cin: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box sx={{ pt: '25px' }}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ mt: 10 }}>
          <Grid container spacing={12}>
            <Grid item xs={6}>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                    maxWidth: '450px',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'StartUp Name'}
                  value={formik.values.StartUp}
                  onChange={formik.handleChange}
                  error={formik.touched.StartUp && Boolean(formik.errors.StartUp)}
                  helperText={formik.touched.StartUp && formik.errors.StartUp}
                  name='StartUp '
                  id='StartUp '
                  OutLineInput
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                    maxWidth: '450px',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Legal Name'}
                  value={formik.values.Designation}
                  onChange={formik.handleChange}
                  error={formik.touched.Designation && Boolean(formik.errors.Designation)}
                  helperText={formik.touched.Designation && formik.errors.Designation}
                  name='Designation'
                  id='Designation'
                  OutLineInput
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                    maxWidth: '450px',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Founder Name'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  id='email'
                  name='email'
                  OutLineInput
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                    maxWidth: '450px',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Phone no'}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  name='phoneNumber'
                  id='phoneNumber'
                  OutLineInput
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                    maxWidth: '450px',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Aadhar no'}
                  value={formik.values.aadhar}
                  onChange={formik.handleChange}
                  error={formik.touched.aadhar && Boolean(formik.errors.aadhar)}
                  helperText={formik.touched.aadhar && formik.errors.aadhar}
                  name='aadhar'
                  id='aadhar'
                  OutLineInput
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                    maxWidth: '450px',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'CIN No'}
                  value={formik.values.Cin}
                  onChange={formik.handleChange}
                  error={formik.touched.Cin && Boolean(formik.errors.Cin)}
                  helperText={formik.touched.Cin && formik.errors.Cin}
                  name='Cin'
                  id='Cin'
                  OutLineInput
                />
              </Box>
            </Grid>
          </Grid>
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
            <Button variant='text' type='submit'>
              Sign UP
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
