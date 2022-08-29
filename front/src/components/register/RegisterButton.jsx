import React from 'react';
import Button from '../common/Button';

const RegisterButton = ({ onSubmit }) => {
  return (
    <Button width="70%" onClick={onSubmit}>
      회원가입
    </Button>
  );
};

export default RegisterButton;
