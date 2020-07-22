const express = require("express");
const User = require("../controllers/userController");
const router = express.Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//CookieParser MiddleWare
router.use(cookieParser());
dotenv.config();
//Get all users
router.get(
  "/get",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    }
    const decoded = jwt.verify(mytoken, process.env.ACCESS_SECRET_KEY);
    if (decoded.role !== "admin") {
      res.status(401).send();
    } else {
      next();
    }
  }),
  User.get
);
// Add new User
router.post(
  "/add",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    }
    const decoded = jwt.verify(mytoken, process.env.ACCESS_SECRET_KEY);
    if (decoded.role !== "admin") {
      res.status(401).send("Denied");
    } else {
      next();
    }
  }),
  User.add
);
//Delete a user
router.delete(
  "/delete",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    }
    const decoded = jwt.verify(mytoken, process.env.ACCESS_SECRET_KEY);
    if (decoded.role !== "admin") {
      res.status(401).send("Denied");
    } else {
      next();
    }
  }),
  User.delete
);

module.exports = router;
