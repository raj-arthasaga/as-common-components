import React from 'react';
import { InputWrapper } from '../styles/Input.style';
import TextField from '@mui/material/TextField';
import { OutlinedInput } from '@mui/material';

const Input = ({ label, onChange, value, error, helperText, name, id, TextFieldInp, OutLineInput }) => {
  return (
    <>
      {OutLineInput && (
        <OutlinedInput
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
      )}
      {TextFieldInp && (
        <InputWrapper>
          <TextField
            id='outlined-read-only-input'
            label={label}
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
        </InputWrapper>
      )}
    </>
  );
};

export default Input;
