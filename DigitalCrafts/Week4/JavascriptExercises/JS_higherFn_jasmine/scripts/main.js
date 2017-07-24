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

function makeReducerProduct(fn){
    return function (array){
        return array.reduce(fn);
    }
}

function makeReducerTotal(fn){
    return function (array){
        return array.reduce(fn, 0);
    }
}

function calculateTotal(runningTotal, currentElement){
    return runningTotal + currentElement["price"];
}

function calculateProduct(runningTotal, currentElement){
    return runningTotal * currentElement;
}
function isPositive(n){
    return n > 0;
}
function isEven(n){
    return n % 2 === 0;
}
function squareIt(n){
    return n * n;
}

// var getTemp = get('temperature');
// var lessThan70 = isCoolerThan(70);
// var city = get('name');

function isCoolerThan(threshold){
    return function(tempOfCity){
        return tempOfCity < threshold;
    }
}
function returnCoolCities(cities){
    return cities.filter(isCoolerThan).map(getTemp);
    // return cities.map(get('name'));
}

function get(propName){
    return function (obj){
        return obj[propName];
    }
}
function getName(obj){
    return obj.name;
}
function getTemp(obj){
    return obj.temperature;
}

function addCongrats(peep){
    return "good job, " + peep + "!"
}

function addLineBreak(peep){
    return peep + '\n';
}

function printCongratualatedPeeps (peepArray){
    return peepArray.map(addCongrats).map(addLineBreak);
}

function congratulatePeeps(peepArray){
    return peepArray.map(function(peep){
        return "good Job, " + peep + "!";
    })
}
function formatPeeps(peepArray){
    return peepArray.map(function(peep){
        return peep + '\n';
    })
}

function printGreeting(person){
    return ("hello " + person);
}
function returnGreetings(fn){
    return fn.map(printGreeting);
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

function strJoin(strings, sep){
    return strings.reduce(function (tally, str){
        return tally + sep + str;
    }
)}

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

// do this again with reduce

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
        returnPrice:returnPrice,
        addSep:addSep,
        addSepV2:addSepV2,
        returnTotal: returnTotal,
        returnGreetings: returnGreetings,
        returnCoolCities: returnCoolCities,
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
        makeReducerTotal: makeReducerTotal,
        makeReducerProduct: makeReducerProduct,
        calculateProduct: calculateProduct,
        calculateTotal: calculateTotal,
        isCoolerThan: isCoolerThan,
        get:get,
        
    }
}


