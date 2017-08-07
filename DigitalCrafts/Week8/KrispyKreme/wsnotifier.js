
const ws = require('ws');

const PORT = 8080; // Put in a real port number
let wsServer;

class Notifier {
  constructor(topic, callback){
    super();
    this.restaurant
    this.topic = topic;
    this.wsServer = new ws.Server({port: 8080}));
    this.wsServer.on('connection', (socket) => {
      callback(socket);
    });
  }
  broadcast(message){
    this.wsServer.clients.forEach((client)=>{
      client.send(this.topic + 'said: ' + message);
    });
  }
}










// -----------------

// THIS IS THE PROTOTYPE VERSION

// function Notifier(callback){
//   this.wsServer =  new ws.Server({ port: PORT });

//   // Whatever callback gets passed in
//   // It has access to the socket
//   wsServer.on('connection', (socket) => {
//     // printMSG(socket);
//     console.log("you made it!");
//   })
// }

// Notifier.prototype.broadcast (message) {
//   this.wsServer.clients.forEach((client)=>{
//     client.send(message);
//   });
// }

//let myNotifier = new Notifier();

// module.exports = Notifier;


// -----------------





// THIS IS WITHOUT CLASSESS

// const ws = require('ws');

// const PORT = 8080; // Put in a real port number
// let wsServer;

// function broadcast (message) {
//   wsServer.clients.forEach((client)=>{
//     client.send(message);
//   });
// }



// function init(callback) {
//   wsServer =  new ws.Server({ port: PORT });

//   // Whatever callback gets passed in
//   // It has access to the socket
//   wsServer.on('connection', (socket) => {
//     // printMSG(socket);
//     console.log("you made it!");
//   })
// }




// module.exports = {
//   broadcast: broadcast,
//   init: init
 
// };

