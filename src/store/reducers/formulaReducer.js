import { formulaTypes } from "../types";

const OPERATORS = ["+", "-", "/", "*"];

const formulaReducer = (state = "0", { type, payload }) => {
  switch (type) {
    case formulaTypes.APPEND:
      // Trim leading/trailing spaces and leading zeroes
      let text = payload.text.trim();
      text = OPERATORS.includes(text) ? ` ${text} ` : text;
      const current = state.replace(/(^\s+)|(^0+)/, "");
      const newFormula = current + text;

      // Do not allow multiple decimal points
      const invalid = newFormula
        .split(/[+\-/*]/)
        .some(i => (i.match(/\./g) || []).length > 1);

      if (invalid) return current;
      else return newFormula;

    // return current + text;
    case formulaTypes.CLEAR:
      return "0";
    case formulaTypes.COMPUTE:
      const toRemove = new Set();
      let previous = 0;

      for (let i = 1; i < state.length; i++) {
        if (!OPERATORS.includes(state[i]) || state[i] === "-") continue;

        previous = i - 1;
        while (
          previous >= 0 &&
          ((state[previous] || "").match(/\d+/) || []).length === 0
        ) {
          if (OPERATORS.includes(state[previous])) {
            toRemove.add(previous);
          }

          previous--;
        }
      }
      console.log(toRemove);
      const formula = state
        .split("")
        .filter((v, i) => !toRemove.has(i))
        .join("");

      return String(eval(formula));
    default:
      return state;
  }
};

export default formulaReducer;
