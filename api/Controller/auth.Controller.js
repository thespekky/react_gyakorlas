const mysql = require("mysql");
const User = require("../Models/UserModell");
const sequelize = require("../Models/dbModell");
const { QueryTypes } = require("sequelize");
//const pools = require("../Models/dbModell");
/*exports.login2 = (req, res) => {
  //res.send("Ben vagy 2");
  pools.query("SELECT * FROM gyaktabla WHERE ID=1", (err, results, fileds) => {
    if (err) throw err;
    res.send(results);
  });
};*/
exports.login = async (req, res) => {
  //console.log(req.body.email);
  /*pools.query(
    'SELECT * FROM gyaktabla WHERE email="' + req.body.email + '"',
    (err, results, fileds) => {
      if (err) throw err;
      res.send(results);
    }
  );*/
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      //console.log(user);
      res.status(200).send(user);
    } else {
      res.status(200).send({ status: false });
    }
  } catch (e) {
    console.log(e);
  }
};
