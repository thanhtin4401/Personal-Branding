import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "./reducer/testSlice";

const cloneRootReducer = combineReducers({
  counter: countReducer,
});

const rootReducer = (state: any, action: any) => {
  return cloneRootReducer(state, action);
};

export default rootReducer;
