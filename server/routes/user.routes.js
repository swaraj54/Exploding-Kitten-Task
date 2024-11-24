import { Router } from "express";
import { getLeaderboardData } from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.post("/get-leaderboard-data", getLeaderboardData);

export default userRoutes;
