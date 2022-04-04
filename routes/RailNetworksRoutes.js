import express from "express";
import { addRailNetwork, getRailNetwork } from "../controllers/RailNetworksController.js";

const router = express.Router();

router.post('/', addRailNetwork);
router.get('/:id', getRailNetwork);

export default router;