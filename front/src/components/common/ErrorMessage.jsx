import styled from 'styled-components';

const ErrorBlock = styled.h4`
  color: red;
  text-align: center;
`;

const ErrorMessage = (prop) => {
  const ErrorArray = prop.children.split('\n');
  return (
    <div>
      {ErrorArray.map((error) => (
        <ErrorBlock>{error}</ErrorBlock>
      ))}
    </div>
  );
};

export default ErrorMessage;
