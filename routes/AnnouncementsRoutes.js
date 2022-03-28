import express from "express";
import { getAnnouncements, addAnnouncement } from "../controllers/AnnouncementsController.js";

const router = express.Router();

router.get("/", getAnnouncements);
router.post("/", addAnnouncement);

export default router;