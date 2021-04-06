import { combineReducers } from "redux";
import formulaReducer from "./formulaReducer";

const rootReducer = combineReducers({ formula: formulaReducer });

export default rootReducer;
