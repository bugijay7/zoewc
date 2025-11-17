import express from "express";
import upload from "../middlewares/upload.js";
import Event from "../models/eventModel.js";

const router = express.Router();

// CREATE NEW EVENT
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Cloudinary upload response is stored in req.file
    const imageData = {
      url: req.file.path,       // Cloudinary image URL
      public_id: req.file.filename, // Cloudinary public ID
    };

    const event = new Event({
      title,
      date,
      description,
      image: imageData,
    });

    await event.save();

    res.status(201).json({
      message: "Event created successfully",
      event,
    });

  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// GET ALL EVENTS
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
