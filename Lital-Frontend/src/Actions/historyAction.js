import { GET_HISTORY } from "./types";
import Axios from "axios";
const HistoryAction = (payload) => {
  return {
    type: GET_HISTORY,
    payload,
  };
};

export function GetHistoryFromApi() {
  return (dispatch) => {
    Axios.get("http://localhost:5000/app/history/get", {
      withCredentials: true,
    })
      .then((res) => dispatch(HistoryAction(res.data)))
      .catch((err) => {
        if (err.response.status === 401) {
          window.location.replace("/");
        }
      });
  };
}
