import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Edit from "../../Images/edit-icon.png";
import { useDispatch } from "react-redux";
import { EditProductinApi } from "../../Actions/ProductActions/EditProduct";

const ModifyModal = (props) => {
  const [modal, setModal] = useState(false);
  const [Article, setArticle] = useState(props.Product);
  const [SelectedFile, setSelectedFile] = useState({});
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <Button className="ModifyProductBtn" onClick={toggle}>
        <img src={Edit} alt="" width="20px" />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="Modal">
        <ModalHeader toggle={toggle} close={closeBtn} className="ModalHeader">
          Modifier un Produit
        </ModalHeader>
        <ModalBody className="ModalBody">
          <input
            type="text"
            placeholder="Reference"
            defaultValue={props.Product.ref}
            onChange={(e) => {
              Article.ref = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Nom"
            defaultValue={props.Product.name}
            onChange={(e) => {
              Article.name = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Type"
            defaultValue={props.Product.type}
            onChange={(e) => {
              Article.type = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Collection"
            defaultValue={props.Product.collection}
            onChange={(e) => {
              Article.collection = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Marque"
            defaultValue={props.Product.marque}
            onChange={(e) => {
              Article.marque = e.target.value;
              setArticle(Article);
            }}
          />
          <select
            defaultValue={props.Product.mesure}
            onChange={(e) => {
              Article.mesure = e.target.value;
              setArticle(Article);
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
            defaultValue={props.Product.color}
            onChange={(e) => {
              Article.color = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Localisation"
            defaultValue={props.Product.localisation}
            onChange={(e) => {
              Article.localisation = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="text"
            placeholder="Carton"
            defaultValue={props.Product.carton}
            onChange={(e) => {
              Article.carton = e.target.value;
              setArticle(Article);
            }}
          />
          <select
            name="Protptype"
            defaultValue={props.Product.prod}
            onChange={(e) => {
              Article.prod_proto = e.target.value;
              setArticle(Article);
            }}
          >
            <option value="">Status</option>
            <option value="Prototype">Prototype</option>
            <option value="Production">Production</option>
          </select>
          <input
            type="text"
            placeholder="Quantité"
            defaultValue={props.Product.quantity}
            onChange={(e) => {
              Article.quantity = e.target.value;
              setArticle(Article);
            }}
          />{" "}
          <textarea
            resize="none"
            placeholder="Commentaire"
            defaultValue={props.Product.Detail || ""}
            onChange={(e) => {
              Article.Detail = e.target.value;
              setArticle(Article);
            }}
          />
          <input
            type="file"
            name="ProductImage"
            onChange={(e) => {
              Article.Image = e.target.files[0].name;
              setSelectedFile(() => {
                let fd = new FormData();
                fd.append("file", e.target.files[0]);

                return fd;
              });
              setArticle(Article);
            }}
          />
        </ModalBody>
        <ModalFooter className="ModalFooter">
          <Button
            className="ModalAddBtn"
            onClick={() => dispatch(EditProductinApi(Article, SelectedFile))}
          >
            Modifier
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Fermer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModifyModal;
