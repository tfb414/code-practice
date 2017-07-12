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
let storage = [];
(function() {
  for (var i = 0; i < 10; i++) {
    storage.push(i)
  }
  console.log(storage);
  console.log(i);
}());

/*************************************/
let storage2 = [];
(function() {
  for (let i = 0; i < 10; i++) {
    storage2.push(i)
  }
  console.log(storage2);
//   console.log(i);
}());