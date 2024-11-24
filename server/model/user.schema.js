import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String },
  totalGamesWon: { type: Number },
});

const User = mongoose.model("User", userSchema);

export default User;
