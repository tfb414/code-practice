const pg = require('pg-promise')();

//const dbConfig = 'postgres://timbrady@localhost:5432/exercises';
//put this in a git ignore and call it
const dbConfig ={
    host: 'localhost',
    port: 5432,
    database: 'exercises',
    user: 'timbrady',
    //password: 'user-password'
}
const db = pg(dbConfig);


// wrap these in functions

function allFacilities(){
    return db.query('select * from cd.facilities;');
    //     .then((results)=> {
    //         console.log(results);
    //         return results;
    // });
}

// db.query('select * from cd.facilities;')
//     .then((results)=> {
//         console.log(results);
//         return results;
//     });

allFacilities().then(
    (results) => {
        for (let r of results){
            console.log(r.name);
        }
    }
).catch(
    console.log
);

// function allRecommenders(){
//     return db.query(`
//         select distinct recs.firstname as firstname, recs.surname as surname
//             from
//                 cd.members mems
//                 inner join cd.members recs

//     `)
//     //back ticks will let you do multi line strings
// }

// const catName = 'oakley';
// let stringWithData = `my cat's name is ${catName.toUpperCase()}. isn't he cool!`

function searchFacilitiesByName(name){
    return db.query(`select * from cd.facilities where name ilike '%${name}%';`);
}

searchFacilitiesByName("tennis").then(
    (results)=>{
        for(let r of results){
            console.log(r.name);
        }
    }
).catch(
    console.log
);

function getMemberById(id){
    return db.one(`select * from cd.members where id = ${id};`)
}

// db.none(`insert into cd.facilities values (...);`)
//use this for creating tables, insertings

// db.result(`insert into cd.facilities values(...);`).then(console.log);
//this shoes you al the meta info when you are creating this.
//imagine you have a user registration, you want to make sure that it got added. You can return something back to them


pg.end();
//disconnects from server