import { formulaTypes } from "../types";

export const appendToFormula = text => {
  return {
    type: formulaTypes.APPEND,
    payload: { text },
  };
};

export const clear = () => {
  return {
    type: formulaTypes.CLEAR,
  };
};

export const compute = () => {
  return {
    type: formulaTypes.COMPUTE,
  };
};
