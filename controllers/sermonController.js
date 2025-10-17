import Sermon from "../models/sermonModel.js";

// 📌 Create a new sermon
export const createSermon = async (req, res) => {
  try {
    const { title, date, description, youtubeLink } = req.body;

    if (!title || !date || !description || !youtubeLink) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const sermon = new Sermon({
      title,
      date,
      description,
      youtubeLink,
    });

    await sermon.save();
    res.status(201).json({ message: "Sermon created successfully!", sermon });
  } catch (error) {
    console.error("Error creating sermon:", error);
    res.status(500).json({ message: "Server error while creating sermon." });
  }
};

// 📌 Get all sermons
export const getSermons = async (req, res) => {
  try {
    const sermons = await Sermon.find().sort({ date: -1 });
    res.status(200).json(sermons);
  } catch (error) {
    console.error("Error fetching sermons:", error);
    res.status(500).json({ message: "Server error while fetching sermons." });
  }
};

// 📌 Get a single sermon by ID
export const getSermonById = async (req, res) => {
  try {
    const sermon = await Sermon.findById(req.params.id);
    if (!sermon) {
      return res.status(404).json({ message: "Sermon not found." });
    }
    res.status(200).json(sermon);
  } catch (error) {
    console.error("Error fetching sermon:", error);
    res.status(500).json({ message: "Server error while fetching sermon." });
  }
};

// 📌 Update a sermon
export const updateSermon = async (req, res) => {
  try {
    const { title, date, description, youtubeLink } = req.body;

    const updatedSermon = await Sermon.findByIdAndUpdate(
      req.params.id,
      { title, date, description, youtubeLink },
      { new: true }
    );

    if (!updatedSermon) {
      return res.status(404).json({ message: "Sermon not found." });
    }

    res.status(200).json({
      message: "Sermon updated successfully!",
      sermon: updatedSermon,
    });
  } catch (error) {
    console.error("Error updating sermon:", error);
    res.status(500).json({ message: "Server error while updating sermon." });
  }
};

// 📌 Delete a sermon
export const deleteSermon = async (req, res) => {
  try {
    const deletedSermon = await Sermon.findByIdAndDelete(req.params.id);
    if (!deletedSermon) {
      return res.status(404).json({ message: "Sermon not found." });
    }
    res.status(200).json({ message: "Sermon deleted successfully!" });
  } catch (error) {
    console.error("Error deleting sermon:", error);
    res.status(500).json({ message: "Server error while deleting sermon." });
  }
};
