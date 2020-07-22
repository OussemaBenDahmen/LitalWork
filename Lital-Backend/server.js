const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
const User = require("./app/routes/UserRoutes");
const Products = require("./app/routes/ProductRoutes");
const HistoryRoute = require("./app/routes/HistoryRoute");
//const CORS = require("cors");

const LoginRoute = require("./app/routes/LoginRoutes");
const LogoutRoute = require("./app/routes/LogoutRoute");

app.use(function (req, res, next) {
  // load cookieParser
  app.use(cookieParser());
  /**** */
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

  next();
});

// load Body-parser
require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Login/logout middleware
app.use("/app/login", LoginRoute);
app.use("/app/logout", LogoutRoute);

// Use all routes
app.use("/app/user", User);
app.use("/app/Products", Products);
app.use("/app/history", HistoryRoute);

app.listen(5000, () => {
  console.log(`Successfully connected to the port 5000`);
});
