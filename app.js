const fs = require("fs").promises;
const http = require("http");
// const text = "hello this is kushal using deno";

// fs.writeFile("node-msg.txt", text).then(() => {
//   console.log("wrote to file node!");
// });
const server = http.createServer((req, res) => {
  res.end("hello from node");
});

server.listen(3000);
