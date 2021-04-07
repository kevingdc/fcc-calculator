import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { appendToFormula, clear, compute } from "../store/actions";

const StyledButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.034);
  background-color: ${({ theme, type }) => {
    if (type === "primary") return theme.colors.orange;
    else if (type === "danger") return theme.colors.red;
    else if (type === "light") return theme.colors.lightGray;
    else return theme.colors.darkGray;
  }};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  font-size: 2rem;

  :hover {
    background-color: ${({ theme, type }) => {
      if (type === "primary") return theme.colors.orangeHighlighted;
      else if (type === "danger") return theme.colors.redHighlighted;
      else if (type === "light") return theme.colors.lightGrayHighlighted;
      else return theme.colors.darkGrayHighlighted;
    }};
  }
`;

class Button extends React.Component {
  handleClick = () => {
    const { symbol, desc } = this.props;

    if (desc === "clear") {
      this.props.clear();
    } else if (desc === "equals") {
      this.props.compute();
    } else {
      this.props.appendToFormula(symbol);
    }
  };

  render() {
    const { symbol, desc, style, type } = this.props;
    return (
      <StyledButton
        id={desc}
        onClick={this.handleClick}
        style={style}
        type={type}
      >
        {symbol}
      </StyledButton>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    appendToFormula: text => {
      dispatch(appendToFormula(text));
    },
    clear: () => {
      dispatch(clear());
    },
    compute: () => {
      dispatch(compute());
    },
  };
};

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(Button);
