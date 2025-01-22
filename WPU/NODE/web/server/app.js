// const http = require("http");
import http from "http";
import fs from "fs";

const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.writeHead(200, { "Content-Type": "text/html" });

    const url = req.url;

    switch (url) {
      case "/home":
        renderHTML("./index.html", res);
        break;
      case "/contact":
        renderHTML("./html/contact.html", res);
        break;
      default:
        res.write(`<h1>404</h1>`);
        res.end();
    }

    // if (url === "/home") {
    //   renderHTML("./index.html", res);
    // } else if (url === "/contact") {
    //   renderHTML("./html//contact.html", res);
    // } else {
    //   res.write(`<h1>404</h1>`);
    //   res.end();
    // }
  })
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });