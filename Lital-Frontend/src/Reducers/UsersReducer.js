import { GET_USERS } from "../Actions/UsersActions";

function UsersReducer(state = [], action) {
  if (action.type === GET_USERS) {
    return action.payload;
  } else return state;
}
export default UsersReducer;
