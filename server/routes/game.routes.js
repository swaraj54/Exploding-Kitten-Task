import { Router } from "express";
import { startGame } from "../controllers/game.controllers.js";

const gameRoutes = Router();

gameRoutes.post("/startGame", startGame);

export default gameRoutes;
