import { formulaTypes } from "../types";

const formulaReducer = (state = "0", { type, payload }) => {
  console.log(state);
  switch (type) {
    case formulaTypes.APPEND:
      const text = payload.text.trim();
      // Trim leading/trailing spaces and leading zeroes
      return (
        state.replace(/(^\s+)|(^0+)/, "") +
        (["+", "-", "/", "*"].includes(text) ? ` ${text} ` : text)
      );
    case formulaTypes.CLEAR:
      return "0";
    case formulaTypes.COMPUTE:
      return String(eval(state));
    default:
      return state;
  }
};

export default formulaReducer;
