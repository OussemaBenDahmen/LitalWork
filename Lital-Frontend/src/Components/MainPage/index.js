import React, { Component } from "react";
import { connect } from "react-redux";
import "./MainPage.css";
import ArticlesSection from "./ArticlesSection";
import { GetProductsFromApi } from "../../Actions/ProductActions/GetProduct";
class Accueil extends Component {
  componentDidMount() {
    this.props.GetProductsFromApi();
  }
  render() {
    return (
      <div className="MainPage">
        <ArticlesSection Products={this.props.Products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    GetProductsFromApi: () => {
      dispatch(GetProductsFromApi());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
