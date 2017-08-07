const EventEmitter = require('events').EventEmitter;
const myEE = new EventEmitter();
const request = require('request');

myEE.on('alert', (theData) =>{
    console.log(theData);
});

setInterval(()=> {
    require(URL, (data)=>{
        if(data.hasNews){
            myEE.emit('alert', data.payload);
        }
    })
}, 500);