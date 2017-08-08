const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe("can do arithmetic", ()=>{
    describe("can add numbers", ()=>{
        it('can add two positive integers',()=>{
            expect(calc.add(1,1)).to.equal(2);
        });
        it('can add a number to zero',()=>{
            expect(calc.add(1,0)).to.equal(1);
        });
    });
    describe("can subtract numbers", ()=>{
        it('can subtract two positive integers',()=>{
            expect(calc.subtract(1,1)).to.equal(0);
        });
        it('can subtract two negative integers',()=>{
            expect(calc.subtract(-2,-2)).to.equal(0);
        });
        
    });
    describe("can multiply numbers", ()=>{
        it('can multiply two positive integers',()=>{
            expect(calc.multiply(5,5)).to.equal(25);
        });
        it('can multiply two negative integers',()=>{
            expect(calc.multiply(-2,-2)).to.equal(4);
        });
        
    });
    describe("can divide numbers", ()=>{
        it('can divide two positive integers',()=>{
            expect(calc.divide(10,2)).to.equal(5);
        });
        it('can divide two negative integers',()=>{
            expect(calc.divide(-10, 2)).to.equal(-5);
        });
        it('can divide a negative number by a negative number',()=>{
            expect(calc.divide(-10, -2)).to.equal(5);
        });
        it('can divide a positive number by a negative number',()=>{
            expect(calc.divide(10, -2)).to.equal(-5);
        });
    })
    describe("can add numbers asynchronously", ()=>{
        it('can add two integers asynchronously',(done)=>{
            calc.addAsync(3,2, (val) => {
                if(val === 5){
                    done();
                }else{
                    done(new Error('nope'));
                }
                
            });
            // expect(calc.addAsync(3,2, (val)=>{
                
            // })).to.equal(5);
        });
    });
});




//does this really only work with classes?

// describe("taking a first stab at TDD", ()=>{
//     it('should return 1', ()=>{

//         expect(1).to.equal(1);
//         expect(1).to.equal(-2);

//     })
// });

