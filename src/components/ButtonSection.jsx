import styled from "styled-components";

import Button from "./Button";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(10px, 1fr));
  grid-template-rows: repeat(5, minmax(10px, 1fr));
`;

const ButtonSection = () => {
  return (
    <StyledDiv>
      <Button
        symbol="C"
        desc="clear"
        style={{ gridColumn: "1 / span 2" }}
        type="danger"
      />
      <Button symbol="/" desc="divide" type="light" />
      <Button symbol="*" desc="multiply" type="light" />
      <Button symbol="7" desc="seven" />
      <Button symbol="8" desc="eight" />
      <Button symbol="9" desc="nine" />
      <Button symbol="-" desc="subtract" type="light" />
      <Button symbol="4" desc="four" />
      <Button symbol="5" desc="five" />
      <Button symbol="6" desc="six" />
      <Button symbol="+" desc="add" type="light" />
      <Button symbol="1" desc="one" />
      <Button symbol="2" desc="two" />
      <Button symbol="3" desc="three" />
      <Button
        symbol="="
        desc="equals"
        style={{ gridColumn: 4, gridRow: "4 / span 2" }}
        type="primary"
      />
      <Button symbol="0" desc="zero" style={{ gridColumn: "1 / span 2" }} />
      <Button symbol="." desc="decimal" type="light" />
    </StyledDiv>
  );
};

export default ButtonSection;
