import React, { Component } from "react";
import Logo_Lital from "../../Images/logo_lital_0.png";
import { Link } from "react-router-dom";
import "./NavbarAndFooter.css";
import Axios from "axios";
export class NavBar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div>
          <img className="NavbarLogo" src={Logo_Lital} alt="" />
        </div>

        <div className="Navlinks">
          <Link to="/Admin/Gallery">Gallery</Link>
          <Link to="/Admin/MainPage">Produit</Link>
          <Link to="/Admin/History">Historique</Link>
          <Link to="/Admin/Users">Gestion d'utilisateur</Link>
        </div>
        <div>
          <button
            className="LogOutBtn"
            onClick={() => {
              Axios.post(
                "http://localhost:5000/app/logout",
                {},
                { withCredentials: true }
              ).then(() => {
                window.location.assign("/");
              });
            }}
          >
            Se deconecter
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
