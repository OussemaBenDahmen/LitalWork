const sql = require("../db.js");

// constructor
class Product {
  constructor(product) {
    this.name = product.name || "-";
    this.ref = product.ref || "-";
    this.type = product.type || "-";
    this.collection = product.collection || "-";
    this.marque = product.marque || "-";
    this.prod_proto = product.prod_proto || "-";
    this.mesure = product.mesure || "-";
    this.color = product.color || "-";
    this.localisation = product.localisation || "-";
    this.carton = product.carton || 0;
    this.quantity = product.quantity || 0;
  }
}
/*************************** */

/************************* */
Product.Update = (updatedProduct, id, result) => {
  sql.query(
    `UPDATE Products SET ? where id = ?`,
    [updatedProduct, id],
    (err, res) => {
      if (err) {
        result(err, null);
      }
      console.log({ id: res.insertId, ...updatedProduct });
      result(null, { id: res.insertId, ...updatedProduct });
    }
  );
};
Product.create = (newProduct, result) => {
  sql.query("INSERT INTO Products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error= ", err);
      result(err, null);
    }

    console.log("created product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};
Product.getAll = (result) => {
  sql.query("SELECT * FROM Products ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    // console.log("Products: ", res);
    result(null, res);
  });
};
Product.delete = (id, result) => {
  sql.query(
    `UPDATE Products SET ? WHERE id = ${id}`,
    { quantity: 0 },
    (err, res) => {
      if (err) {
        console.log("error : ", err);
        result(null, err);
      }
      console.log("deleted");
      result(null, res);
    }
  );
};
module.exports = Product;
