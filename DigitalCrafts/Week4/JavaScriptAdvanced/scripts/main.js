// function yell(n){
//     if(n > 0){
//         return yell(n-1) + "a";
//     }
//     else{
//         return "hiy";
//     }
// }

// var ninja = {
//   yell2: function yell(n){
//     return n > 0 ? yell(n-1) + "a" : "hiy";
//   }
// };
// console.assert( ninja.yell2(4) == "hiyaaaa", "Works as we would expect it to!" );

// var samurai = { yell: ninja.yell2 };
// var ninja = {};
// console.assert( samurai.yell(4) == "hiyaaaa", "The method correctly calls itself." );

// function tim(4){

// }

// var tim = function()

/*************************************/
// let vs var in block scoping
/*************************************/
let storage = {};
for (var i = 0; i < 5; i++) {
  storage['blah' + i ] = function () {
    console.log(i)
  }
}
console.log(storage['blah0']()) // 5
console.log(storage['blah1']()) // 5
console.log(storage['blah2']()) // 5
console.log(storage['blah3']()) // 5
console.log(storage['blah4']()) // 5

/*************************************/
let storage2 = {}
for (let i = 0; i < 10; i++) {
  storage2['blah2' + i ] = function () {
    console.log(i)
  }
}
console.log(storage2['blah20']()) // 0
console.log(storage2['blah21']()) // 1
console.log(storage2['blah22']()) // 2
console.log(storage2['blah23']()) // 3
console.log(storage2['blah24']()) // 4