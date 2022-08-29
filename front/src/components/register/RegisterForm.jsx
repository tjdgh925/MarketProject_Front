import React from 'react';
import styled from 'styled-components';

const LoginFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  width: 90%;

  h3 {
    margin: 0;
    color: black;
    padding-bottom: 4rem;
    text-align: center;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1.5px solid black;
  outline: none;
  width: 90%;
  padding: 1rem;
  margin: 1.5rem 0;

  :focus {
    border-bottom: 1.5px solid blue;
  }
  :placeholder {
    margin-left: 30px;
  }
  & + & {
    margin-top: 1.5rem;
  }
`;

const StyledLabel = styled.label`
  color: blue;
  font-size: 1.2rem;
  padding-left: 0.5rem;
`;

const RegisterForm = () => {
  return (
    <LoginFormBlock>
      <h3>회원가입</h3>
      <StyledForm id="register" autoComplete="off">
        <StyledLabel for="memberName">이름</StyledLabel>
        <StyledInput name="memberName" placeholder={'이름을 입력해주세요.'} />
        <StyledLabel for="email">이메일</StyledLabel>
        <StyledInput
          name="email"
          type="email"
          placeholder={'이메일을 입력해주세요.'}
        />
        <StyledLabel for="address">주소</StyledLabel>
        <StyledInput name="address" placeholder={'주소를 입력해주세요.'} />
        <StyledLabel for="password">비밀번호</StyledLabel>
        <StyledInput
          name="password"
          type="password"
          placeholder={'비밀번호를 입력해주세요.'}
        />
        <StyledLabel for="password">비밀번호 확인</StyledLabel>
        <StyledInput
          name="passwordCheck"
          type="password"
          placeholder={'비밀번호를 재입력해주세요.'}
        />
      </StyledForm>
    </LoginFormBlock>
  );
};

export default RegisterForm;
