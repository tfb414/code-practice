const fs = require('fs');

// function yelp(what) {
//     return 'hey that ' + what;
// }

// const yelp = (function (what) => {
//     return "hey that " + what;
// }).bind(this);

//i don't think I quite understand what the this does.

var yelp = (what) => {
    return "hey that " + what;
}
//if there is only one parameter you don't need parens around "what"
//you don't even have to say return 
//curly braces are also optional

// fs.watch('README.md', function(event){
//     // console.log('ouchies!');
//     console.log(yelp('tickles'));
// });

fs.watch('README.md', (event) => {
    // console.log('ouchies!');
    console.log(yelp('tickles derp'));
    console.log(event);
});

//npm -init -y
//npm install --save nodemon

