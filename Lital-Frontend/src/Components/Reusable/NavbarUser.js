import React, { Component } from "react";
import Logo_Lital from "../../Images/logo_lital_0.png";
import { Link } from "react-router-dom";
import "./NavbarAndFooter.css";
export class NavBarUser extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div>
          <img className="NavbarLogo" src={Logo_Lital} alt="" />
        </div>

        <div className="Navlinks">
          <Link to="/User/Gallery">Gallery</Link>
          <Link to="/User/MainPage">Produits</Link>
        </div>
        <div>
          <Link to="/">
            <button className="LogOutBtn">Se deconecter</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBarUser;
