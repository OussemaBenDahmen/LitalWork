import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { AddProductToApi } from "../../Actions/ProductActions/AddProduct";

const AddModal = (props) => {
  const [modal, setModal] = useState(false);
  const [Article, setArticle] = useState({
    name: "-",
    ref: "-",
    type: "-",
    collection: "-",
    localisation: "-",
    carton: 0,
    mesure: "-",
    quantity: 0,
    prod: "-",
    color: "-",
    marque: "-",
  });
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <Button className="AddProductBtn" onClick={toggle}>
        +
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="Modal">
        <ModalHeader toggle={toggle} close={closeBtn} className="ModalHeader">
          Ajouter un produit
        </ModalHeader>
        <ModalBody className="ModalBody">
          <input
            type="text"
            placeholder="Reference"
            onChange={(e) => {
              Article.ref = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Nom"
            onChange={(e) => {
              Article.name = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Type"
            onChange={(e) => {
              Article.type = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Collection"
            onChange={(e) => {
              Article.collection = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Marque"
            onChange={(e) => {
              Article.marque = e.target.value;
              setArticle(Article);
            }}
          />
          <select
            onChange={(e) => {
              Article.mesure = e.target.value;
              setArticle(Article);
              console.log(Article);
            }}
          >
            <option value="-1">Mesure</option>
            <option value="S" name="S">
              S
            </option>
            <option value="M" name="M">
              M
            </option>
            <option value="L" name="L">
              L
            </option>
            <option value="XL" name="XL">
              Xl
            </option>
          </select>
          <input
            type="text"
            placeholder="Couleur"
            onChange={(e) => {
              Article.color = e.target.value;
              setArticle(Article);
              console.log(Article);
            }}
          />
          <input
            type="text"
            placeholder="Localisation"
            onChange={(e) => {
              Article.localisation = e.target.value;
              setArticle(Article);
              console.log(Article);
            }}
          />
          <input
            type="text"
            placeholder="Carton"
            onChange={(e) => {
              Article.carton = e.target.value;
              setArticle(Article);
              console.log(Article);
            }}
          />
          <select
            name="Protptype"
            onChange={(e) => {
              Article.prod = e.target.value;
              setArticle(Article);
              console.log(Article);
            }}
          >
            <option value="">Prod/Proto</option>
            <option value="Prototype">Prototype</option>
            <option value="Production">Production</option>
          </select>
          <input
            type="text"
            placeholder="Quantité"
            onChange={(e) => {
              Article.quantite = e.target.value;
              setArticle(Article);
              console.log(Article);
            }}
          />
        </ModalBody>
        <ModalFooter className="ModalFooter">
          <Button
            className="ModalAddBtn"
            onClick={() => dispatch(AddProductToApi(Article))}
          >
            Ajouter
          </Button>
          <Button color="secondary" onClick={toggle}>
            Fermer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddModal;
