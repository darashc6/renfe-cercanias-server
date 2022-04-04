import express from "express";
import {
  addDiscountFare,
  getDiscountFare,
  getDiscountFares,
} from "../controllers/DiscountFareController.js";

const router = express.Router();

router.get("/", getDiscountFares);
router.post("/", addDiscountFare);
router.get("/:id", getDiscountFare);

export default router;
