import React from 'react';
import styled from 'styled-components';
import LoginButtons from '../../components/login/LoginButtons';
import LoginForm from '../../components/login/LoginForm';

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98vh;
  align-items: center;
`;

const LoginBox = styled.div`
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

const LoginPage = () => {
  return (
    <LoginBlock>
      <LoginBox>
        <LoginForm />
        <LoginButtons />
      </LoginBox>
    </LoginBlock>
  );
};

export default LoginPage;
