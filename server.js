import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import cron from "node-cron";
import axios from "axios";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import sermonRoutes from "./routes/sermonRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://zoewc.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
app.use("/uploads",cors({
    origin: "https://zoewc.vercel.app", 
    methods: ["GET"],
  }),
  express.static("uploads"));
app.use(helmet());
app.use(morgan("dev"));

// Ping route for cron
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/sermons", sermonRoutes);

// Cron job to keep Render awake
cron.schedule("*/5 * * * *", async () => {
  try {
    const url = "https://zoewc-1.onrender.com/ping"; // your backend URL
    await axios.get(url);
    console.log(`Pinged server at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error("Ping failed:", error.message);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
