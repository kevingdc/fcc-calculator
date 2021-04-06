import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  margin: auto;
  color: ${({ theme }) => theme.colors.orange};
`;

const HelloWorld = () => {
  return <StyledHeading>Hello World</StyledHeading>;
};

export default HelloWorld;
