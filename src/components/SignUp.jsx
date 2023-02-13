import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Grid, Box, Button, FormControl, InputAdornment } from '@mui/material';
import Input from '../components/Input';
import 'yup-phone';
import * as yup from 'yup';
import { String } from './string';
import { DesignationData } from '../services/data';
import ControlledSelect from './Select';
import ButtonMain from './Button';

const validationSchema = yup.object({
  StartUp: yup.string(String.ENTER_YOUR_START_UP).required(String.START_UP_MAX).max(50, String.MAX_50),
  legal: yup.string(String.LEGAL_NAME).required(String.LEGAL_NAME_MAX).max(100, String.MAX_100),
  founderName: yup.string(String.FOUNDER_NAME).required(String.NAME_REQ),
  email: yup
    .string(String.EMAIL_UP)
    .email(String.VALID_EMAIL)
    .required(String.VALID_EMAIL)
    .max(50, String.VALID_EMAIL),
  phoneNumber: yup
    .string('Please enter a valid phone number')
    .phone('IN', 'Please enter a valid phone number')
    .required('A phone number is required')
    .max(10, ''),
  aadhar: yup.string(String.AADHAR_NUM).matches(String.AADHAR_NUM_VALID, String.AADHAR_NUM_VALID_IS),
  Cin: yup.string(String.CIN_NUM).matches(String.CIN_NUM_VALID, 'CIN Number is not valid'),
});

const SignUp = () => {
  const [value, setValue] = useState(10);
  const options = DesignationData;
  const handleChange = (value) => {
    console.log(`value: ${value}`);
    setValue(value);
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
                  label={'Startup name'}
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
                  label={'Legal name'}
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
                  label={'Founder name'}
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
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',

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
                  <ControlledSelect value={value} options={options} onChange={handleChange} />
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
                  label={'E-mail'}
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
                  label={'Phone number'}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  name='phoneNumber'
                  id='phoneNumber'
                  InputProps={{
                    startAdornment: <InputAdornment position='start'>+91</InputAdornment>,
                    maxLength: 10,
                  }}
                  type='text'
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
                  label={'Adhar number'}
                  value={formik.values.aadhar}
                  onChange={formik.handleChange}
                  error={formik.touched.aadhar && Boolean(formik.errors.aadhar)}
                  helperText={formik.touched.aadhar && formik.errors.aadhar}
                  name='aadhar'
                  id='aadhar'
                  onKeyDown={function () {
                    if (value.length > 0) {
                      if (value.length % 4 === 0) {
                        value += '    ';
                      }
                    }
                  }}
                  InputProps={{
                    maxLength: 14,
                  }}
                  // type='text'
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
                  label={'CIN'}
                  value={formik.values.Cin}
                  onChange={formik.handleChange}
                  error={formik.touched.Cin && Boolean(formik.errors.Cin)}
                  helperText={formik.touched.Cin && formik.errors.Cin}
                  name='Cin'
                  id='Cin'
                  InputProps={{
                    maxLength: 21,
                  }}
                  // type='text'
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
            }}
          >
            {/* <Button variant='text' type='submit'>
              Sign UP
            </Button> */}
            <ButtonMain
              type={'submit'}
              sx={{
                backgroundColor: '#5fbd6f',
                color: '#fff',
                padding: '.5rem 5rem',
                textTransform: 'capitalize',
                fontFamily: "'Poppins',sans-serif !important",
                fontSize: '20px',
                '&:hover': {
                  backgroundColor: '#5fbd6f',
                },
              }}
            >
              Sign UP
            </ButtonMain>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
