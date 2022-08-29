import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RegisterButton from '../../components/register/RegisterButton';
import AuthForm from '../../components/login/AuthForm';
import { initialize, register } from '../../modules/auth';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/common/ErrorMessage';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerState = useSelector((state) => state.auth);
  const [registerInfo, setRegisterInfo] = useState({
    memberName: '',
    email: '',
    address: '',
    password: '',
    passwordConfirm: '',
  });

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    setRegisterInfo({
      ...registerInfo,
      [name]: value,
    });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(register(registerInfo));
    },
    [dispatch, registerInfo]
  );

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (registerState.auth) navigate('/login');
  }, [navigate, registerState.auth]);

  return (
    <RegisterBlock>
      <RegisterBox>
        <AuthForm type="register" form={registerInfo} onChange={onChange} />
        {registerState.error.error ? (
          <ErrorMessage>{registerState.error.error}</ErrorMessage>
        ) : (
          <div />
        )}
        <RegisterButton onSubmit={onSubmit} />
      </RegisterBox>
    </RegisterBlock>
  );
};

export default RegisterPage;
