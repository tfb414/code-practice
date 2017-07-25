var main = require("../main.js");

describe("check index of a single value", function() {
  var word = "a";

  it("should return 0", function() {
    
    var testIt = main.findIndexOfVowel(word);
    expect(testIt).toEqual([0]);
  });
});
describe("return the indices of all vowels in a word", function() {
  var word = "abbae";

  it("should return [0, 3, 4]", function() {
    
    var testIt = main.findIndexOfVowel(word);
    expect(testIt).toEqual([0, 3, 4]);
  });
});