const express = require('express');
const webapp = express();
const Customer = require("./customer")

webapp.get('/', (req, resp) => {
    Customer
    .get(1)
    .then((myCustomer)=>{
        resp.end(JSON.stringify(myCustomer));
    }).catch((err)=>{
        console.log(err);
        resp.end(`<h1>Sorry! I'm so sorry</h1>`)
    })
});

webapp.get('/cats', (req, resp) => {
    
        
    });

//type node --inspect-brk index.js then go to chrome://inspect/#devices to check this out

webapp.listen(5000, () =>{
    console.log("we're listening on 5000")
});