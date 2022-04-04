import News from "../models/News.js";

export const getNews = (req, res) => {
  News.find()
    .then((news) => res.status(200).json(news))
    .catch((error) => res.status(400).json({ message: error }));
};

export const addNews = (req, res) => {
  const { headerImg, title, content } = req.body;

  const newNews = new News({
    headerImg: headerImg,
    title: title,
    content: content,
  });

  newNews
    .save()
    .then(() => res.status(201).json({ message: "News added succesfully" }))
    .catch((error) => res.status(400).json({ message: error }));
};

export const getSingleNews = (req, res) => {
  const { id } = req.params;

  News.findById(id)
    .then((singleNews) => res.status(200).json(singleNews))
    .catch((error) => res.status(404).json({ message: error }));
};
