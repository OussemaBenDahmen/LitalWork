const History = require("../models/HistoryModel");
const jwt = require("jsonwebtoken");

module.exports = {
  get: (req, res) => {
    History.get((err, data) => {
      if (err) {
        res.send({
          message: err.message || "some internal issues happened",
        });
      } else {
        res.send(data);
      }
    });
  },
  post: (req, res) => {
    const token = req.header("Cookie").slice(6);
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
    const newHistory = new History(req.body);
    newHistory.User_name = decoded.name;
    History.Post(newHistory, (err, data) => {
      if (err) {
        res.status(500);
      }
      res.json(data);
    });
  },
};
