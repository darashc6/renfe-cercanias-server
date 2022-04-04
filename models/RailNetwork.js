import mongoose from "mongoose";

const farePricesSchema = mongoose.Schema({
  n_zones: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const fareSchema = mongoose.Schema({
  fareId: {
    type: String,
    required: true,
  },
  fareDescription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FareDescription",
    required: true,
  },
  prices: {
    type: [farePricesSchema],
  },
});

const stationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  zone: {
    type: Number,
    required: true,
  },
  additionalInfo: {
    type: [String],
  },
  travelTimeToNextStation: {
    type: Number,
  },
  connectedLines: {
    type: [String],
  },
});

const contactSchema = mongoose.Schema({
  contactGroup: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const trainLineSchema = mongoose.Schema({
  trainLineId: {
    type: String,
    required: true,
  },
  lineName: {
    type: String,
    required: true,
  },
  originStation: {
    type: String,
    required: true,
  },
  destinationStation: {
    type: String,
    required: true,
  },
  stations: {
    type: [stationSchema],
    required: true,
  },
});

const railNetworkSchema = mongoose.Schema({
  railNetworkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fares: {
    type: [fareSchema],
    required: true,
  },
  trainLines: {
    type: [trainLineSchema],
    required: true,
  },
  contact: {
    type: [contactSchema],
    required: true,
  },
  address: {
    type: [String],
    required: true,
  },
});

export const RailNetwork = mongoose.model("RailNetwork", railNetworkSchema);
export const DiscountFare = mongoose.model("DiscountFare", fareSchema);
