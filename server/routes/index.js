import { Router } from "express";
import userRoutes from "./user.routes.js";
import gameRoutes from "./game.routes.js";

const allRoutes = Router();

allRoutes.post("/user", userRoutes);
allRoutes.post("/game", gameRoutes);

export default allRoutes;
