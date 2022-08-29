import styled from 'styled-components';

const ErrorBlock = styled.h4`
  color: red;
`;

const ErrorMessage = (prop) => {
  return <ErrorBlock>{prop.children}</ErrorBlock>;
};

export default ErrorMessage;
