import { GET_PRODUCTS } from "../types";
import axios from "axios";
export const GetProductAction = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export function GetProductsFromApi() {
  return (dispatch) =>
    axios
      .get("http://localhost:5000/app/Products/get", { withCredentials: true })
      .then((res) => {
        if (!res.data) {
          window.location.assign("/");
        } else {
          dispatch(GetProductAction(res.data));
        }
      })
      .catch((err) => {
        if (err) {
          if (err.response.status === 401) {
            window.location.replace("/404");
          }
        }
      });
}
