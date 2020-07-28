import React, { Component } from "react";
import NavBarUser from "../Components/Reusable/NavbarUser";
import Footer from "../Components/Reusable/Footer";
import { Route, Switch } from "react-router-dom";
import Acceuil from "../Components/MainPage/index";
import Gallery from "../Components/Gallery";
import ProductDetails from "../Components/ProductDetail/ProductDetail";
import { connect } from "react-redux";
class UserLayout extends Component {
  render() {
    return (
      <div>
        <NavBarUser />
        <Switch>
          {this.props.Products.map((el) => (
            <Route path={`/User/Gallery/ProductID=${el.id}`} key={el.id}>
              <ProductDetails Product={el} />
            </Route>
          ))}
          <Route path="/User/Gallery" component={Gallery} />
          <Route path="/User/MainPage" component={Acceuil} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Products: state.Products,
});
export default connect(mapStateToProps, null)(UserLayout);
