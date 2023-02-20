import React from 'react';
import { Button } from '@mui/material';

const ButtonMain = ({ children, sx, type, variant, disableRipple }) => {
  return (
    <Button type={type} sx={sx} variant={variant} disableRipple={disableRipple}>
      {children}
    </Button>
  );
};

export default ButtonMain;
