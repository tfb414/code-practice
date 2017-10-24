export const levelCreator = (level) => {
    // 
    //you could set up difficulties where if the level is between x-y then difficulty is blank
    //then you could weight it so that the easier criteria came at the start
    //rewrite algorithms so that there are a certain number of correct and incorrect responses possibly based on difficulty
    //there cannot be no correct answers

    let numberOfColorPairs;
    let time;
    let numberOfCorrect;
    if (level <= 2) {
        //from 0-2
        numberOfColorPairs = 4
        time = 8;
        numberOfCorrect = getRandomArbitrary(1, 2);
    }
    if (level > 2 && level < 5) {
        //from 3-5
        numberOfColorPairs = 6
        time = 10;
        numberOfCorrect = getRandomArbitrary(2, 4);
    }
    if (level >= 5) {
        //greater than 5
        numberOfColorPairs = 8
        time = 12;
        numberOfCorrect = getRandomArbitrary(3, 5);
    }


    let criteriaType = ['Click the Words whose color matches itself', 'Click all words whose color does not match itself', 'Click all words that are colored ', 'Click all words that are not colored '];
    let colors = ['blue', 'red', 'black', 'brown', 'yellow', 'purple', 'orange'];


    generatePairs = (colors, numberOfColorPairs, criteriaType) => {

        let colorLength = colors.length - 1;
        // let criteriaTypeNumber = getRandomArbitrary(0, 2);
        let criteriaTypeNumber = getRandomArbitrary(0, 2)
        let singleColor = colors[getRandomArbitrary(0, colorLength)];
        let criteriaMessage = criteriaType[criteriaTypeNumber];
        var i;


        let colorPairs = [];
        // for (i = 0; i < numberOfColorPairs; i++) {
        //     colorPairs.push(createUnmatchedPairs())

        //     colorPairs.push(executeCriteriaType(criteriaTypeNumber, color1, color2, singleColor));
        // }

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
                colorPairs.push(createCertainColorPair(colorLength, singleColor));
            }
            while (colorPairs.length < numberOfColorPairs) {
                colorPairs.push(createNonSingleColor(colorLength, singleColor, false))
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
        let color1 = colors[getRandomArbitrary(0, colorLength)];
        return [color1, color1, trueOrFalse];
    }

    function createUnmatchedPairs(colorLength, trueOrFalse) {
        let num1 = getRandomArbitrary(0, colorLength);
        let num2 = getRandomArbitrary(0, colorLength);
        while (num1 === num2) {
            num2 = getRandomArbitrary(0, colorLength);
        }
        let color1 = colors[num1];
        let color2 = colors[num2];
        return [color1, color2, trueOrFalse];
    }

    function createCertainColorPair(colorLength, singleColor) {
        let num1 = getRandomArbitrary(0, colorLength);
        let color1 = colors[num1];
        let color2 = singleColor;
        return [color1, color2, true];
    }

    function createNonSingleColor(colorLength, singleColor, trueOrFalse) {
        let num1 = getRandomArbitrary(0, colorLength);
        let num2 = getRandomArbitrary(0, colorLength)
        while (num2 === singleColor) {
            num2 = getRandomArbitrary(0, colorLength);
        }
        let color1 = colors[num1];
        let color2 = colors[num2];
        return [color1, color2, trueOrFalse];
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

    console.log(generatePairs(colors, numberOfColorPairs, criteriaType));
    return generatePairs(colors, numberOfColorPairs, criteriaType)

}





