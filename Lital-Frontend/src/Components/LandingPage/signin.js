import React, { Component } from "react";
import logo from "../../Images/logo_lital_0.png";
import "./signin.css";
import { connect } from "react-redux";
import { LogInAction } from "../../Actions/UsersActions";

class Signin extends Component {
  state = {
    tata: true,
    email: "",
    password: "",
  };

  render() {
    return (
      <center>
        <div className="back">
          <div className="blocsigne">
            <form className="formulaire">
              <img src={logo} className="App-logo" alt="logo" />

              <div className="inputlabel">
                <div>
                  <input
                    className="inputsign"
                    type="text"
                    placeholder="email@gmail.com"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
              </div>

              <div className="inputlabel">
                <div>
                  <input
                    className="inputsign"
                    type="password"
                    placeholder="mot de passe"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  className="submitsign"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.LogIn({
                      email: this.state.email,
                      password: this.state.password,
                    });
                  }}
                >
                  Connectez
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    );
  }
}
const mapStateToProps = (state) => ({
  Users: state.Users,
  Role: state.role,
});
function mapDispatchToProps(dispatch) {
  return {
    LogIn: (user) => dispatch(LogInAction(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
