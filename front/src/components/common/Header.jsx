import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';
import { getEmail } from '../../lib/api/auth';

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
    &:hover {
      opacity: 0.6;
    }
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

const StyledButton = styled.button`
  text-decoration-line: none;
  padding-right: 20px;
  color: black;
  background: none;
  border: none;
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

const Header = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    const promise = getEmail();
    promise.then((response) => {
      console.log(response.data);
      setEmail(response.data);
    });
  }, []);

  const logout = useCallback(
    (e) => {
      e.preventDefault();
      localStorage.clear();
      navigate('/');
    },
    [navigate]
  );

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <MenuBlock>
            <StyledLink to="/" className="logo">
              Market
            </StyledLink>
            {email ? (
              <>
                <StyledLink to="/admin/item" className="menu">
                  상품 등록
                </StyledLink>
                <StyledLink to="/admim/itemhist" className="menu">
                  상품 관리
                </StyledLink>
                <StyledLink to="/profile" className="menu">
                  {email}
                </StyledLink>
                <StyledButton onClick={logout} className="menu">
                  로그아웃
                </StyledButton>
              </>
            ) : (
              <StyledLink to="/login" className="menu">
                로그인
              </StyledLink>
            )}
          </MenuBlock>
          <div className="right">
            <Button to="/cart" color="green">
              장바구니
            </Button>
            <SearchInput placeholder="상품명/키워드"></SearchInput>
            <Button to="/search" color="green">
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
