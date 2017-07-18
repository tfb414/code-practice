var main = require("../scripts/main.js");

describe("does it work", function() {
  
  it("should return 'it works'", function() {
  
    var test = main.testIt();
    expect(test).toEqual("it works");
  });
});