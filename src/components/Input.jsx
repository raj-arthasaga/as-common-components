import React from 'react';
import { InputMain, InputWrapper } from '../styles/Input.style';

const Input = ({ label, type, placeholder }) => {
  return (
    <>
      <InputWrapper>
        <label>{label}</label>
        <InputMain>
          <input type={type} class='form-control' placeholder={placeholder} />
        </InputMain>
      </InputWrapper>
    </>
  );
};

export default Input;
