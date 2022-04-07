import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import AnnouncementRoutes from "./routes/AnnouncementsRoutes.js";
import RailNetworkRoutes from "./routes/RailNetworksRoutes.js";
import FareDescriptionRoutes from "./routes/FareDescriptionRoutes.js";
import NewsRoutes from "./routes/NewsRoutes.js";
import DiscountFareRoutes from "./routes/DiscountFareRoutes.js";
import CustomerServiceFormRoutes from "./routes/CustomerServiceFormRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/announcements", AnnouncementRoutes);
app.use("/rail-networks", RailNetworkRoutes);
app.use("/fare-description", FareDescriptionRoutes);
app.use("/news", NewsRoutes);
app.use("/discount-fares", DiscountFareRoutes);
app.use("/customer-service", CustomerServiceFormRoutes);

// Index endpoint
app.use("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(process.env.MONGODB_ATLAS_URL).then(() => {
  console.log("Connected to MongoDB Atlas");
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
  });
});
