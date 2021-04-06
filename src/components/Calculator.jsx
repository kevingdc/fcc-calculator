import styled from "styled-components";

import Display from "../components/Display";
import ButtonSection from "../components/ButtonSection";

const StyledDiv = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  max-width: 90%;
  min-width: 20%;
  min-height: 50%;
  max-height: 80%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;

const DisplayDiv = styled.div`
  height: 20%;
  width: 100%;
  /* border: ${({ theme }) => `0.2px solid ${theme.colors.white}`}; */
`;

const ButtonSectionDiv = styled.div`
  height: 80%;
  width: 100%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

const Calculator = () => {
  return (
    <StyledDiv>
      <DisplayDiv>
        <Display />
      </DisplayDiv>
      <ButtonSectionDiv>
        <ButtonSection />
      </ButtonSectionDiv>
    </StyledDiv>
  );
};

export default Calculator;
