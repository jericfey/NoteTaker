const http = require("http");
const fs = require("fs");

const PORT = 8080;

// function to take a filepath and respond with html
const renderHTML = (filePath, res) => {
  return fs.readFile(`${__dirname}${filePath}`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

const handleRequest = (req, res) => {
  // Capture the url the request is made to
  const path = req.url;

  // When we visit different urls, call the function with different arguments
  switch (path) {
    case "/notes":
      return renderHTML(`/${path}.html`, res);

    default:
      return renderHTML("/index.html", res);
  }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
