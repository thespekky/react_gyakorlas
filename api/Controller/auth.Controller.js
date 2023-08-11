const mysql = require("mysql");
const pools = require("../Models/dbModell");
exports.login = (req, res) => {
  //res.send("Ben vagy 2");
  pools.query("SELECT * FROM gyaktabla WHERE ID=1", (err, results, fileds) => {
    if (err) throw err;
    if ((results.ID = 1)) res.send("id egyenlo 1");
    else {
      res.send(results);
    }
  });
};
