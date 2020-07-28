import React, { Component } from "react";
import { connect } from "react-redux";
import { GetHistoryFromApi } from "../../Actions/historyAction";
import "./historique.css";

export class historique extends Component {
  state = {
    Date: "",
    User: "",
    Action: "",
  };
  componentDidMount() {
    this.props.gethistory();
  }
  render() {
    return (
      <div className="historique">
        <center>
          <h1>Historique</h1>
          <div className="historicbody">
            <div className="HistoryFilters">
              <select
                className="HistoryFilterSelector"
                name="Action"
                onChange={(e) => {
                  this.setState({ Action: e.target.value.toLowerCase() });
                }}
              >
                <option value="">Action</option>
                {[...new Set(this.props.history.map((el) => el.action))].map(
                  (action) => (
                    <option key={action} value={action}>
                      {action}
                    </option>
                  )
                )}
              </select>
              <select
                className="HistoryFilterSelector"
                name="Date"
                onChange={(e) => {
                  this.setState({ Date: e.target.value.toLowerCase() });
                }}
              >
                <option value="">JJ/MM/AAAA</option>
                {[
                  ...new Set(
                    this.props.history.map((el) => el.Date.substring(0, 16))
                  ),
                ].map((date) => (
                  <option key={date} value={date}>
                    {date.substring(0, 16)}
                  </option>
                ))}
              </select>
              <select
                className="HistoryFilterSelector"
                name="User"
                onChange={(e) => {
                  this.setState({ User: e.target.value.toLowerCase() });
                }}
              >
                <option value="">User</option>
                {[...new Set(this.props.history.map((el) => el.User_name))].map(
                  (user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  )
                )}
              </select>
            </div>

            <table className="Users-Table">
              <thead>
                <td className="cell">Action </td>
                <td className="cell">nom d'article</td>
                <td className="cell">Date</td>
                <td className="cell">User</td>
              </thead>
              <tbody>
                {this.props.history
                  .filter((el) =>
                    el.Date.toLowerCase().includes(this.state.Date)
                  )
                  .filter((el) =>
                    el.action.toLowerCase().includes(this.state.Action)
                  )
                  .filter((el) =>
                    el.User_name.toLowerCase().includes(this.state.User)
                  )
                  .map((el, i) => (
                    <tr key={i}>
                      <td className="cell">{el.action}</td>
                      <td className="cell">{el.Product_name}</td>
                      <td className="cell">{el.Date}</td>
                      <td className="cell">{el.User_name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gethistory: () => {
      dispatch(GetHistoryFromApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(historique);
