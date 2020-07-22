const Product = require("../models/ProductModel");
module.exports = {
  add: (req, res) => {
    const newProduct = new Product(req.body);
    Product.create(newProduct, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.mesage || "Some error occurred while retrieving Users.",
        });
      } else {
        res.send(data);
      }
    });
  },
  get: (req, res) => {
    // const newProduct = new Product(req.body);
    Product.getAll((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Users.",
        });
      } else {
        res.send(data);
      }
    });
  },
  edit: (req, res) => {
    const id = req.params.id;
    Product.Update(req.body, id, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.mesage || "Some error occurred while retrieving Users.",
        });
      } else {
        res.send(data);
      }
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    Product.delete(id, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.mesage || "Some error occurred while retrieving Users.",
        });
      } else {
        res.send(data);
      }
    });
  },
};
