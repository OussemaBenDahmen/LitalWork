const express = require("express");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cbb) {
    cbb(null, "Public");
  },
  filename: function (req, file, cbb) {
    cbb(null, file.originalname);
  },
});
const Upload = multer({ storage: storage });
const app = express();
const bodyParser = require("body-parser");
const User = require("./app/routes/UserRoutes");
const Products = require("./app/routes/ProductRoutes");
const HistoryRoute = require("./app/routes/HistoryRoute");
//const CORS = require("cors");

const LoginRoute = require("./app/routes/LoginRoutes");
const LogoutRoute = require("./app/routes/LogoutRoute");
// load cookieParser
app.use(cookieParser());

// Creating A Public Folder
app.use(express.static("./Public"));

app.use(function (req, res, next) {
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
app.use("/app/upload", Upload.single("file"), (req, res) => {
  const image = req.file;
  res.send("done");
});

app.listen(5000, () => {
  console.log(`Successfully connected to the port 5000`);
});
