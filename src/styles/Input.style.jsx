import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  label {
    position: absolute;
    top: -10px;
    left: 15px;
    background-color: #fff;
    padding: 0px 7px;
    font-size: 16px;
  }
`;
export const InputMain = styled.div`
  input {
    padding: 16.5px 14px;
    border: 1px solid rgba(0, 0, 0, 0.87);

    &:focus {
      box-shadow: none;
      border: 2px solid rgba(33, 150, 243);
    }
  }
`;
