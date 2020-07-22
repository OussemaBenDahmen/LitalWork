import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./modal.css";
import { connect } from "react-redux";
import { addUserToApi } from "../../Actions/UsersActions";

const AddModal = (props) => {
  const [modal, setModal] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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
          Ajouter un utilisateur
        </ModalHeader>
        <ModalBody className="ModalBody">
          <input
            type="text"
            id="fname"
            placeholder="Nom"
            onChange={(e) => setfirstname(e.target.value)}
          ></input>
          <input
            id="email"
            placeholder="Example@gmail.com"
            onChange={(e) => setemail(e.target.value)}
          ></input>

          <input
            type="password"
            placeholder="Mot de passe"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </ModalBody>
        <ModalFooter className="ModalFooter">
          <Button
            className="ModalAddBtn"
            onClick={() =>
              props.AddUser({
                name: firstname,
                email: email,
                password: password,
                role: "Client",
              })
            }
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

const mapDispatchToProps = (dispatch) => ({
  AddUser: (User) => dispatch(addUserToApi(User)),
});

export default connect(null, mapDispatchToProps)(AddModal);
