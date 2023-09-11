const mysql = require("mysql");
const User = require("../Models/UserModell");
const Cards = require("../Models/CardsModell");
const sequelize = require("../Models/dbModell");
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
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
      const token = jwt.sign(
        { name: user.name },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: "1h" }
      );
      if (!token) {
        console.log("token hiba");
      }
      // console.log("auth token:" + token);
      //res.json({ accessToken: token });
      res.send({ authtoken: token, user: user });
      //res.json({ authtoken: token, user: user });
    } else {
      res.status(200).send({ status: false });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.teszt = (req, res) => {
  res.send(req.user);
};
exports.cards = async (req, res) => {
  try {
    //console.log(req.body);
    const cards = await Cards.findAll({
      where: {
        user_ID: req.body.ID,
      },
    });
    if (cards) {
      res.send({ cards: cards });
    } else {
      res.send({ message: "Cannot load user data/cannot find user" });
    }
  } catch (error) {
    console.log(error);
  }
};
