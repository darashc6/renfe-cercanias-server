import express from "express";
import mongoose from "mongoose";
import "dotenv/config";


const app = express();

// Middlewares
app.use(express.json())

// Index endpoint
app.use("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started")
    mongoose.connect(process.env.MONGODB_ATLAS_URL).then(() => {
        console.log("Connected to MongoDB Atlas")
    })
})