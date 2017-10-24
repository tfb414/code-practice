export const levelCreator = () => {

    let criteriaType = ['Click all words that are the same color as the word', 'click all the words that are not the same color as the word', 'click all the words that are colored '];
    let colors = ['blue', 'red', 'black', 'brown', 'yellow', 'purple', 'orange'];
    let numberOfColorPairs = 8;

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
            return [colorPairs, criteriaType[criteriaTypeNumber] + singleColor];
        } else {
            return [colorPairs, criteriaType[criteriaTypeNumber]];
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


