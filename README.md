# Getting-started-with-socket.io

Socket.io framework enables a communication between clients and servers. I created a button on HTML and whenever it clicks, it counts and updates on the console on the web. 

we need these constants for the event:
const http = require('http');
const exress = require('express');
const socketio = require('socket.io');
const port = process.env.PORT || 3000

const path = require('path');
const app = exress();
const server = http.createServer(app);
const io = socketio(server);

In oreder not to lose the public path we can console log the path as below:
const publicDir = path.join(__dirname,'./public');

app.use(exress.static(publicDir));
//console.log(path.join(__dirname,'./public'));

In order to update multi clients on the web. I wrote    io.emit('countUpdated', count);  istead of socket.emit('countUpdated',
count);

I tried to make it simple and understandble.

