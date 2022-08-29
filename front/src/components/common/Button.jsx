import styled, { css } from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: 0.5px solid #025ce2;
  width: 70px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: #025ce2;
  outline: none;
  cursor: pointer;
  background: var(--button-color, #ffffff);
  text-decoration-line: none;
  text-align: center;

  &:hover {
    color: var(--button-hover-bg-color, #ffffff);
    background: var(--button-bg-color, #0d6efd);
  }

  ${(props) =>
    props.color &&
    css`
      border: 0.5px solid ${props.color};
      color: ${props.color};

      &:hover {
        color: var(--button-hover-bg-color, #ffffff);
        background: var(--button-bg-color, ${props.color});
      }
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink
      {...props}
      color={props.color ? props.color : '#025ce2'}
      width={props.width ? props.width : '70px'}
    />
  ) : (
    <StyledButton
      {...props}
      color={props.color ? props.color : '#025ce2'}
      width={props.width ? props.width : '70px'}
    />
  );
};

export default Button;
