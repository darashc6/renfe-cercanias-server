import mongoose from "mongoose";

const announcementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    stationId: {
        type: String,
        required: true
    }
})

// Model
const announcementModel = mongoose.model('Announcement', announcementSchema);
export default announcementModel;