import React, { Component } from "react";
import { connect } from "react-redux";
import { GetHistoryFromApi } from "../../Actions/historyAction";

export class historique extends Component {
  componentDidMount() {
    this.props.gethistory();
  }
  render() {
    return (
      <div className="historique">
        <center>
          <h1>Historique</h1>
          <div className="historicbody">
            <table className="Users-Table">
              <thead>
                <th className="cell">Action </th>
                <th className="cell">nom d'article</th>
                <th className="cell">Date</th>
                <th className="cell">User</th>
              </thead>
              <tbody>
                {this.props.history.map((el, i) => (
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
