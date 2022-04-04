import express from "express";
import {
  getNews,
  addNews,
  getSingleNews,
} from "../controllers/NewsController.js";

const router = express.Router();

router.get("/", getNews);
router.post("/", addNews);
router.get("/:id", getSingleNews);

export default router;
