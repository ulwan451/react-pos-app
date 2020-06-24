import { combineReducers } from "redux";
import kategoriReducer from "./kategoriReducer";

export default combineReducers({
  kategoris: kategoriReducer
});
