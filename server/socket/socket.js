const socket = require("socket.io");

module.exports = function (server) {
  const io = socket(server);

  io.on("connection", (socket) => {
    console.log("new user is connected ", socket.id);

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    socket.on("message", (data) => {
      console.log(data);
      io.emit("chat message", data);
    });

    socket.on("typ", (data) => {
      console.log(data);
      io.emit("chat message", data);
    });

    socket.on("typing", (data) => {
      console.log(data);
      socket.broadcast.emit("chat typing", data);
    });
  });
};
