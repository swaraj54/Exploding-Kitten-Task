import { Router } from "express";
import { startGame, drawCard } from "../controllers/game.controllers.js";

const gameRoutes = Router();

gameRoutes.post("/startGame", startGame);
gameRoutes.post("/drawCard", drawCard);

export default gameRoutes;
