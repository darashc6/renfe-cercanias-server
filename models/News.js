import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
  headerImg: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const newsModel = mongoose.model("News", newsSchema);

export default newsModel;
