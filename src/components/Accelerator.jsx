import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Grid, Box, Button, FormControl, Select, MenuItem } from '@mui/material';
import Input from '../components/Input';
import { ReactComponent as DownChervon } from '../assets/sign-up/down-chervon.svg';
import 'yup-phone';
import * as yup from 'yup';
import ControlledSelect from './Select';
import { DesignationData } from '../services/data';
import { String } from './string';

const validationSchema = yup.object({
  StartUp: yup.string(String.ENTER_YOUR_START_UP).required(String.START_UP_MAX).max(50, String.START_UP_MAX),
  legal: yup.string(String.LEGAL_NAME).required(String.LEGAL_NAME_MAX).max(100, 'free form upto 100 char'),
  founderName: yup.string(String.FOUNDER_NAME).required(String.NAME_REQ),
  email: yup
    .string(String.EMAIL_UP)
    .email(String.VALID_EMAIL)
    .required(String.VALID_EMAIL_REQ)
    .max(50, String.VALID_EMAIL),
  phoneNumber: yup.string().phone('IN', true).required('Enter Valid Number').max(10, ''),
  aadhar: yup.string(String.AADHAR_NUM).matches(String.AADHAR_NUM_VALID, String.AADHAR_NUM_VALID_IS),
  Cin: yup.string(String.CIN_NUM).matches(String.CIN_NUM_VALID, String.CIN_NUM),
});

const Accelerator = () => {
  const [age, setAge] = React.useState('');
  const [value, setValue] = useState(10);
  const options = DesignationData;

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
                  label={'Name of the Firm'}
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
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 5,

                  '& .MuiInputBase-root': {
                    border: '1px solid #3D4659 !important',
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
                  <ControlledSelect value={value} options={options} onChange={handleChange} />
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
                  label={'CIN No.'}
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
                  label={'Your Registered Address'}
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
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 5,

                  '& .MuiInputBase-root': {
                    border: '1px solid #3D4659 !important',
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
                      <em>How you want to help Startups</em>
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
                  label={'POC Name'}
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
                  label={'POC Phone No.'}
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
                  label={'POC Email Address'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  name='email'
                  id='email'
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
                  label={'References of 2 clients / Start-ups'}
                  value={formik.values.Cin}
                  onChange={formik.handleChange}
                  error={formik.touched.Cin && Boolean(formik.errors.Cin)}
                  helperText={formik.touched.Cin && formik.errors.Cin}
                  name='Cin'
                  id='Cin'
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

export default Accelerator;
