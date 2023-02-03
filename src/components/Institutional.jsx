import React from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Grid,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { ReactComponent as DownChervon } from '../assets/sign-up/down-chervon.svg';
import { useFormik } from 'formik';
import 'yup-phone';
import * as yup from 'yup';
import 'yup-phone';

import Input from './Input';

import Institutional from './Institutional';

const Individual = () => {
  const [radioDual, setRadioDual] = useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const validationSchema = yup.object({
    name: yup.string('Enter Your Name').required('Enter Your Name').max(50, 'free form upto 50 char'),
    residence: yup
      .string('Enter Your Residence')
      .required('Enter Your Residence')
      .max(50, 'free form upto 50 char'),
    dob: yup
      .date()
      .max(new Date(Date.now() - 567648000000), 'You must be at least 18 years')
      .required('Required'),
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
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      dob: '',
      email: '',
      phoneNumber: '',
      residence: '',
      aadhar: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box>
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
                  label={'Name of the Organization'}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  name='name'
                  id='name'
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
                  label={'Type of Organization'}
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                  name='dob'
                  id='dob'
                />
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 5,

                  '& .MuiInputBase-root': {
                    border: '1px solid #3D4659 !important',
                    borderRadius: '10px',
                  },
                  '& .MuiSelect-select': {
                    fontFamily: "'Poppins',sans-serif !important",
                    fontWeight: 400,
                    fontSize: 16,
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
                <FormControl fullWidth>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    IconComponent={() => <DownChervon />}
                  >
                    <MenuItem value=''>
                      <em>Nature of Organization</em>
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
                  label={'Company CIN, LLP IN,'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  name='email'
                  id='email'
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
                  label={'Name of Director / Partner'}
                  value={formik.values.residence}
                  onChange={formik.handleChange}
                  error={formik.touched.residence && Boolean(formik.errors.residence)}
                  helperText={formik.touched.residence && formik.errors.residence}
                  name='residence'
                  id='residence'
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
                  label={'Your Phone No.'}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  name='phoneNumber'
                  id='phoneNumber'
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
                  label={'Your E-mail Address'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  name='email'
                  id='email'
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

export default Individual;
