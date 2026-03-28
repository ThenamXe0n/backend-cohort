const express = require("express");
const fs = require("fs");

// instance of server
const server = express();

//middleware
server.use(express.json()); //body parsing
server.use(express.urlencoded())

//route handelers
server.get("/", (req, res) => {
  res.send("<h1>server is live!!</h1>");
});

server.get("/read-file",(req,res)=>{
    console.log("body",req.body)
    console.log("query",req.query)
    try{
        const fileToRead =  req.query.file
        let fileContent = fs.readFileSync(fileToRead,"binary")
        res.status(200).send(fileContent)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

server.post("/", (req, res) => {
  console.log("body:", req.body);
  fs.appendFileSync(req.body.fileName, `\n${JSON.stringify(req.body)}`);
  res.send(
    `data :${JSON.stringify(req.body)} is added in data.js file successfully `,
  );
});

server.delete("/", (req, res) => {
  try {
    let fileToDelete = req.body.file;
    fs.unlinkSync(fileToDelete);
    res.json({status:true,message:`file is deleted : ${fileToDelete}`,data:null});
  } catch (error) {
    res.status(500).json({message:error.message,data:null,status:false});
  }
});


//listen server on port
let PORT = "8080";

server.listen(PORT, () => {
  console.log(`server is running on port no ${PORT} http://localhost:${PORT}`);
});
