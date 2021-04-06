import styled from "styled-components";

import Calculator from "../components/Calculator";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <div>
      <StyledDiv>
        <Calculator />
      </StyledDiv>
    </div>
  );
};

export default App;
