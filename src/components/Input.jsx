import React from 'react';
import { InputWrapper } from '../styles/Input.style';
import TextField from '@mui/material/TextField';
import { Box, OutlinedInput } from '@mui/material';

const Input = ({ label, onChange, value, error, helperText, name, id, TextFieldInp, OutLineInput }) => {
  return (
    <>
      <Box
        sx={{
          '& fieldset': {
            border: '1px solid #3D4659!important',
            borderRadius: '10px',
            '&:hover': {
              borderColor: 'transparent !important',
            },
          },
          '& .MuiSelect-select': {
            color: '#3e495a',
          },
        }}
      >
        <TextField
          // label={label}
          placeholder={label}
          value={value}
          onChange={onChange}
          error={error}
          InputLabelProps={{ shrink: true }}
          helperText={helperText}
          name={name}
          id={id}
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
      </Box>
    </>
  );
};

export default Input;
