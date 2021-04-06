import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: right;
  font-size: 2.5em;
  display: flex;
  justify-content: flex-end;
  overflow: scroll;
`;

const TextContainer = styled.div`
  padding: 0.2em;
`;

const Display = props => {
  return (
    <StyledDiv id="display">
      <TextContainer>{props.text}</TextContainer>
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return {
    text: state.formula,
  };
};

export default connect(mapStateToProps, null)(Display);
