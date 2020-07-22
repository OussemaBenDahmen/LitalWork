const express = require("express");

const jwt = require("jsonwebtoken");
require("cookie-parser")();
const router = express.Router();
const sql = require("../db");
router.post("/", (req, res) => {
  sql.query(
    "SELECT * FROM users WHERE email = ?",
    req.body.email,
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      let mydata = data[0];
      mydata = { ...mydata };
      console.log(mydata);
      if (data.length == 0) {
        console.log("none");
        res.send("cant find it");
      } else {
        let token = jwt.sign(mydata, process.env.ACCESS_SECRET_KEY);

        res.header(
          "Set-Cookie",
          `token=${token}; HttpOnly; path=/; Max-Age=60000000`
        );

        res.json({
          role: mydata.role,
        });
        console.log(mydata.role);
      }
    }
  );
});
module.exports = router;
