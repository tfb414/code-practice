var nums = [1,2,3,4,5];
function log(what) {
    console.log(what);
}
nums.forEach(log);
// ******

var nums = [1,2,3,4,5];

nums.forEach(function (what){
    console.log(what);
})

// *****

var nums = [1,2,3,4,5];
nums.forEach(function (what, i, arr){
    console.log(i + ": " what + " is part of " + arr);
});

// *****

var nums = [1,2,3,4,5];
var squares = [];

function square(n){
    return n*n;
}

nums.forEach(function (num){
    squares.push(square(num));
});

// ***

var nums = [1,2,3,4,5];
var squares = [];

function square(n){
    return n*n;
}

var squares = nums.map(square);

//you could use your javascript to change all of your anchor tag to be "target=_blank"

var nums = [1,-2,3,-4,5,-7,8,9,10];
var result = [];
function isPositive(num){
    return num >= 0;
}

var restult = nums.filter(isPositive);

