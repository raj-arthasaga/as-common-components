import React, { useEffect, useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import { ReactComponent as DownChervon } from '../assets/sign-up/down-chervon.svg';

export const ControlledSelect = ({ name, value, options, onFocus, onChange, onBlur }) => {
  const [localValue, setLocalValue] = useState(value ?? '');
  useEffect(() => setLocalValue(value ?? ''), [value]);
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setLocalValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e.target.value);
    }
  };
  return (
    <Select
      name={name}
      value={localValue}
      onFocus={handleFocus}
      onChange={handleChange}
      onBlur={handleBlur}
      IconComponent={() => <DownChervon />}
    >
      {options?.map((option) => {
        console.log(option, 'option');
        return (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: '600' }}
          >
            {option.name ?? option.value}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default ControlledSelect;
