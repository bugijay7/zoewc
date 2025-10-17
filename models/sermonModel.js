import mongoose from "mongoose";

const sermonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    youtubeLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sermon = mongoose.model("Sermon", sermonSchema);
export default Sermon;
