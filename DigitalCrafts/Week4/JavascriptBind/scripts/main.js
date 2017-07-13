let person = {
  name: 'bob',
  speak: function() {
    return this.name
  }
}

console.log(person.speak()) // bob

/*************************************/

let person2 = {
  name: 'sally',
  speak: function() {
    return this.name
  }
}

console.log(person2.speak.bind(person)()) // bob

/*************************************/

let prototype = {
  bind: function (bindingObj) {

    let fn = this; // fn refers to object that owns the running function call

    let args = Array.prototype.slice.call(arguments); // arguments is array-like. call array constructor to convert                                                       to real array... [bindingObj]

    let object = args.shift(); // extract obj out of array.. this obj is what the 'this' will be pointing to

    return () => () => fn.apply(object, args.concat(Array.prototype.slice.call(arguments)))
  }
}

let person3 = Object.create(prototype)
person3.name = 'james'
person3.speak = function() {
  return this.name
}

console.log(person3.speak.bind(person2)()) // sally


