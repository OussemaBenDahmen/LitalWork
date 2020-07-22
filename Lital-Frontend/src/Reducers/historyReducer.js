import { GET_HISTORY } from "../Actions/types";

function HistoryReducer(state = [], action) {
  if (action.type === GET_HISTORY) {
    return action.payload;
  } else {
    return state;
  }
}
export default HistoryReducer;
