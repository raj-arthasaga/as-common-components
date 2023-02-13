import React from 'react';
import { Box } from '@mui/system';
import SignInForm from '../components/SingIn/SignInForm';

const SignIn = () => {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          background: '#414259',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SignInForm />
      </Box>
    </>
  );
};

export default SignIn;
