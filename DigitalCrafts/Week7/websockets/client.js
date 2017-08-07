let socket = new WebSocket('ws://localhost:8080');
socket.onmessage = (msg) => console.log(msg);
// socket.send('hi there! I am so friendly!');