const express = require("express");
const path = require("path");
const http = require("http");
const socket = require("socket.io");

const app = express();
const port = 3000;
app.use(express.json()); // Middleware لتحليل JSON
const server = http.createServer(app);

// تعيين المجلد الذي يحتوي على ملفات static (مثل HTML و CSS و JS)
app.use(express.static(path.join(__dirname, "public")));

const io = socket(server);

io.on("connection", (socket) => {
  console.log("new user is coonected ");
});

// بدء تشغيل الخادم
server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
