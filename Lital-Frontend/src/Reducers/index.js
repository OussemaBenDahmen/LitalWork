import { combineReducers } from "redux";
import GetProductsReducer from "./ProductReducers/GetProductsReducer";
import UsersReducer from "./UsersReducer";
import HistoryReducer from "./historyReducer";

const AllReducers = combineReducers({
  Products: GetProductsReducer,
  Users: UsersReducer,
  history: HistoryReducer,
});
export default AllReducers;
