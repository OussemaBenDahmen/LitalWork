const sql = require("../db");

class History {
  constructor(info) {
    (this.Product_name = info.Product_name || "-"),
      (this.User_name = info.User_name || "-"),
      (this.action = info.action || "-"),
      (this.Date = Date().substring(0, 24));
  }
}
History.get = (result) => {
  sql.query("SELECT * FROM History", (err, data) => {
    if (err) {
      result(err, null);
    }
    result(null, data);
  });
};
History.Post = (newHistory, result) => {
  sql.query("INSERT INTO History SET ?", newHistory, (err, data) => {
    if (err) {
      result(err, null);
    }
    result(null, data);
  });
};

module.exports = History;
