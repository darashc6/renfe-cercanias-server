import { FareDescription } from "../models/FareDescription.js";

export const addFareDescription = (req, res) => {
  const { fareDescriptionId, title, subtitle, content } = req.body;

  const newFareDescription = new FareDescription({
    fareDescriptionId: fareDescriptionId,
    title: title,
    subtitle: subtitle,
    content: content,
  });

  newFareDescription
    .save()
    .then((fareDescription) => res.status(201).json(fareDescription))
    .catch((error) => res.status(400).json({ error: error }));
};
