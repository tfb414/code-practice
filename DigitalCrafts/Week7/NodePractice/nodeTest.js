let cat = {
    name: 'oakley',
    speak: function(){
        return 'meow'
    }
}

module.exports = cat;

//var aCat = require("./nodeTest")
//I did this in node in the terminal

module.exports = {
    name: 'oakley',
    speak: function(){
        return 'meow'
    }
}

//const is for identifiers that I never want to reassign and can't
//const can't be reassigned but it can be mutated

// const wonderWoman = {
//     isAwesome: true;
// }

// wonderWoman.hasLasso = true;

//const is good for functions and modules