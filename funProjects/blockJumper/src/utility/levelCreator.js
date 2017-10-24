export const levelCreator = (level) => {

    //you could set up difficulties where if the level is between x-y then difficulty is blank
    //then you could weight it so that the easier criteria came at the start
    //rewrite algorithms so that there are a certain number of correct and incorrect responses possibly based on difficulty
    //there cannot be no correct answers

    let numberOfColorPairs;
    let time;
    let numberOfCorrect;
    console.log(level);
    console.log('level creator')
    if (level <= 2) {
        //from 0-2
        numberOfColorPairs = 4
        time = 8;
        numberOfCorrect = getRandomArbitrary(1, 3);
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
        numberOfCorrect = getRandomArbitrary(3, 6);
    }


    let criteriaType = ['Click the Words whose color matches itself', 'Click all words whose color does not match itself', 'Click all words that are colored:  '];
    let colors = ['blue', 'red', 'black', 'brown', 'yellow', 'purple', 'orange'];


    generatePairs = (colors, numberOfColorPairs, criteriaType) => {
        console.log('did this work')
        let colorLength = colors.length - 1;
        let criteriaTypeNumber = getRandomArbitrary(0, 2);
        let singleColor = colors[getRandomArbitrary(0, colorLength)];
        var i;

        let colorPairs = [];
        for (i = 0; i < numberOfColorPairs; i++) {
            let color1 = colors[getRandomArbitrary(0, colorLength)];
            let color2 = colors[getRandomArbitrary(0, colorLength)];
            colorPairs.push(executeCriteriaType(criteriaTypeNumber, color1, color2, singleColor));
        }
        if (criteriaTypeNumber === 2) {
            return [colorPairs, criteriaType[criteriaTypeNumber] + singleColor, time];
        } else {
            return [colorPairs, criteriaType[criteriaTypeNumber], time];
        }


    }



    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function sameColor(color1, color2) {
        let pair;
        if (color1 === color2) {
            pair = [color1, color2, true];
        }
        else {
            pair = [color1, color2, false];
        }
        return pair
    }

    function differentColor(color1, color2) {
        let pair;
        if (color1 !== color2) {
            pair = [color1, color2, true];
        }
        else {
            pair = [color1, color2, false];
        }
        return pair
    }

    function singleColorTest(color1, color2, singleColor) {
        let pair;
        if (color2 === singleColor) {
            pair = [color1, color2, true];
        } else {
            pair = [color1, color2, false];
        }
        return pair
    }

    function executeCriteriaType(criteriaTypeNumber, color1, color2, singleColor) {
        if (criteriaTypeNumber === 0) {
            return sameColor(color1, color2);
        }
        if (criteriaTypeNumber === 1) {
            return differentColor(color1, color2);
        }
        if (criteriaTypeNumber === 2) {
            return singleColorTest(color1, color2, singleColor);
        }
    }

    return generatePairs(colors, numberOfColorPairs, criteriaType)
    // return [['red', "blue", true], ['red', "green", false], ['yellow', "blue", true], ['black', "purple", false]];
}


