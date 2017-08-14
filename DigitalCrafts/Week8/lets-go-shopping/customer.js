const db = require("./db");

// const db = ;

class Customer{
    constructor(name, email, addr, password){
        
        this.name = name;
        this.email = email;
        this.addr = addr;
        this.password = password;
    }
    save(){

        if(this.customer_id){
            return db.one(`
                update customers 
                set
                    name=${this.name},
                    email=${this.email},
                    address=${this.address}
                where customer_id=${this.customer_id}
            `)
        }else{
            return db.one(`
                insert into customers
                (name, email, address, password)
                values
                ('${this.name}', '${this.email}', '${this.addr}', '${this.password}')
                returning customer_id;
            `);
        }

        
        //insert into customers is the column headings
        //insert into values are the actual values
    }
    static get(id){
        return db.one(`
            select customer_id, name, email, address
                from customers
                where customer_id = ${id}
        `).then((result)=> {
            let c = new Customer();
            c.customer_id = result.customer_id;
            c.name = result.name;
            c.email = result.email;
            c.address = result.address; 
            return c;
        })
    }
    
}

module.exports = Customer

// var db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
// })

