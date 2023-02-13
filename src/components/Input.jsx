import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const Input = ({
  label,
  onChange,
  value,
  error,
  helperText,
  name,
  id,
  onInput,
  InputProps,
  onKeyDown,
  type,
}) => {
  return (
    <>
      <Box
        sx={{
          '& .MuiSelect-select': {
            color: '#3e495a',
          },
        }}
      >
        <TextField
          fullWidth
          label={label}
          placeholder={label}
          value={value}
          onChange={onChange}
          error={error}
          InputLabelProps={{ shrink: true }}
          helperText={helperText}
          name={name}
          id={id}
          inputProps={InputProps}
          onInput={onInput}
          InputProps={InputProps}
          onKeyDown={onKeyDown}
          sx={{
            '& input': {
              fontFamily: "'Poppins',sans-serif !important",
              color: '#3e495a',
            },
          }}
          type={type}
        />
      </Box>
    </>
  );
};

export default Input;
