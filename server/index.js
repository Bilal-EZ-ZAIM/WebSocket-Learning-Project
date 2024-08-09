const express = require("express");
const path = require("path");
const http = require("http");
const socket = require("./socket/socket");
const app = express();
const port = 3000;
const session = require("express-session");
const bodyParser = require("body-parser");
const db = require("./config/db");

app.use(express.json()); // Middleware لتحليل JSON
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route for the home page
app.get("/", (req, res) => {
  res.render("index", { title: "Welcome to ChatApp" });
});




// Route for authentication
const authRoutes = require("./router/authRoutes");
app.use("/auth", authRoutes);

const server = http.createServer(app);

socket(server);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
