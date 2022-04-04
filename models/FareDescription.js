import mongoose from "mongoose";

const fareDescriptionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: [String],
    required: true,
  },
});

export const FareDescription = mongoose.model(
  "FareDescription",
  fareDescriptionSchema
);
