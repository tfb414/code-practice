let jasmine = require('jasmine');
let { letterValue, wordValue, highestValueWord } = require('../highestScoringWord.js');
// import * as highestScoringWord from 'highestScoringWord';

describe('count a letter', () => {
    it('should return the correct value of one letter', () => {
        expect(letterValue('a')).toEqual(1);
    });
    it('should return the total value of the word', () => {
        expect(wordValue('timmy')).toEqual(80);
    })
    it('should return the word with the highest value', () => {
        expect(high('timmy is dumb indeed')).toEqual('timmy');
    })
})

console.log('test');

