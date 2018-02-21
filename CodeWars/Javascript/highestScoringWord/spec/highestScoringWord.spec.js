let jasmine = require('jasmine');
let { letterValue, wordValue } = require('../highestScoringWord.js');
// import * as highestScoringWord from 'highestScoringWord';

describe('count a letter', () => {
    it('should return the correct value of one letter', () => {
        expect(letterValue('a')).toEqual(1);
    });
    it('should return the total value of the word', () => {
        expect(wordValue('timmy')).toEqual(80);
    })
})

console.log('test');

