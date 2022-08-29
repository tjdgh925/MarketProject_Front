import styled from 'styled-components';

const AuthFormBlock = styled.div`
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

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      {type === 'login' ? (
        <StyledForm id="login" autoComplete="off">
          <StyledLabel>이메일</StyledLabel>
          <StyledInput
            name="email"
            placeholder={'이메일을 입력해주세요.'}
            onChange={onChange}
            value={form.email}
          />
          <StyledLabel>비밀번호</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
            placeholder={'비밀번호를 입력해주세요.'}
          />
        </StyledForm>
      ) : (
        <StyledForm id="register" autoComplete="off">
          <StyledLabel>이름</StyledLabel>
          <StyledInput
            name="memberName"
            onChange={onChange}
            value={form.memberName}
            placeholder={'이름을 입력해주세요.'}
          />
          <StyledLabel>이메일</StyledLabel>
          <StyledInput
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder={'이메일을 입력해주세요.'}
          />
          <StyledLabel>주소</StyledLabel>
          <StyledInput
            name="address"
            value={form.address}
            onChange={onChange}
            placeholder={'주소를 입력해주세요.'}
          />
          <StyledLabel>비밀번호</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            placeholder={'비밀번호를 입력해주세요.'}
          />
          <StyledLabel>비밀번호 확인</StyledLabel>
          <StyledInput
            name="passwordConfirm"
            type="password"
            value={form.passwordConfirm}
            onChange={onChange}
            placeholder={'비밀번호를 재입력해주세요.'}
          />
        </StyledForm>
      )}
    </AuthFormBlock>
  );
};

export default AuthForm;
