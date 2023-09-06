const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./dbModell");
require("dotenv").config();
class Cards extends Model {}
Cards.init(
  {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_ID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "datas",
    timestamps: false,
  }
);
module.exports = Cards;
