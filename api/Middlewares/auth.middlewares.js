const User = require("../Models/UserModell");
const sequalize = require("../Models/dbModell");
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
exports.auth = async (req, res, next) => {
  try {
    //const authHeader = req.headers["authorization"];
    //const authtoken = authHeader && authHeader.split(" ")[1];
    const authtoken = req.headers.authtoken
      ? req.headers.authtoken
      : req.headers.authorization.split(" ")[1];
    //console.log(authtoken);
    if (!authtoken) {
      return res.status(401).send({ message: "Nincs token" });
    }
    const data = jwt.verify(authtoken, process.env.ACCESS_TOKEN_KEY);
    if (!data) {
      return res.send({ message: "Hibás token!" });
    }
    const searchedUser = await User.findOne({
      where: { name: data.name },
      attributes: { exclude: ["password"] },
    });
    if (!searchedUser) {
      return res.send({ message: "Nincs ilyen felhasználó" });
    }
    req.user = searchedUser;
    //return res.send({ message: "Sikeres belepes" });
    next();
  } catch (e) {
    console.log(e);
    return res.send({ message: "Kritikális hiba" });
  }
};
