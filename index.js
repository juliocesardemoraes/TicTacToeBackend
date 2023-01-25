const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("mark_checked", (data) => {
    data.player = 1;
    console.log(data);
    socket.broadcast.emit("chosen_mark", data);
    //socket.to(data.room).emit("receive_message", data);
  });

  socket.on("next_turn_chosen", (data) => {
    console.log(data);
    socket.broadcast.emit("next_turn", data);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
