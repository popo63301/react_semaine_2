import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import messageReducer from "./messageReducer";

const store = combineReducers({
  partieCounter: counterReducer,
  partieMessage: messageReducer,
});

export default store;
