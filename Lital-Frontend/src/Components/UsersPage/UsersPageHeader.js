import React, { Component } from "react";
import "./UsersPageHeader.css";
import AddModal from "./AddModal";
export default class UsersPageHeader extends Component {
  render() {
    return (
      <div className="Header">
        <h3>Liste des utilisateurs</h3>
        <AddModal />
      </div>
    );
  }
}
