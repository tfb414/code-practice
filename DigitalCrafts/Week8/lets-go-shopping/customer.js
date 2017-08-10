require('dotenv').config();
const pg = require('pg-promise')();
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
};

// const db = ;

class Customer{
    constructor(name, email, addr, password){
        this.db = pg(dbConfig);
        this.name = name;
        this.email = email;
        this.addr = addr;
        this.password = password;
    }
    save(){
        return this.db.query(`
            insert into customers
            (name, email, address, password)
            values
            ('${this.name}', '${this.email}', '${this.addr}', '${this.password}');
        `);
        //insert into customers is the column headings
        //insert into values are the actual values
    }
}

module.exports = Customer

// var db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
// })

