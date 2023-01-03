import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
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
import { Alert } from '@mui/material';
import { getSignUp } from '../store/signUp/action';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
const theme = createTheme();

export default function SignIn() {
  const [isLogin, SetIsLogin] = React.useState(null);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
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

  const isLoading = useSelector((state) => state.allSignIn.isLoading);

  console.log(isLoading, 'isLoading');

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
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
            <Button color='primary' variant='contained' fullWidth type='submit' sx={{ marginTop: 3 }}>
              <span className='mr-2'>Submit</span>
              {isLoading === true && <CircularProgress size={20} style={{ color: 'white' }} />}
            </Button>
          </form>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Grid container>
            <Grid item xs>
              <Link to='/' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/sign-up' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
