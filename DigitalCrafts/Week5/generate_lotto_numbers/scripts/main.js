var LOTTO_DISPLAY_SELECTOR = '[data-target="lotto-display"]';
var LOTTO_SPACE_SELECTOR = '[data-target="lotto-space"]';
var LOTTO_TOP_LEVEL_SELECTOR = '[data-target="top-level"]';
var NEW_NUMBERS_BUTTON_SELECTOR = '[data-target=new-numbers-button]';
var ALL_LOTTO_SPACE = '[data-target="all-lottos-numbers"]'


var arrayOf69 = createArrayOfNumbers(69);
var arrayOf26 = createArrayOfNumbers(26);
var button = document.querySelector('button');

function setLottoNumber(num, element){
    element.textContent = num;
}
function chooseARandomNumber(range){
    var random = Math.floor(Math.random() * range);
    return random;
}
function createArrayOfNumbers(totalNumbers){
    var arrayOfNumbers = Array(totalNumbers).fill(totalNumbers);
    totalNumbers += 1
    var arrayOfNumbers = arrayOfNumbers.map(function(){
        if (totalNumbers > 1){
            totalNumbers -= 1;
            return totalNumbers;
        }
    })
    return arrayOfNumbers;
}

function addElements(selector, whereToAppend){
    var originalElement = document.querySelector(selector)
    var clone = originalElement.cloneNode(true);
    document.querySelector(whereToAppend).appendChild(clone);
}

function chooseLottoNumbers(arrayOfNumbers, dictionary, lengthThreshold){
    while (Object.keys(dictionary).length < lengthThreshold){
        var randomIndex = chooseARandomNumber(arrayOfNumbers.length)
        if(!(randomIndex in dictionary)){
            dictionary[randomIndex] = true;
        }
    }
    return dictionary;
    
}

function getArrayOf(selector){
    var nodes = document.querySelectorAll(selector);
    var thingsArray = [].slice.call(nodes);
    return thingsArray;
}

function createLottoArray(){
    var firstFiveObject = {};
    var lastTwoObject = {};
    var firstFive = chooseLottoNumbers(arrayOf69, firstFiveObject, 5);
    var lastTwo = chooseLottoNumbers(arrayOf26, lastTwoObject, 1);
    return Object.keys(firstFive).concat(Object.keys(lastTwo));
}

function createEventListener(item, fnToRun){
    item.addEventListener("click", function(event){
        event.preventDefault();
        fnToRun(item);
    })
}

function generateLottoNumbers(){
    var lottoArray = createLottoArray();
    var orangeBoxes = getArrayOf(LOTTO_DISPLAY_SELECTOR);
    orangeBoxes.forEach(function(x, i){
        x.textContent = lottoArray[i];
    })
    
}

function initialize(){
    generateLottoNumbers();
    createEventListener(button, generateLottoNumbers);
}


initialize();

addElements(LOTTO_SPACE_SELECTOR, ALL_LOTTO_SPACE);


//grab the data-taret ="lotto-space" then create and append that below.


