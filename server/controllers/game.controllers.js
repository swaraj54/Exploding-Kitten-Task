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
      console.log(index, "index");
      user.cards.splice(index, 1);
      user.isLastCardIsDefuse = true;
      console.log(user, "user.cards");
    } else if (card == "shuffle") {
      user.cards.splice(index, 1);
      user.isLastCardIsDefuse = false;
      const newCards = uniqueCards();
      user.cards = newCards;
    } else if (card == "bomb") {
      if (user.isLastCardIsDefuse) {
        user.cards.splice(index, 1);
        user.isLastCardIsDefuse = false;
      } else {
        user.isLastCardIsDefuse = false;
        user.cards = [];
        await user.save();
        return res
          .status(200)
          .json({ success: true, message: "You lost game." });
      }
    }
    console.log(user.cards, "final cards");
    await user.save();
    if (user.cards.length == 0) {
      user.totalGamesWon = user.totalGamesWon++;
      await user.save();
      return res
        .status(200)
        .json({ success: true, message: "You won the game." });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({ success: false, error });
  }
};
