import React from 'react';
import styled from 'styled-components';
import RegisterButton from '../../components/register/RegisterButton';
import RegisterForm from '../../components/register/RegisterForm';

const RegisterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95%;
  align-items: center;
`;

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  width: 600px;
  background: white;
  border: #e3e3e3 2px solid;
  padding: 7rem;
  border-radius: 20px;
`;

const RegisterPage = () => {
  return (
    <RegisterBlock>
      <RegisterBox>
        <RegisterForm />
        <RegisterButton />
      </RegisterBox>
    </RegisterBlock>
  );
};

export default RegisterPage;
