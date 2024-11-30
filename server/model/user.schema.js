import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String },
  totalGamesWon: { type: Number, default : 0 },
  cards: [String],
  isLastCardIsDefuse: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

export default User;
