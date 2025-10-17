import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // stores file path
});

export default mongoose.model('Event', eventSchema);
