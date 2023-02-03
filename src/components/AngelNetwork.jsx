import React from 'react';
import { useFormik } from 'formik';
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import Input from '../components/Input';
import { ReactComponent as DownChervon } from '../assets/sign-up/down-chervon.svg';

import 'yup-phone';

import * as yup from 'yup';

const validationSchema = yup.object({
  StartUp: yup
    .string('Enter your StartUp Name')
    .required('StartUp Name is required(free form upto 50 char)')
    .max(50, 'free form upto 50 char'),
  legal: yup
    .string('Legal Name is required')
    .required('legal Name is required(free form upto 100 char)')
    .max(100, 'free form upto 100 char'),
  founderName: yup.string('Enter your Founder Name').required('Founder Name is required'),
  email: yup
    .string('Enter your email')
    .email(
      'max 50 char and should include atleast one @ and . (@ and . cannot be last char - will need some text after @ and . , cannot have more than 1 @ and .) '
    )
    .required(
      'max 50 char and should include atleast one @ and . (@ and . cannot be last char - will need some text after @ and . , cannot have more than 1 @ and .)'
    )
    .max(
      50,
      'max 50 char and should include atleast one @ and . (@ and . cannot be last char - will need some text after @ and . , cannot have more than 1 @ and .)'
    ),
  phoneNumber: yup.string().phone('IN', true).required('Enter Valid Number').max(10, ''),
  aadhar: yup
    .string('Enter your aadhar number')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'aadhar number is not valid'
    ),
  Cin: yup
    .string('Enter CIN number')
    .matches(
      /^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/,
      'CIN Number is not valid'
    ),
});

const AngelNetwork = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      StartUp: '',
      legal: '',
      email: '',
      founderName: '',
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
          <Grid container spacing={20}>
            <Grid item xs={6}>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Your Name'}
                  value={formik.values.StartUp}
                  onChange={formik.handleChange}
                  error={formik.touched.StartUp && Boolean(formik.errors.StartUp)}
                  helperText={formik.touched.StartUp && formik.errors.StartUp}
                  name='StartUp'
                  id='StartUp'
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Founder Name'}
                  value={formik.values.legal}
                  onChange={formik.handleChange}
                  error={formik.touched.legal && Boolean(formik.errors.legal)}
                  helperText={formik.touched.legal && formik.errors.legal}
                  name='legal'
                  id='legal'
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Founder Date of Birth'}
                  value={formik.values.founderName}
                  onChange={formik.handleChange}
                  error={formik.touched.founderName && Boolean(formik.errors.founderName)}
                  helperText={formik.touched.founderName && formik.errors.founderName}
                  id='founderName'
                  name='founderName'
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Founder Adhaar No.'}
                  value={formik.values.founderName}
                  onChange={formik.handleChange}
                  error={formik.touched.founderName && Boolean(formik.errors.founderName)}
                  helperText={formik.touched.founderName && formik.errors.founderName}
                  id='founderName'
                  name='founderName'
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'POC Details'}
                  value={formik.values.aadhar}
                  onChange={formik.handleChange}
                  error={formik.touched.aadhar && Boolean(formik.errors.aadhar)}
                  helperText={formik.touched.aadhar && formik.errors.aadhar}
                  name='aadhar'
                  id='aadhar'
                />
              </Box>
              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Name of Relevant Person'}
                  value={formik.values.Cin}
                  onChange={formik.handleChange}
                  error={formik.touched.Cin && Boolean(formik.errors.Cin)}
                  helperText={formik.touched.Cin && formik.errors.Cin}
                  name='Cin'
                  id='Cin'
                />
              </Box>

              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'Your Email Address'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  name='email'
                  id='E-mail'
                />
              </Box>

              <Box
                sx={{
                  '& .MuiTextField-root': {
                    width: '100%',
                  },
                  mb: 5,
                  '& .MuiInputBase-root': {
                    width: '100%',
                  },
                }}
              >
                <Input
                  label={'POC Address'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  name='email'
                  id='E-mail'
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box
            sx={{
              textAlign: 'center',
              mt: '60px',

              '& button': {
                backgroundColor: '#5fbd6f',
                color: '#fff',
                padding: '.5rem 5rem',
                textTransform: 'capitalize',
                fontFamily: "'Poppins',sans-serif !important",
                fontSize: '20px',
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

export default AngelNetwork;
