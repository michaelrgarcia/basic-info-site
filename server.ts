import * as http from "node:http";

import { readFile } from "node:fs";

http
  .createServer((req, res) => {
    if (req.url === "/") {
      readFile("./pages/index.html", (err, data) => {
        if (err) {
          throw err;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);

        return res.end();
      });
    } else if (req.url === "/about") {
      readFile("./pages/about.html", (err, data) => {
        if (err) {
          throw err;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);

        return res.end();
      });
    } else if (req.url === "/contact-me") {
      readFile("./pages/contact-me.html", (err, data) => {
        if (err) {
          throw err;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);

        return res.end();
      });
    } else {
      readFile("./pages/404.html", (err, data) => {
        if (err) {
          throw err;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);

        return res.end();
      });
    }
  })
  .listen(8080);
