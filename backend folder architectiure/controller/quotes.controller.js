const { quotesData } = require("../data/sampledata");

function getAllQuotes(req, res) {
  try {
    res
      .status(200)
      .json({ message: "quotes loaded successfully", data: quotesData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {getAllQuotes}