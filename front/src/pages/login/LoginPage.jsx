import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import LoginButtons from '../../components/login/LoginButtons';
import AuthForm from '../../components/login/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, login } from '../../modules/auth';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/common/ErrorMessage';

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95%;
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setLoginInfo({
        ...loginInfo,
        [name]: value,
      });
    },
    [loginInfo]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(loginInfo));
    },
    [dispatch, loginInfo]
  );

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (loginState.auth) navigate('/');
  }, [navigate, loginState.auth]);

  return (
    <LoginBlock>
      <LoginBox>
        <AuthForm type="login" form={loginInfo} onChange={onChange} />
        {loginState.error.error ? (
          <ErrorMessage>{loginState.error.error}</ErrorMessage>
        ) : (
          <div />
        )}
        <LoginButtons onSubmit={onSubmit} />
      </LoginBox>
    </LoginBlock>
  );
};

export default LoginPage;
