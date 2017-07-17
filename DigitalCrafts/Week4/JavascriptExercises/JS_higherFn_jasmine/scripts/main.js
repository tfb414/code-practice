function makeFilter(fn){
    return function(array){
        return array.filter(fn);
    }
}

function makeMapper(fn){
    return function(array){
        return array.map(fn);
    }
}

function makeSorter(fn){
    return function(array){
        return array.sort(fn);
    }
}

function isPositive(n){
    return n > 0;
}


// derp = [1,2,3,4,-5,-6,-7];
// var positive = makeFilter(isPositive);
// console.log(positive(derp))
//I haven't used this, but chris did



function isEven(n){
    return n % 2 === 0;
}
function squareIt(n){
    return n * n;
}
function isCoolerThan(obj){
    return obj.temperature < 70;
}
function returnCoolCities(city){
    // return city.makeFilter(isCoolerThan).makeMapper(getName)
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

function getFirstLetter(word){
    firstLetter = word.split("");
    return firstLetter[0];
}

function returnAcronym(array){
    return array.map(getFirstLetter).reduce((a,b)=> a + b);
}

function concatStr(str, times){
    return times > 1 ? concatStr(str, times-1) + str : str;
}

//do this again with .reduce

function createBox(width, height){
    return height > 1 ? createBox(3, height-1) + "\n" + concatStr("*", width)  : concatStr("*", width);
}
function sortAlpha(array){
    return array.sort();
}
function sortByLength(array){
    return array.sort((a, b) => a.length > b.length);
}

function sortByPrice(arrayOfObjects){
    return arrayOfObjects.price.sort((a, b) => a > b);
}

function objectSorter(fn){
    return function (arrayOfObjects){
        return arrayOfObjects.sort(fn);
    }
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
        returnCoolCitiesObject: returnCoolCitiesObject,
        returnAcronym: returnAcronym,
        concatStr: concatStr,
        createBox: createBox,
        sortAlpha: sortAlpha,
        sortByLength: sortByLength,
        objectSorter: objectSorter,
        sortbyPrice: sortByPrice,
        makeFilter: makeFilter,
        makeMapper: makeMapper,
        makeSorter: makeSorter,
        
    }
}

