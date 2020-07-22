import { GET_PRODUCTS } from "../../Actions/types";

const GetProductsReducer = (state = [], action) => {
  if (action.type === GET_PRODUCTS) {
    return action.payload;
  }
  return state;
};
export default GetProductsReducer;
