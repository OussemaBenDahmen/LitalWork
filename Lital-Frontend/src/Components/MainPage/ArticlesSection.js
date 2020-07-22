import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleItem from "./ArticleItem";
import AddModal from "./AddModal";

class ArticlesSection extends Component {
  state = {
    inputValue: "",
    typeValue: "",
    collectionValue: "",
    MarkValue: "",
    PrototypeValue: "",
    MesurementsValue: "",
    ColorValue: "",
    LocalisationValue: "",
    CartonValue: "",
    QuantityValue: "",
    sortValue: 0,
    colorField: this.props.Products,
    page: 0,
  };
  // filterFields = () => {
  //   let color = this.props.tableau.map((el) => (el = el.COULEUR));
  //   let colorSet = new Set(color);
  //   this.setState({ colorField: [...colorSet] });
  // };
  SetPage = (e) => {
    this.setState({ page: Number(e) });
  };

  render() {
    return (
      <div className="ArticlesSection">
        <div className="SearchBar">
          <div className="SearchBarAndBtn">
            <input
              className="SearchInput"
              type="text"
              name="search"
              placeholder="Recherche.."
              onChange={(e) => {
                this.setState({ inputValue: e.target.value });
              }}
            />
            <button className="SearchBtn">Recherche</button>
          </div>
          <div>
            <AddModal />
          </div>
        </div>
        <div className="FilterSelectors">
          <select
            name="A-Z"
            id="Alphabetic"
            onChange={(e) => {
              this.setState({ sortValue: e.target.value });
            }}
          >
            <option value="">Sort by</option>
            <option value="-1">A-Z</option>
            <option value="1">Z-A</option>
          </select>
          <select
            name="Type"
            id=""
            onChange={(e) => this.setState({ typeValue: e.target.value })}
          >
            <option value="">Type</option>
            <option value="Sac a main">Sac a main</option>
            <option value="Saccoche">Saccoche</option>
          </select>
          <select
            name="Collection"
            id=""
            onChange={(e) => this.setState({ collectionValue: e.target.value })}
          >
            <option value="">Collection</option>
            <option value="hiver">hiver</option>
            <option value="ete">ete</option>
          </select>
          <select
            name="Marque"
            id=""
            onChange={(e) => {
              this.setState({ MarkValue: e.target.value });
            }}
          >
            <option value="">Marque</option>
            <option value="Gucci">Gucci</option>
            <option value="Fripe">Fripe</option>
            <option value="Adidas">Adidas</option>
          </select>
          <select
            name="Prototype"
            id=""
            onChange={(e) => {
              this.setState({ PrototypeValue: e.target.value });
            }}
          >
            <option value="">Statue</option>
            <option value="Prototype">Prototype</option>
            <option value="Production">Production</option>
          </select>
          <select
            name="Mesure"
            id=""
            onChange={(e) => {
              this.setState({ MesurementsValue: e.target.value });
            }}
          >
            <option value="">Mesure</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <select
            name="Couleur"
            id=""
            onChange={(e) => this.setState({ ColorValue: e.target.value })}
          >
            <option value="">Couleur</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
          </select>
          <select
            name="Localisation"
            id=""
            onChange={(e) =>
              this.setState({ LocalisationValue: e.target.value })
            }
          >
            <option value="">Localisation</option>
            <option value="Depot">Depot</option>
          </select>
          <select
            name="Carton"
            id=""
            onChange={(e) => this.setState({ CartonValue: e.target.value })}
          >
            <option value="">Carton</option>
            <option value="Carton1">Carton1</option>
          </select>
          <select
            name="Quantite"
            id=""
            onChange={(e) => {
              this.setState({ QuantityValue: e.target.value });
              console.log(e.target.value);
            }}
          >
            <option value="">Quantite</option>
            <option value="10">0-10</option>
            <option value="20">10-20</option>
            <option value="40">20-40</option>
            <option value="50">40-50</option>
            <option value="51">50+</option>
          </select>
        </div>
        <div className="ArticlesTable">
          <div className="TableHead">
            <p style={{ marginRight: "50px", marginLeft: "20px" }}>Photo</p>
            <p>Nom</p>
            <p>Reference</p>
            <p>Type</p>
            <p>Collection</p>
            <p>Marque</p>
            <p>Prototype/Production</p>
            <p>Mesure</p>
            <p>Couleur</p>
            <p>Localisation</p>
            <p>Carton</p>
            <p>Quantite</p>
          </div>
          <div className="TableBody">
            {this.props.tableau
              .filter((el) => {
                if (this.state.inputValue !== "") {
                  return el.name
                    .toLocaleLowerCase()
                    .includes(this.state.inputValue.toLocaleLowerCase());
                } else {
                  return el;
                }
              })
              .filter((el) => {
                if (this.state.typeValue !== "") {
                  return (
                    el.type.toLowerCase() === this.state.typeValue.toLowerCase()
                  );
                } else {
                  return el;
                }
              })
              .filter((el) => {
                if (this.state.collectionValue !== "") {
                  return (
                    el.collection.toLowerCase() ===
                    this.state.collectionValue.toLowerCase()
                  );
                } else return el;
              })
              .filter((el) => {
                if (this.state.MarkValue !== "") {
                  return (
                    el.marque.toLowerCase() ===
                    this.state.MarkValue.toLowerCase()
                  );
                } else return el;
              })
              .filter((el) => {
                if (this.state.PrototypeValue !== "") {
                  return (
                    el.prod.toLowerCase() ===
                    this.state.PrototypeValue.toLowerCase()
                  );
                } else return el;
              })
              .filter((el) => {
                if (this.state.MesurementsValue !== "") {
                  return (
                    el.mesure.toLowerCase() ===
                    this.state.MesurementsValue.toLowerCase()
                  );
                } else return el;
              })
              .filter((el) => {
                if (this.state.ColorValue !== "") {
                  return (
                    el.color.toLowerCase() ===
                    this.state.ColorValue.toLowerCase()
                  );
                } else return el;
              })
              .filter((el) => {
                if (this.state.LocalisationValue !== "") {
                  return (
                    el.localisation.toLowerCase() ===
                    this.state.LocalisationValue.toLowerCase()
                  );
                } else return el;
              })
              .filter((el) => {
                switch (this.state.QuantityValue) {
                  case "10":
                    return el.quantity <= 10;
                  case "20":
                    return el.quantity > 10 && el.quantity <= 20;
                  case "40":
                    return el.quantity > 20 && el.quantity <= 40;
                  case "50":
                    return el.quantity > 40 && el.quantity <= 50;
                  case "51":
                    return el.quantity > 50;
                  default:
                    return el;
                }
              })
              .sort(() => this.state.sortValue)
              .map((el, i) => (
                <ArticleItem key={i} el={el} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tableau: state.Products,
  };
}

export default connect(mapStateToProps, null)(ArticlesSection);
