const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    let urlPath = "index.html";
    if(req.url != '/'){
        let urlPath = req.url.slice(1);
    }
    // fs.readFile("../nodeExercises/uppercase.html", (err, buffer)=>{
        // fs.readFile("index.html", (err, buffer)=>{
    fs.readFile(urlPath, (err, buffer)=>{
        if(err){
            res.end();
            retirm;
        }
        throw err;
        res.end(buffer.toString());
    })
});

server.listen(8888, () =>{
    console.log('here i am running!');
});