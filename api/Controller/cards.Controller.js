const { where } = require("sequelize");
const Cards = require("../Models/CardsModell");
exports.card = async (req, res) => {
  try {
    //console.log(req.body);
    const card = await Cards.findOne({
      where: {
        ID: req.params.id,
      },
    });
    if (card) {
      res.send({ card: card });
    } else {
      res.send({ message: "Cannot load user card wrong id" });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.update = async (req, res) => {
  try {
    const card = await Cards.update(
      { title: req.body.Title, content: req.body.Content },
      { where: { ID: req.body.ID } }
    );
    res.send({ message: "Sikeres feltöltés" });
  } catch (e) {
    console.log(e);
  }
};
