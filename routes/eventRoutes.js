import express from 'express';
import multer from 'multer';
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';

const router = express.Router();

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // create uploads folder in project root
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById);
router.put('/:id', upload.single('image'), updateEvent);
router.delete('/:id', deleteEvent);

export default router;
