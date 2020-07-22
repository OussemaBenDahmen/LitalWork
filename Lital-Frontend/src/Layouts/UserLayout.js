import React, { Component } from "react";
import NavBarUser from "../Components/Reusable/NavbarUser";
import Footer from "../Components/Reusable/Footer";
import { Route, Switch } from "react-router-dom";
import Acceuil from "../Components/MainPage/index";
import Gallery from "../Components/Gallery";

export default class UserLayout extends Component {
  render() {
    return (
      <div>
        <NavBarUser />
        <Switch>
          <Route path="/User/Gallery" component={Gallery} />
          <Route path="/User/MainPage" component={Acceuil} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
