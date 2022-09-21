import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';

const LoginButtonBlocks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 8px;
`;

const ProfileButton = ({ onSubmit }) => {
  return (
    <LoginButtonBlocks>
      <ButtonRow>
        <Button width="42%" onClick={onSubmit}>
          수정
        </Button>
        <Button width="42%" to="/">
          취소
        </Button>
      </ButtonRow>
    </LoginButtonBlocks>
  );
};

export default ProfileButton;
