var main = require("../scripts/main.js");


describe("testing positives", function() {
  var nums = [1,2,3,4,5,-6,-7,-8];

  it("should return 5 positive values when given [1,2,3,4,5,-6,-7,-8]", function() {
  
    var positive = main.makeFilter(main.isPositive);
    expect(positive(nums)).toEqual([1,2,3,4,5]);
  });
});

describe("testing even numbers", function() {
  var nums = [1,2,3,4,5,-6,-7,-8];

  it("should return even values when given [1,2,3,4,5,-6,-7,-8]", function() {
    // var even = nums.filter(main.isEven);
    var even = main.makeFilter(main.isEven);
    expect(even(nums)).toEqual([2,4,-6, -8]);
  });
});

describe("Squaring numbers", function() {
  var nums = [1,2,3,4,5,-6,-7,-8];

  it("should square all numbers in an array when given [1,2,3,4,5,-6,-7,-8]", function() {
    // var squared = nums.map(main.squareIt);
    var squared = main.makeMapper(main.squareIt);
    expect(squared(nums)).toEqual([1, 4, 9, 16, 25, 36, 49, 64]);
  });
});

describe("testing cities whose temp is cooler than 70 degrees", function() {
  var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

  it("should return a list of the cities in an array whose temperatures are less than 70 degrees", function() {
    var coolerThanSeventy = main.returnCoolCitiesObject(cities);

    expect(coolerThanSeventy).toEqual([
      { name: 'Los Angeles', temperature: 60.0},
      { name: 'Atlanta', temperature: 52.0 },
      { name: 'Detroit', temperature: 48.0 }
    ]);
  });
});

describe("derp return a list of just the names of the cities who's temperature is less than 0 degrees", function() {
  var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

  it("derp should return a list of the cities in an array whose temperatures are less than 70 degrees", function() {
    
    var finalCityDisplay = main.returnCoolCities(cities)

    expect(finalCityDisplay).toEqual(['Los Angeles', 'Atlanta','Detroit']);
  });
});

describe("return a list of just the names of the cities who's temperature is less than 0 degrees", function() {
  var people = [ 'Dom', 'Lyn', "Tim"];

  it("should print out 'Good Job, {name}' for each persons's name" , function() {
    
    var greetThem = main.returnGreetings(people);

    expect(greetThem).toEqual(["hello Dom", "hello Lyn", "hello Tim"]);
  });
});

describe("product maker", function() {
  var arrayOfNumbers = [1,2,3,4,5];

  it("should return an array of numbers and returns a product of those numbers" , function() {
    
    var finalProduct = main.returnProduct(arrayOfNumbers)

    expect(finalProduct).toEqual(120);
  });
});

describe("list total price", function() {
  var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

    it("should return the total price of all items in the shopping cart" , function() {
      
      var totalPrice = main.returnTotal(products);
      expect(totalPrice).toEqual(96);
    });
});

describe("Joins together strings with the seperator between them without using .join", function() {
  var stuffToCombine = ["Tim", "is", "the", "dumbest"]
  var sep = "-"
  

  it("should return a str with the strings combined with the combiner" , function() {
    
  
    var finalString = main.addSep(stuffToCombine, sep);
    

    expect(finalString).toEqual("Tim-is-the-dumbest");
  });
});

describe("Joins together strings with the seperator between them without using .join in an easier 'fashion'", function() {
  var stuffToCombine = ["Tim", "is", "the", "coolest"]
  var sep = "-"
  

  it("should return a str with the strings combined with the combiner" , function() {
    
    var finalString = main.addSepV2(stuffToCombine, sep);

    expect(finalString).toEqual("Tim-is-the-coolest");
  });
});

describe("creates a function acronym that takes an array of words and returns the acronym for the words", function() {
  var stuffToCombine = ['national', 'aeronautics', 'space', 'administration'];
  var sep = "";
  

  it("should return the acronym NASA when given '['national', 'aeronautics', 'space', 'administration']'" , function() {
    
    var finalAcro = main.returnAcronym(stuffToCombine)

    expect(finalAcro).toEqual("nasa");
  });
});

describe("a function that takes two arguments. A string to multiply and the number of times", function() {
  var str = "derp";
  var times = 3;
  

  it("should return a concatenated str'" , function() {
    
    var finalString = main.concatStr("derp", 3);

    expect(finalString).toEqual("derpderpderp");
  });
});

describe("a function that takes two arguments and returns a box based on the width and height", function() {
  var width = 3;
  var height = 3;
  

  it("should return a box'" , function() {
    
    var box = main.createBox(width, height);

    expect(box).toEqual("***\n***\n***");
  });
});

describe("a function to sort an array", function() {
  var people = ["Tim", "Nate", "Luke"];
  

  it("should sort [TIm, Nate, Luke] into [Luke, Nate, Tim]'" , function() {
    
    var alphaPeople = main.sortAlpha(people);

    expect(alphaPeople).toEqual(['Luke', 'Nate', 'Tim']);
  });
});

describe("a function to sort an array", function() {
  var people = ["1234", "123", "12"];
  

  it("should sort [1234, 123, 12] into [12, 123, 1234]'" , function() {
    
    var lengthPeople = main.sortByLength(people);

    expect(lengthPeople).toEqual(['12', '123', '1234']);
  });
});

describe("a function to sort an array with an object inside of it", function() {
  var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];
  

  it("should products by price'" , function() {
    
    var sortedProducts = main.objectSorter(main.sortByPrice);

    expect(sortedProducts(products)).toEqual([
      { name: 'Basketball', price: 12 }, 
      { name: 'Tennis Racquet', price: 66 }, 
      { name: 'Tennis Balls', price: 9 }, 
      { name: 'Tennis Balls', price: 9 }
    ]);
  });
});

describe("a function to sort an array with an object inside of it", function() {
  var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];
  

  it("should products by price'" , function() {
    
    var sortedProducts = main.objectSorter(main.sortByPrice);

    expect(sortedProducts(products)).toEqual([
      { name: 'Basketball', price: 12 }, 
      { name: 'Tennis Racquet', price: 66 }, 
      { name: 'Tennis Balls', price: 9 }, 
      { name: 'Tennis Balls', price: 9 }
    ]);
  });
});