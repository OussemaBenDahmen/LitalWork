import React, { Component } from "react";
import { connect } from "react-redux";
import ModifyModal from "./ModifyModal";
import { Button } from "reactstrap";
import trash from "../../Images/trash-icon.png";
import { DeleteProductFromApi } from "../../Actions/ProductActions/DeleteProduct";

class ArticleItem extends Component {
  render() {
    return (
      <div className="ArticleItem">
        <img
          className="ArticlePhoto"
          src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"
          alt=""
        />
        <p>{this.props.el.name}</p>
        <p>{this.props.el.ref}</p>
        <p>{this.props.el.type}</p>
        <p>{this.props.el.collection}</p>
        <p>{this.props.el.marque}</p>
        <p>{this.props.el.prod}</p>
        <p>{this.props.el.mesure}</p>
        <p>{this.props.el.color}</p>
        <p>{this.props.el.localisation}</p>
        <p>{this.props.el.carton}</p>
        <p>{this.props.el.quantity}</p>
        <div>
          <ModifyModal Product={this.props.el} />
          <Button
            className="DeleteProductBtn"
            onClick={() => this.props.DeleteProduct(this.props.el)}
          >
            <img src={trash} alt="" width="20px" />
          </Button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    DeleteProduct: (product) => {
      dispatch(DeleteProductFromApi(product));
    },
  };
}

export default connect(null, mapDispatchToProps)(ArticleItem);
