const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server)

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', socket => {
   console.log('New Connection');

   socket.emit('message', "Welcome to CheatChat!")
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
