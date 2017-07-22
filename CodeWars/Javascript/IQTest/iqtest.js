function iqTest(numbers){
    numbers = numbers.split(" ");
    var evenNumbers = numbers.filter(function(num){
        return num % 2 == 0;
    });
    var oddNumbers = numbers.filter(function(num){
        return num % 2 !== 0;
    });
    if (evenNumbers.length > 1){
        return numbers.indexOf(oddNumbers[0]) + 1;
    }
    return numbers.indexOf(evenNumbers[0]) + 1;

}



iqTest("2 4 7 8 10");