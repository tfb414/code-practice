const ws = require('ws');
const server = new ws.Server({port: 8080});

server.on('connection', (socket)=>{
    console.log('someone connected!');
    socket.on('message', (msg)=>{
        console.log("They said: " + msg);
        server.clients.forEach((client)=> {
            socket.send("I know you are but what am I?");
            //this sends it to every website that has this open
        })
        
    });
});
//if you want to connect to the browser see below.

// let socket = new WebSocket('ws://localhost:8080');
// socket.onmessage = (msg) => console.log(msg);
// socket.send('hi there! I am so friendly!');

//this should be a separate file!! ^^^


//npm init -y
// npm install -g wscat
// wscat -c ws://localhost:8080