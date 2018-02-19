let jasmine = require('jasmine');
let { letterValue } = require('../highestScoringWord.js');
// import * as highestScoringWord from 'highestScoringWord';

describe('count a letter', () => {
    it('should return the correct value of one letter', () => {
        console.log('test');
        expect(letterValue('a')).toEqual(1);
    });
})

console.log('test');

