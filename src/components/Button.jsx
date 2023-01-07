import React from 'react';
import { ButtonWrapper } from '../styles/Button.style';
import { Button } from 'react-bootstrap';

const ButtonComponent = ({ children }) => {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  );
};

export default ButtonComponent;
