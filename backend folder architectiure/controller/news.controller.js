const { newsData } = require("../data/sampledata");

const getAllNews = (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "news loaded successfully", data: newsData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {getAllNews}