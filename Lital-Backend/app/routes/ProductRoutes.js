const express = require("express");
const Product = require("../controllers/ProductController");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//CookieParser MiddleWare
router.use(cookieParser());

// Get all Products
router.get(
  "/get",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    } else {
      next();
    }
  }),
  Product.get
);
// Add new Product
router.post(
  "/add",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    } else {
      next();
    }
  }),
  Product.add
);
// Edit a Product
router.put(
  "/edit/:id",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    } else {
      next();
    }
  }),
  Product.edit
);
// Delete a Product
router.delete(
  "/delete/:id",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    } else {
      next();
    }
  }),
  Product.delete
);

module.exports = router;
