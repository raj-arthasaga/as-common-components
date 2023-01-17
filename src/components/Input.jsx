import React from 'react';
import { InputWrapper } from '../styles/Input.style';
import TextField from '@mui/material/TextField';

const Input = ({ label, onChange }) => {
  return (
    <>
      <InputWrapper>
        <TextField
          id='outlined-read-only-input'
          label={label}
          onChange={onChange}
          InputLabelProps={{ shrink: true }}
          sx={{
            '& legend': {
              display: 'none',
            },
            '& label': {
              top: '-5px',
              fontFamily: "'Poppins',sans-serif !important",
              color: '#3e495a',
              borderColor: '#000',
              borderWidth: '1.5px',
              fontWeight: '600',
            },
            '& input': {
              fontFamily: "'Poppins',sans-serif !important",
              color: '#3e495a',
            },
          }}
        />
      </InputWrapper>
    </>
  );
};

export default Input;
