import React, { Component } from "react";
import UsersContainer from "./UsersPageMainContent";
import "./UsersPage.css";
import UsersPageHeader from "./UsersPageHeader";

export default class UsersPage extends Component {
  render() {
    return (
      <div className="UsersPage">
        <UsersPageHeader />
        <UsersContainer />
      </div>
    );
  }
}
