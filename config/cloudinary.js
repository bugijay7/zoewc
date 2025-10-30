import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_URL.split("@")[1], // auto parse from URL
});

// Optional: log to verify setup
console.log("✅ Cloudinary configured successfully");

export default cloudinary;
