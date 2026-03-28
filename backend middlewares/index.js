require("dotenv").config();
const express = require("express");
const { isAdmin, greetingMessage } = require("./middleware/authMiddleware");
const cors = require("cors")
// console.log("isAdmin",checkAdmin)

const server = express();

//middleware
server.use(cors({
    origin:[process.env.ACCESS_ORIGIN]
}))
server.use(express.json());
server.use(express.urlencoded());
server.get("/", (req, res) => {
  console.log("requested query", req);
  res.send("server is live");
});

server.get("/course", (req, res) =>
  res.json({ message: "express js backend cohort" }),
);

server.get("/admin-access", (req, res) => {
  res.json({ message: "welcome to admin pannel" });
});

let port = process.env.PORT;
server.listen(port, () => {
  console.log(`server is listing on port ${port}`);
});
