let inputArguments = process.argv
inputArguments.shift();
inputArguments.shift();
var answer = inputArguments.reduce((sum, value)=>{
    return Number(sum) + Number(value);
})
console.log(answer);
