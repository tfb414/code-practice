
function isPositive(n){
    return n > 0;
}
function isEven(n){
    return n % 2 === 0;
}
function squareIt(n){
    return n * n;
}
function coolCity(obj){
    return obj.temperature < 70;
}
function returnCityName(obj){
    return obj.name;
}
function printGreeting(person){
    return ("hello " + person);
}
function productMaker(a, b){
    return a * b;
}
function returnTotal(array){
    return array.map(returnPrice).reduce((a,b)=> a + b);

}

function returnPrice(obj){
    return obj.price
}
function addSep(array, sep){
    function derp(currentValue, index, array){
        if (array[index + 1] !== undefined){
            return (currentValue + sep);
        }
        return currentValue;
    }
    return array.map(derp).reduce((a,b)=>a+b);
}

function addSepV2(array, sep){
    return array.reduce((a,b)=>{
        if(a === ""){
            return a + b;
        }
        return a+sep+b;
    }, "");
}





if(typeof module !== "undefined"){
    module.exports = {
        isPositive:isPositive,
        isEven:isEven,
        squareIt:squareIt,
        coolCity: coolCity,
        returnCityName: returnCityName,
        printGreeting: printGreeting,
        productMaker: productMaker,
        returnPrice:returnPrice,
        addSep:addSep,
        addSepV2:addSepV2,
        returnTotal: returnTotal,
    }
}

