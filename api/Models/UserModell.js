const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./dbModell");
require("dotenv").config();
class User extends Model {}
User.init(
  {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "gyaktabla",
    timestamps: false,
  }
);
module.exports = User;
