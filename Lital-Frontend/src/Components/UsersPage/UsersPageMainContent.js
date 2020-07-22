import React, { Component } from "react";
import "./UsersContainer.css";
import trash from "../../Images/trash-icon.png";
import { connect } from "react-redux";
import {
  getUsersFromApi,
  DeleteUsersFromApi,
} from "../../Actions/UsersActions";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.GetUsers();
  }
  render() {
    return (
      <div className="Users-container">
        <table className="Users-Table">
          <tr>
            <th className="cell">Nom</th>
            <th className="cell">Email</th>
            <th className="cell">Mot de passe</th>
          </tr>
          {this.props.Users.map((el) => (
            <tr>
              <th className="cell">{el.name}</th>
              <th className="cell">{el.email}</th>
              <th className="cell">{el.password}</th>
              <th className="cell">
                <button
                  className="trash-btn"
                  onClick={() => {
                    this.props.DeleteUsers(el);
                  }}
                >
                  <img src={trash} width="30px" alt="" />
                </button>
              </th>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { Users: state.Users };
}

function mapDispatchToProps(dispatch) {
  return {
    GetUsers: () => dispatch(getUsersFromApi()),
    DeleteUsers: (id) => dispatch(DeleteUsersFromApi(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
