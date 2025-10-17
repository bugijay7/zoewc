import express from 'express';
import { createSermon, getSermons, getSermonById, updateSermon, deleteSermon } from '../controllers/sermonController.js';

const router = express.Router();
// Routes   
router.post('/', createSermon);
router.get('/', getSermons);
router.get('/:id', getSermonById);
router.put('/:id', updateSermon);
router.delete('/:id', deleteSermon);    
export default router;