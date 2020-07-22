import React, { Component } from "react";

import { connect } from "react-redux";
import "./NavbarAndFooter.css";
import Logo_Lital from "../../Images/logo_lital_0.png";
export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div>
          <img className="NavbarLogo" src={Logo_Lital} alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
