import Announcement from "../models/Announcement.js";

export const getAnnouncements = (req, res) => {
    Announcement.find().sort({date: -1})
        .then((announcements) => res.status(200).json(announcements))
        .catch((error) => res.status(400).json({ error: error }))
}

export const addAnnouncement = (req, res) => {
    const { title, message, stationId } = req.body;

    const newAnnouncement = new Announcement({
        title: title,
        message: message,
        stationId: stationId
    });

    newAnnouncement.save()
        .then((announcement) => res.status(201).json({ announcement: announcement }))
        .catch((error) => res.status(400).json({ error: error }))
}