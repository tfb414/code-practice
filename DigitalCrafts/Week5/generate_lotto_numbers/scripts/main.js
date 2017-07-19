var testText = document.createElement("div");
document.body.appendChild(testText);
var div = document.querySelector("div");
div.textContent = createArrayOfNumbers(69)


var numbersInLotto = createArrayOfNumbers(69);
var firstFiveLottoArray = [0,0,0,0,0]

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

function chooseLottoNumber(numbersInLotto, lottoArray){
    lottoArray.map(function(x){
        var randomIndex = chooseARandomNumber(numbersInLotto.length);
        
        if(lottoArray.indexOf(numbersInLotto[randomIndex])){
            console.log(numbersInLotto[randomIndex]);
        return numbersInLotto[randomIndex];
        
        console.log(numbersInLotto[randomIndex]);
        }
    })    
}



chooseLottoNumber(numbersInLotto, firstFiveLottoArray);

    

