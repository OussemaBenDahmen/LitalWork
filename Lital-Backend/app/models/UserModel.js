const sql = require("../db.js");

// constructor
class User {
  constructor(user) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
    this.role = user.role;
  }
}
User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};
User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }

    console.log("users: ", res);
    result(null, res);
  });
};
User.delete = (id, result) => {
  sql.query(`DELETE FROM users WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error : ", err);
      result(null, err);
    }
    console.log("deleted");
    result(null, res);
  });
};
module.exports = User;
