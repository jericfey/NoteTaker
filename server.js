const http = require("http");
const fs = require("fs");

const PORT = 8080;

const handleRequest = (req, res) => {
  res.end("End.");
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
