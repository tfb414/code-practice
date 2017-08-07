const EventEmitter = require('events').EventEmitter;
// const request = require('request');

class FoodPlace extends EventEmitter{
  constructor(name, URL, on, off){
    super();
    this.name = name;
    this.on = on;
    this.off = off;
    this.URL = URL;

    setInterval(()=> {
      this.getUpdate();
    }, 1000);
  }
  AddListener(event, callback) {
    this.on(event, callback);
  }
  //we want food place to itself to be an event emitter
  //so I added extends eventEmitter

  getUpdate() {
    //this is an ajax request
    request.get(this.URL, (data)=>{
      this.emit(data);
    });
    //this is a fake API DON"T BE FOOLED!
  }
}

//let myFP = new FoodPlace("KrispyKreme", "hot", "none")
//myFP('hot', () => {does something});
//myFP('none', () => {does something});





// _________________
// THIS IS THE OLD WAY

// const EventEmitter = require('events').EventEmitter;
// const myEE = new EventEmitter();

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }



// setInterval(() => {
//   // console.log('setInterval')
//   let event;
//   if (isEven(getRandomInt(1, 100))) {
//     // the above if statement could going to my sensor if the change is greater than 1 degree it emits
//     event = 'hot-donuts-now';
    
//   } else {
//     event = 'no-donuts';
//   }
//   // console.log(event);
//   myEE.emit(event);
// }, 1000);

// function addHotListener(callback) {
//   myEE.on('hot-donuts-now', callback);
// }

// function addNoneListener(callback) {
//   myEE.on('no-donuts', callback);
// }

// module.exports = {
//   addHotListener: addHotListener,
//   addNoneListener: addNoneListener
//   //export the server info
// };