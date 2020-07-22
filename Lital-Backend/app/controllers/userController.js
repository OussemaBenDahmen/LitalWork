const User = require("../models/UserModel");
module.exports = {
  get: (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Users.",
        });
      else {
        res.send(data);
      }
    });
  },

  add: (req, res) => {
    // Validate request
    const user = new User(req.body);

    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      else {
        res.send(data);
      }
    });
  },
  delete: (req, res) => {
    User.delete(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer.",
        });
      } else {
        res.send(data);
      }
    });
  },
};
