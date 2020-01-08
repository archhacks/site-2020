//const mysql = require('mysql')
const express = require('express')
const app = express()
const http = require("http")
//const session = require('express-session')
//const MemoryStore = require('memorystore')(session)
const path = require('path')

const server = http.Server(app)
const io = require('socket.io')(server)

server.listen(3456);
//HANDLE AJAX REQUESTS
app.use(express.json());

app.use("/client", express.static(__dirname + '/client'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'));
});

io.on("connection", (socket) => {
    
});