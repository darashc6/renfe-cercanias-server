import { DiscountFare } from "../models/RailNetwork.js";

export const getDiscountFares = (req, res) => {
  DiscountFare.find()
    .populate("fareDescription")
    .then((discountFares) => res.status(200).json(discountFares))
    .catch((error) => res.status(400).json({ message: error }));
};

export const addDiscountFare = (req, res) => {
  const { fareId, fareDescription } = req.body;

  const newDiscountFare = new DiscountFare({
    fareId: fareId,
    fareDescription: fareDescription,
  });

  newDiscountFare
    .save()
    .then(() => res.status(201).json({ message: "New discount fare added" }))
    .catch((error) => res.status(400).json({ message: error }));
};

export const getDiscountFare = (req, res) => {
  const { id } = req.params;

  DiscountFare.findOne({ fareId: id })
    .populate("fareDescription")
    .then((discountFare) => res.status(200).json(discountFare))
    .catch((error) => res.status(404).json({ message: error }));
};
