const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', ()=> {
    it('should be able to save to the database', (done)=>{
        expect(1 + 1).to.equal(2);

        let myCustomer = new Customer('me', 'me@me.com', '123 me street', '123 me street', 'mememe');
        myCustomer
            .save()
            .then((result)=>{
                done();
            });
            
    });
});