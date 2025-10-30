import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary configuration (reads CLOUDINARY_URL automatically)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_URL.split("@")[1],
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "zoe_events", // folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1200, height: 800, crop: "limit" }], // optional resizing
  },
});

const upload = multer({ storage });

export default upload;
