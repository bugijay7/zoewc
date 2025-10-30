import Event from '../models/eventModel.js';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// ✅ Configure Cloudinary (using your single CLOUDINARY_URL)
cloudinary.v2.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

// 🟩 Create Event
export const createEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    // Upload to Cloudinary
    const uploadResult = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: 'events',
    });

    const newEvent = new Event({
      title,
      date,
      description,
      image: {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      },
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(400).json({ message: error.message });
  }
};

// 🟦 Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟨 Get single event
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟧 Update event
export const updateEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ message: 'Event not found' });

    // If a new image was uploaded, replace the old one
    if (req.file) {
      // Delete old image from Cloudinary
      await cloudinary.v2.uploader.destroy(event.image.public_id);

      // Upload new image
      const uploadResult = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: 'events',
      });

      event.image.url = uploadResult.secure_url;
      event.image.public_id = uploadResult.public_id;
    }

    event.title = title || event.title;
    event.date = date || event.date;
    event.description = description || event.description;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🟥 Delete event (auto Cloudinary cleanup)
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Delete image from Cloudinary
    await cloudinary.v2.uploader.destroy(event.image.public_id);

    // Delete from MongoDB
    await event.deleteOne();

    res.json({ message: 'Event and image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
