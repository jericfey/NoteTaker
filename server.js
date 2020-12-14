const http = require("http");
const fs = require("fs");

const PORT = 8080;

const handleRequest = (req, res) => {
  // Here we use the fs package to read our index.html file
  fs.readFile(`${__dirname}/public/index.html`, (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
