export const levelCreator = (level) => {
    // 
    //you could set up difficulties where if the level is between x-y then difficulty is blank
    //then you could weight it so that the easier criteria came at the start
    //rewrite algorithms so that there are a certain number of correct and incorrect responses possibly based on difficulty
    //there cannot be no correct answers

    let numberOfColorPairs;
    let time;
    let numberOfCorrect;
    let criteriaTypeNumber = getRandomArbitrary(0, 2);
    // let criteriaTypeNumber = 0;

    if (level <= 2) {
        //from 0-2
        numberOfColorPairs = 6
        time = 10;
        numberOfCorrect = getRandomArbitrary(2, 3);
    }
    if (level > 2 && level < 5) {
        //from 3-5
        numberOfColorPairs = 8
        time = 11;
        numberOfCorrect = getRandomArbitrary(3, 4);
    }
    if (level >= 5) {
        //greater than 5
        numberOfColorPairs = 10
        time = 12;
        numberOfCorrect = getRandomArbitrary(4, 6);
    }


    let criteriaType = ['Click if the word matches the color', 'Click if the word does NOT match the color', 'Click all boxes that are colored ', 'Click all words that are not colored '];
    let colorHex = ['#1C86EE', '#ff0000', '#000000', '#614126', '#FFA500', '#551A8B', '#458B00'];
    let colorName = ['Blue', 'Red', 'Black', 'Brown', 'Orange', 'Purple', 'Green'];


    generatePairs = () => {

        let colorLength = colorHex.length - 1;
        let index = getRandomArbitrary(0, colorLength)

        let singleColor = colorName[index];
        let singleColorHex = colorHex[index];
        let criteriaMessage = criteriaType[criteriaTypeNumber];
        var i;

        let colorPairs = [];



        if (criteriaTypeNumber === 0) {
            for (i = 0; i < numberOfCorrect; i++) {
                colorPairs.push(createMatchedPairs(colorLength, true));
            }
            while (colorPairs.length < numberOfColorPairs) {
                colorPairs.push(createUnmatchedPairs(colorLength, false));
            }


        }

        if (criteriaTypeNumber === 1) {
            for (i = 0; i < numberOfCorrect; i++) {
                colorPairs.push(createUnmatchedPairs(colorLength, true));
            }
            while (colorPairs.length < numberOfColorPairs) {
                colorPairs.push(createMatchedPairs(colorLength, false));
            }

        }

        if (criteriaTypeNumber === 2) {
            for (i = 0; i < numberOfCorrect; i++) {
                colorPairs.push(createCertainColorPair(colorLength, singleColor, singleColorHex));
            }
            while (colorPairs.length < numberOfColorPairs) {
                colorPairs.push(createNonSingleColor(colorLength, singleColor, false, index))
            }
            criteriaMessage = criteriaType[criteriaTypeNumber] + singleColor
        }
        colorPairs = shuffleArray(colorPairs);
        return [colorPairs, criteriaMessage, time];

    }

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function createMatchedPairs(colorLength, trueOrFalse) {
        let index = getRandomArbitrary(0, colorLength)
        let color = colorHex[index];
        let colorText = colorName[index]
        //you need to fix this
        //it is only running the random thing one time instead of a million times
        return [colorText, color, trueOrFalse];
    }

    function createUnmatchedPairs(colorLength, trueOrFalse) {
        let num1 = getRandomArbitrary(0, colorLength);
        let num2 = getRandomArbitrary(0, colorLength);
        while (num1 === num2) {
            num2 = getRandomArbitrary(0, colorLength);
        }
        let color = colorHex[num1];
        let colorText = colorName[num2];
        return [colorText, color, trueOrFalse];
    }

    function createCertainColorPair(colorLength, singleColor, singleColorHex) {
        let num1 = getRandomArbitrary(0, colorLength);

        let color = singleColorHex;
        let colorText = colorName[num1];
        return [colorText, color, true];
    }

    function createNonSingleColor(colorLength, singleColor, trueOrFalse, index) {
        let num1 = getRandomArbitrary(0, colorLength);
        let num2 = getRandomArbitrary(0, colorLength);
        while (num1 === index) {
            num1 = getRandomArbitrary(0, colorLength);
        }
        let color = colorHex[num1];
        let colorText = colorName[num2];
        return [colorText, color, trueOrFalse];
    }


    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    // function createListOfPairs(correctAnswer, incorrectAnswer, colorPairs) {
    //     console.log(correctAnswer);
    //     for (i = 0; i < numberOfCorrect; i++) {
    //         colorPairs.push(correctAnswer);
    //     }
    //     while (colorPairs.length < numberOfColorPairs) {
    //         colorPairs.push(incorrectAnswer);
    //     }
    //     return colorPairs
    // }
    return generatePairs()

}





