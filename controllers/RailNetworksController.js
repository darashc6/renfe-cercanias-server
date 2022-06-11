import { RailNetwork } from "../models/RailNetwork.js";

export const addRailNetwork = (req, res) => {
  const { railNetworkId, name, fares, trainLines, address, contact } = req.body;

  const newRailNetwork = new RailNetwork({
    railNetworkId: railNetworkId,
    name: name,
    fares: fares,
    trainLines: trainLines,
    address: address,
    contact: contact,
  });

  newRailNetwork
    .save()
    .then((railNetwork) => res.status(201).json(railNetwork))
    .catch((error) => res.status(400).json({ message: error }));
};

export const getRailNetwork = (req, res) => {
  const { id } = req.params;

  RailNetwork.findOne({ railNetworkId: id })
    .populate({
      path: "fares",
      populate: "fareDescription",
    })
    .then((railNetwork) => {
      if (!railNetwork) {
        return res.status(404).json({ message: "Not found" });
      }

      res.status(200).json(railNetwork);
    })
    .catch((error) => res.status(404).json({ message: error }));
};
