import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../Components/Reusable/navbar";
import Acceuil from "../Components/MainPage/index";
import historique from "../Components/HistoryPage/historique";
import UsersPage from "../Components/UsersPage/UsersPage";
import Footer from "../Components/Reusable/Footer";
import Gallery from "../Components/Gallery";
import { connect } from "react-redux";
import ProductDetails from "../Components/ProductDetail/ProductDetail";

class AdminLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          {this.props.Products.map((el) => (
            <Route path={`/Admin/Gallery/ProductID=${el.id}`}>
              <ProductDetails Product={el} />
            </Route>
          ))}
          <Route path="/Admin/Gallery" component={Gallery}></Route>
          <Route path="/Admin/MainPage" component={Acceuil}></Route>
          <Route path="/Admin/History" component={historique}></Route>
          <Route path="/Admin/Users" component={UsersPage}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Products: state.Products,
});
export default connect(mapStateToProps, null)(AdminLayout);
