const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();
const History = require("../controllers/HistoryController");
const jwt = require("jsonwebtoken");
// CookieParser MiddleWare
router.use(cookieParser());

// Get History
router.get(
  "/get",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    }
    const decoded = jwt.verify(mytoken, process.env.ACCESS_SECRET_KEY);
    if (decoded.role !== "admin") {
      res.status(401).send("access denied!!");
    } else {
      next();
    }
  }),
  History.get
);
// Post History
router.post(
  "/post",
  (auth = (req, res, next) => {
    const mytoken = req.cookies.token;
    if (!mytoken) {
      res.status(401).send("access denied!!");
    }
    const decoded = jwt.verify(mytoken, process.env.ACCESS_SECRET_KEY);
    if (decoded.role !== "admin") {
      res.status(401).send("access denied!!");
    } else {
      next();
    }
  }),
  History.post
);

module.exports = router;
