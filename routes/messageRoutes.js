// routes/messageRoutes.js
import express from "express";
import {
  saveMessage,
  getMessages,
  deleteMessage,
} from "../controllers/messageController.js";

const router = express.Router();

// POST new message
router.post("/", saveMessage);

// GET all messages
router.get("/", getMessages);

// ✅ DELETE message by ID
router.delete("/:id", deleteMessage);

export default router;
