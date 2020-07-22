const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.cookie("token", "", {
    maxAge: -0,
    path: "/",
  });

  res.send("done");
});

module.exports = router;
