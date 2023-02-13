import React from 'react';
import { Button } from '@mui/material';

const ButtonMain = ({ children, sx, type, variant }) => {
  return (
    <Button type={type} sx={sx} variant={variant}>
      {children}
    </Button>
  );
};

export default ButtonMain;
