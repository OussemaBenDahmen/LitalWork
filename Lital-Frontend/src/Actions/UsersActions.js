import Axios from "axios";
export const GET_USERS = "GET_USERS";
export const DELETE_USERS = "DELET_USERS";
export const ADD_USER = "ADD_USER";

export const getUsers = (payload) => ({
  type: GET_USERS,
  payload: payload,
});

export function getUsersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:5000/app/user/get", {
      withCredentials: true,
    })
      .then((res) => dispatch(getUsers(res.data)))
      .catch((err) => {
        if (err.response.status === 401) {
          window.location.replace("/");
        }
      });
}

export function DeleteUsersFromApi(element) {
  return (dispatch) => {
    Axios.delete(`http://localhost:5000/app/user/delete`, {
      withCredentials: true,
      data: { id: element.id },
    }).then(() => {
      window.location.reload(false);
    });
  };
}
export function addUserToApi(User) {
  return (dispatch) => {
    Axios.post("http://localhost:5000/app/user/add", User, {
      withCredentials: true,
    }).then(() => {
      window.location.reload(false);
    });
  };
}
export const Login = (payload) => {
  return {
    type: "GET_ROLE",
    payload,
  };
};
export function LogInAction(user) {
  return (dispatch) => {
    if (user.email != "") {
      Axios.post("http://localhost:5000/app/login", user, {
        withCredentials: true,
      }).then((res) => {
        dispatch(Login(res.data.role));
        if (res.data.role === "admin") {
          window.location.assign("/Admin/MainPage");
        } else if (res.data.role === "Client") {
          window.location.assign("/User/MainPage");
        }
      });
    } else {
      alert("enter ur coords");
    }
  };
}
