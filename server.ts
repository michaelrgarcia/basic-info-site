import express from "express";
import path from "path";

const app = express();

const options = {
  root: path.join(__dirname, "./pages"),
};

app.get("/", (req, res) => {
  res.sendFile("index.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", options);
});

app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", options);
});

app.all("*", (req, res) => {
  res.status(404).sendFile("404.html", options);
});

app.listen(3000);
