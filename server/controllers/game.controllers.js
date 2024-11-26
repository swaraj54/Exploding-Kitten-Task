import User from "../model/user.schema.js";
import { uniqueCards } from "../services/game.service.js";
export const startGame = async (req, res) => {
  try {
    const { username } = req.body;

    let user = await User.findOne({ name: username });

    const cards = uniqueCards();
    if (!user) {
      user = new User({
        name: username,
        cards: cards,
      });
      await user.save();
    } else {
      if (user.cards.length === 0) {
        user.cards = cards;
        await user.save();
      }
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({ success: false, error });
  }
};

export const drawCard = async (req, res) => {
  try {
    const { index, username } = req.body;

    let user = await User.findOne({ name: username });

    const card = user.cards[index];

    if (card == "cat") {
      user.cards.splice(index, 1);
      user.isLastCardIsDefuse = false;
      console.log(user.cards, "user.cards");
    } else if (card == "defuse") {
      user.cards.splice(index, 1);
      user.isLastCardIsDefuse = true;
    } else if (card == "shuffle") {
      user.isLastCardIsDefuse = false;
      user.cards = [];
    } else if (card == "bomb") {
      user.isLastCardIsDefuse = false;
      user.cards = [];
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({ success: false, error });
  }
};
