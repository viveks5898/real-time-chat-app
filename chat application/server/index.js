const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIO = require("socket.io");
const { Socket } = require("dgram");
const app = express();
const server = http.createServer(app);
const port = 8000 || process.env.PORT;
const io = socketIO(server);
app.use(cors());
const users = [];
io.on("connection", (socket) => {
  console.log("New Connection");
  socket.on("Joined", (data) => {
    users[socket.id] = data.user;
    data.user;
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined`,
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `welcome to chat ${users[socket.id]}`,
    });
  });
  socket.on("disconnects", () => {
    socket.broadcast.emit("leave", {
      user: "Admin",
      message: `${users[socket.id]} has left`,
    });
    console.log("user left");
  });
  socket.on("message", (message, id) => {
    io.emit("sendmessage",{ user:users[id], message, id });
  });
});
app.get("/", (req, res) => {
  res.send("Server is working");
});
server.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
