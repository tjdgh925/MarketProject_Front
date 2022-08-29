import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #f8f9fa;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const MenuBlock = styled.div``;

const Wrapper = styled(Responsive)`
  width: 95%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .menu {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
  padding-right: 20px;
  color: black;
`;

const SearchInput = styled.input`
  line-height: 2;
  font-size: 1.2rem;
  padding-left: 10px;
  margin: 5px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 4px;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <MenuBlock>
            <StyledLink to="/" className="logo">
              Market
            </StyledLink>
            {user ? (
              <>
                <StyledLink to="/" className="menu">
                  상품 등록
                </StyledLink>
                <StyledLink to="/" className="menu">
                  상품 관리
                </StyledLink>
                <StyledLink to="/" className="menu">
                  프로필
                </StyledLink>
                <StyledLink to="/" className="menu">
                  로그아웃
                </StyledLink>
              </>
            ) : (
              <StyledLink to="/login" className="menu">
                로그인
              </StyledLink>
            )}
          </MenuBlock>
          <div className="right">
            <Button to="/login" color="green">
              장바구니
            </Button>
            <SearchInput placeholder="상품명/키워드"></SearchInput>
            <Button to="/cart" color="green">
              검색
            </Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
