"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const options = {
    root: path_1.default.join(__dirname, "./pages"),
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
