import { Router } from "express";
import userRoutes from "./user.routes.js";
import gameRoutes from "./game.routes.js";

const allRoutes = Router();

allRoutes.use("/user", userRoutes);
allRoutes.use("/game", gameRoutes);

export default allRoutes;
