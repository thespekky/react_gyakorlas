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
