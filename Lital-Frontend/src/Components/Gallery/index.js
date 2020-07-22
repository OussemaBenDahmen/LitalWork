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
              <img src="" alt="" />
              <p>{el.name}</p>
              <p>{el.type}</p>
              <p>{el.collection}</p>
              <p>{el.mesure}</p>
              <p>{el.color}</p>
              <h2>{el.id}</h2>

              <Link to={`/Admin/Gallery/ProductID=${el.id}`}>
                <button className="DetailBtn">
                  <img className="EyeIcon" src={EyeIcon} alt="" />
                </button>
              </Link>
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
