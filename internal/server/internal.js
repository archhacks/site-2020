const mysql = require('mysql')
const express = require('express')
const app = express()
const http = require("http")
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const path = require('path')


//TODO MySQL
let connection = mysql.createConnection({
    host: "ec2-18-191-88-213.us-east-2.compute.amazonaws.com",
    user: "phpUserMan",
    password: "electricitySuperZap!",
    database: "poker"
});

const server = http.Server(app)
const io = require('socket.io')(server)

server.listen(3456);
//HANDLE AJAX REQUESTS
app.use(express.json());

const sessionStuff = session({
  secret: "oZB9BxA1MJvawT2D014!1CeY2P6mqG3HbggT9RV5EqMWdqQVRXzp6bDNjC3UnXzQgw6pCkEOY6JIJInuni*Uh8ihJiiKKJBsdfB43859yj4UNJNIJvBSEuZ",
  store: new MemoryStore,
  resave: false,
  saveUninitialized: false
});

app.use(sessionStuff);
io.use((socket, next) => {
  sessionStuff(socket.request, socket.request.res, next)
})