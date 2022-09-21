import React from 'react';
import styled from 'styled-components';

const ProfileFormBlock = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledLabel = styled.label`
  color: blue;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1.5px solid #b2b2b2;
  outline: none;
  width: 100%;
  padding: 1rem;
  margin: 1.5rem 0;

  :disabled {
    color: #bbbbbb;
  }
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

const ProfileForm = ({ profileInfo, onChange }) => {
  return (
    <ProfileFormBlock>
      <StyledForm id="profile" autoComplete="off">
        <StyledLabel>이메일</StyledLabel>
        <StyledInput name="email" value={profileInfo.email} disabled />
        <StyledLabel>이름</StyledLabel>
        <StyledInput
          name="memberName"
          value={profileInfo.memberName}
          onChange={onChange}
        />
        <StyledLabel>주소</StyledLabel>
        <StyledInput
          name="address"
          value={profileInfo.address}
          onChange={onChange}
        />
      </StyledForm>
    </ProfileFormBlock>
  );
};

export default ProfileForm;
