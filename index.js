import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import AnnouncementRoutes from "./routes/AnnouncementsRoutes.js";


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/announcements', AnnouncementRoutes);

// Index endpoint
app.use("/", (req, res) => {
    res.send("Hello World!");
})

mongoose.connect("mongodb+srv://renfe-cercanias:renfe-cercanias@renfe-cercanias.phwzc.mongodb.net/renfe-cercanias-api?retryWrites=true&w=majority").then(() => {
    console.log("Connected to MongoDB Atlas")
    app.listen(5000, () => {
        console.log("Server started")
    })
})