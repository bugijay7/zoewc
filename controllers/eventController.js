import Event from '../models/eventModel.js';

// Create a new event
export const createEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const image = req.file ? req.file.path : null;

    if (!title || !date || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newEvent = new Event({
      title,
      date,
      description,
      image,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(400).json({ message: error.message });
  }
};

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific event by ID
export const getEventById = async (req, res) => {
  try {
    const eventItem = await Event.findById(req.params.id);
    if (!eventItem) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(eventItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an event by ID
export const updateEvent = async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const image = req.file ? req.file.path : undefined;

    const updateData = { title, date, description };
    if (image) updateData.image = image;

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an event by ID
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
