const express = require('express');
const http = require('http');
const path = require('path');

const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);

const io = socketio(server);

const publicDir = path.join(__dirname, './public');

app.use(express.static(publicDir));



    //res.sendFile(__dirname)
    console.log(path.join(publicDir))

    let count = 0;

io.on('connection', (socket) => {
console.log('a user connected');

socket.emit('countUpdated',  count)

socket.on('increment', () => {
count++
 //socket.emit('countUpdated', count)
 io.emit('countUpdated', count);
})
});

server.listen(4000, () => {
  console.log('Server up and running on port 4000');
});