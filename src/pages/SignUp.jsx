import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getSignUp } from '../store/signUp/action';
import { Alert } from '@mui/material';
import Select from 'react-select';
import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirm_password: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  first_name: yup.string('Enter your FirstName').required('FirstName is required'),
  name: yup.string('Enter your name').required('name is required'),
  last_name: yup.string('Enter your Last Name').required('Last Name is required'),
  // gender: yup.string('Enter your gender').required('gender is required'),
});
const theme = createTheme();

export default function SignUp() {
  const [isLogin, SetIsLogin] = React.useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const options = [
    { value: 'she_her', label: 'she' },
    { value: 'he_him', label: 'he' },
    { value: 'they_their', label: 'the their' },
    { value: 'not_to_say', label: 'not to say' },
  ];

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      name: '',
      email: '',
      gender: '',
      date_of_birth: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.table(values, 'Values');
      handleClick(JSON.stringify(values));
    },
  });

  const handleClick = (values) => {
    dispatch(
      getSignUp(values, (el) => {
        if (el.status_code === 200) {
          SetIsLogin(true);
        } else if (el.status_code === 400) {
          SetIsLogin(false);
        }
      })
    );
  };

  const handleOption = () => {
    setSelectedOption();
  };

  const isLoading = useSelector((state) => state.allSignIn.isLoading);

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        {isLogin && <Alert severity='success'>Login Successfully</Alert>}
        {isLogin === false && <Alert severity='error'>Invalid Account</Alert>}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id='first_name'
              name='first_name'
              label='First Name'
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={formik.touched.first_name && Boolean(formik.errors.first_name)}
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <TextField
              fullWidth
              id='last_name'
              name='last_name'
              label='Last Name'
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={formik.touched.last_name && Boolean(formik.errors.last_name)}
              helperText={formik.touched.last_name && formik.errors.last_name}
              sx={{ marginTop: 3 }}
            />
            <TextField
              fullWidth
              id='name'
              name='name'
              label='Full Name'
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{ marginTop: 3 }}
            />
            <TextField
              fullWidth
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ marginTop: 3 }}
            />
            <TextField
              fullWidth
              id='password'
              name='password'
              label='Password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ marginTop: 3 }}
            />
            <TextField
              fullWidth
              id='confirm_password'
              name='confirm_password'
              label='confirm password'
              type='password'
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
              helperText={formik.touched.confirm_password && formik.errors.confirm_password}
              sx={{ marginTop: 3 }}
            />

            <div style={{ marginTop: 20 }}>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder='Select Gender'
                name='gender'
                id='gender'
              />
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label='Date desktop'
                  inputFormat='MM/dd/yyyy'
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ width: '100%', marginTop: 3 }}
                      name='date_of_birth'
                      id='date_of_birth'
                      value={formik.values.date_of_birth}
                      error={formik.touched.date_of_birth && Boolean(formik.errors.date_of_birth)}
                      helperText={formik.touched.date_of_birth && formik.errors.date_of_birth}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>

            <Button
              color='primary'
              variant='contained'
              fullWidth
              type='submit'
              sx={{ marginTop: 3, padding: '10px 13px' }}
            >
              <span className='mr-2'>Submit</span>
              {isLoading === true && <CircularProgress size={20} style={{ color: 'white' }} />}
            </Button>
          </form>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
