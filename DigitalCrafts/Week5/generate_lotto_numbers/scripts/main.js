var LOTTO_DISPLAY_SELECTOR = '[data-target="lotto-display"]';
var LOTTO_SPACE_SELECTOR = '[data-target="lotto-space"]';
var LOTTO_TOP_LEVEL_SELECTOR = '[data-target="top-level"]';
var NEW_NUMBERS_BUTTON_SELECTOR = '[data-target=new-numbers-button]';
var ALL_LOTTO_SPACE = '[data-target="all-lottos-numbers"]'


//get rid of the createArrayOfNumbers you don't need it!

var arrayOf69 = createArrayOfNumbers(10);
var arrayOf26 = createArrayOfNumbers(5);
var $button = $('button');
var $dropDownValue = $('[data-target="sets-of-numbers"]').val();


function setLottoNumber(num, element){
    element.textContent = num;
};
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
    var $originalElement = $(selector)
    var clone = $originalElement.clone(true);
    generateLottoNumbers()
    $(whereToAppend).append(clone);
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
    item.on("click", function(event){
        event.preventDefault();
        $dropDownValue = $('[data-target="sets-of-numbers"]').val();
        fnToRun();

        
    })
}

//I need to get rid of this and put it down in the initialize

function generateLottoNumbers(){
    
    var lottoArray = createLottoArray();
    var orangeBoxes = getArrayOf(LOTTO_DISPLAY_SELECTOR);
    orangeBoxes.forEach(function(x, i){
        x.textContent = lottoArray[i];
    })
    
}

function initialize(){
    createEventListener($button, generateLottoNumbers);
    
}
//you need to split it out so that it doens' thave to run "fnToRun"
// addElements(LOTTO_SPACE_SELECTOR, ALL_LOTTO_SPACE);

initialize();











