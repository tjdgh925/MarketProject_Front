import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import KakaoImg from '../../img/kakao.png';
import GoogleImg from '../../img/google.png';
import { Link } from 'react-router-dom';

const LoginButtonBlocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 8px;
`;

const ImageButton = styled(Link)`
  padding: none;
  width: 48%;

  border: none;
  background: none;
  & :hover {
    -webkit-filter: brightness(90%);
  }
`;

const Image = styled.img`
  height: 60px;
  width: 260px;
  object-fit: fill;
`;

const LoginButtons = ({ onSubmit }) => {
  return (
    <LoginButtonBlocks>
      <ButtonRow>
        <Button width="42%" onClick={onSubmit}>
          로그인
        </Button>
        <Button width="42%" to="/register">
          회원가입
        </Button>
      </ButtonRow>
      <ButtonRow>
        <ImageButton to="/kakao">
          <Image src={KakaoImg} />
        </ImageButton>
        <ImageButton to="/kakao">
          <Image src={GoogleImg} />
        </ImageButton>
      </ButtonRow>
    </LoginButtonBlocks>
  );
};

export default LoginButtons;
