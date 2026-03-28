const express = require("express");
const { getAllQuotes } = require("./controller/quotes.controller");
const { getAllNews } = require("./controller/news.controller");

const server = express();


//middleware
server.use(express.json());
server.use(express.urlencoded());

//route handlers
server.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "server is running fine" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

server.get("/quotes",getAllQuotes );

server.get("/view/news", getAllNews);

const PORT = "8000";
server.listen(PORT, () => {
  try {
    console.log("server is Runnning port : " + PORT);
  } catch (error) {
    process.exit(1);
  }
});
