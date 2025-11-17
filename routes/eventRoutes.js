import express from "express";
import upload from "../middlewares/upload.js";
import Event from "../models/eventModel.js";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();

// CREATE NEW EVENT
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageData = {
      url: req.file.path,
      public_id: req.file.filename,
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

// GET SINGLE EVENT BY ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE EVENT
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Delete image from Cloudinary
    if (event.image?.public_id) {
      await cloudinary.uploader.destroy(event.image.public_id);
    }

    await Event.findByIdAndDelete(req.params.id);

    res.json({ message: "Event deleted successfully" });

  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
