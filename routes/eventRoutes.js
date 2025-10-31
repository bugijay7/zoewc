import express from "express";
import upload from "../middlewares/upload.js"

const router = express.Router();

// Upload event image
router.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "Event image uploaded successfully",
    file: req.file,
  });
});

// Example: get all events
router.get("/", (req, res) => {
  res.json({ message: "Events route working fine" });
});

export default router;
