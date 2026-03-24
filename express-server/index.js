const express = require("express");

const quotesData = {
  quotes: [
    {
      id: 1,
      quote:
        "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      author: "Rumi",
    },
    {
      id: 2,
      quote:
        "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      author: "Abdul Kalam",
    },
    {
      id: 3,
      quote:
        "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
      author: "Abdul Kalam",
    },
    {
      id: 4,
      quote: "If You Can'T Make It Good, At Least Make It Look Good.",
      author: "Bill Gates",
    },
    {
      id: 5,
      quote:
        "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      author: "Rumi",
    },
  ],
  total: 1454,
  skip: 0,
  limit: 5,
};

//instance of server
const server = express();

//middlewares
server.use(express.json())

function serverBasePath(request, response) {
  res.send("express server is live");
}

//routes
server.get("/", serverBasePath);
server.post("/addNewQuote",(req,res)=>{
    console.log("quotes to add is ",req.body)
    res.send(`quote added successfully : ${JSON.stringify(req.body)}`)
})
server.get("/health-check", (req, res) => {
 
  res.status(301).send(
    "<h1 style='text-align:center;color:blue'>server health is good </h1>",
  );
});
server.get("/myquotes-list", (request, response) => {
  response.json(quotesData);
});

const PORT = "8080";
//listen server on port
server.listen(PORT, () => {
  console.log(`express server is live at port no ${PORT}`);
});
