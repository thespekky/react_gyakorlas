const mysql = require("mysql");
const pools = require("../Models/dbModell");
/*exports.login2 = (req, res) => {
  //res.send("Ben vagy 2");
  pools.query("SELECT * FROM gyaktabla WHERE ID=1", (err, results, fileds) => {
    if (err) throw err;
    res.send(results);
  });
};*/
exports.login = (req, res) => {
  // console.log(req.body.email);
  pools.query(
    'SELECT * FROM gyaktabla WHERE email="' + req.body.email + '"',
    (err, results, fileds) => {
      if (err) throw err;
      res.send(results);
    }
  );
};
