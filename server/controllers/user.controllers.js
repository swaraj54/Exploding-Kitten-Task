import User from "../model/user.schema.js";
export const getLeaderboardData = async (req, res) => {
  try {
    const allUsers = await User.find({});
    return res.status(200).json({ success: true, allUsers });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
