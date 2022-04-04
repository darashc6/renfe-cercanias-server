import express from "express";
import { addFareDescription } from "../controllers/FareDescriptionController.js";

const router = express.Router();

router.post("/", addFareDescription);

export default router;
