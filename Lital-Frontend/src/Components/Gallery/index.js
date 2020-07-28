import React, { Component } from "react";
import { connect } from "react-redux";
import { GetProductsFromApi } from "../../Actions/ProductActions/GetProduct";
import "./GalleryStyle.css";
import EyeIcon from "../../Images/eyeIcon.png";
import { Link } from "react-router-dom";

class Gallery extends Component {
  componentDidMount() {
    this.props.GetProducts();
    this.setState({ page: 0 });
  }
  state = {
    filter: "",
  };
  SetPage = (e) => {
    this.setState({ page: Number(e) });
  };

  render() {
    return (
      <div>
        <div className="SearchBarAndBtn" style={{ margin: "auto" }}>
          <input
            className="SearchInput"
            type="text"
            name="search"
            placeholder="Recherche.."
            onChange={(e) => {
              this.setState({ filter: e.target.value });
            }}
          />
        </div>{" "}
        <div className="Gallery">
          {this.props.Products.filter((el) => {
            if (this.state.filter !== "") {
              return el.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase());
            } else {
              return el;
            }
          }).map((el) => (
            <div
              key={el.id}
              className="productGalleryCard"
              style={{
                animation: `appear 1s`,
                animationDelay: `${(el.id + 0.8) % 10}ms`,
              }}
            >
              <div className="PicAndName">
                <img
                  className="ProductPic"
                  src={`http://localhost:5000/${el.Image}`}
                  alt=""
                />{" "}
                <h5>{el.name}</h5>
              </div>
              <div className="CardInfo">
                <h6>{el.type}</h6>
                <Link to={`./Gallery/ProductID=${el.id}`}>
                  <button className="DetailBtn">
                    <img className="EyeIcon" src={EyeIcon} alt="" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Products: state.Products,
});
function mapDispatchToProps(dispatch) {
  return {
    GetProducts: () => {
      dispatch(GetProductsFromApi());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
