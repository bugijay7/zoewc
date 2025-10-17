import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import sermonRoutes from "./routes/sermonRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors({
     origin: 'http://localhost:5173', 
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     credentials: true, 
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(helmet());
app.use(morgan("dev"));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/sermons", sermonRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;