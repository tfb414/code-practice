
function isPositive(n){
    return n > 0;
}
function returnIsPositive(array){
    return array.filter(isPositive);
}

function isEven(n){
    return n % 2 === 0;
}
function returnIsEven(array){
    return array.filter(isEven);
}
function squareIt(n){
    return n * n;
}
function returnSquareIt(array){
    return array.map(squareIt);
}
function isCoolerThan(obj){
    return obj.temperature < 70;
}
function returnCoolCities(city){
    // console.log(city.filter(isCoolerThan).map(getName));
    return city.filter(isCoolerThan).map(getName);
}

function returnCoolCitiesObject(obj){
    return obj.filter(isCoolerThan);
}
function getName(obj){
    return obj.name;
}

function printGreeting(person){
    return ("hello " + person);
}
function returnGreetings(fn){
    return fn.map(printGreeting);
}
function productMaker(a, b){
    return a * b;
}
function returnProduct(data){
    return data.reduce(productMaker);
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
        isCoolerThan: isCoolerThan,
        getName: getName,
        printGreeting: printGreeting,
        productMaker: productMaker,
        returnPrice:returnPrice,
        addSep:addSep,
        addSepV2:addSepV2,
        returnTotal: returnTotal,
        returnProduct: returnProduct,
        returnGreetings: returnGreetings,
        returnCoolCities: returnCoolCities,
        
        returnIsPositive: returnIsPositive,
        returnIsEven: returnIsEven,
        returnSquareIt: returnSquareIt,
        returnCoolCitiesObject: returnCoolCitiesObject,
    }
}

