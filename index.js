import { createServer } from "http";

//creating server
const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/user") {
   console.log(req.query)
    return res.end(JSON.stringify({name:"nameet mandwal",city:"indore"}));
  }
  if (req.method === "GET") {
    return res.end("You hit a GET request on server");
  }
  if (req.method === "DELETE") {
    return res.end("You hit a DELETE request on server");
  }

  console.log(req.method, `and requested url is ${req.url}`);
  return res.end(
    "<h1>hellow from server !</h1><ul><li>request handeling</li><li>response  delivery</li></ul>",
  );
});

// listen the server on port
let PORT = "8080";

server.listen(PORT, () => {
  console.log(`server is running on port no ${PORT}`);
});
