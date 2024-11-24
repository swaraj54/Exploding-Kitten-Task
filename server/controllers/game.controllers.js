import User from "../model/user.schema.js";
export const startGame = async (req, res) => {
  try {
    const { username } = req.body;

    let user = await User.findOne({ name: username });

    if (!user) {
      user = new User({
        name: username,
      });
      await user.save();
    }
    const cards = ["cat", "defuse", "shuffle", "bomb"];
    // send 5 cards with shuffle behaviour
    // track assigned cards to user from db
    return res.status(200).json({ success: true, cards });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
