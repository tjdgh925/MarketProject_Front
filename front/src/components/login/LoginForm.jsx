import styled from 'styled-components';

const LoginFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  h3 {
    margin: 0;
    color: black;
    padding-bottom: 4rem;
    text-align: center;
  }
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

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <h3>Login</h3>
      <form id="login" autoComplete="off">
        <StyledLabel for="email">Email</StyledLabel>
        <StyledInput name="email" placeholder={'이메일을 입력해주세요.'} />
        <StyledLabel for="password">Pass</StyledLabel>
        <StyledInput
          name="password"
          type="password"
          placeholder={'비밀번호를 입력해주세요.'}
        />
      </form>
    </LoginFormBlock>
  );
};

export default LoginForm;
