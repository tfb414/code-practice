const fs = require('fs');
const readline = require('readline');

var file = "derp.txt"

class FileManipulator{
    constructor(){
        this.rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
    }
    
    read(file, callback){
        fs.readFile(file, (err, buffer)=>{
        // this.rl.close();
        if(err) {
            throw err;
        }
        callback(buffer.toString());
        // return buffer.toString();
        });
    }
    writeFile(fileName, someTextForTheFile, doThisOnceTheFileHasBeenWritten){
        fs.writeFile(fileName, someTextForTheFile, doThisOnceTheFileHasBeenWritten)
    }
    
    
}

// var exercise = new FileManipulator();

// exercise.rl.question("filename: "(filename)=>{})
// exercise.read(file);


module.exports = FileManipulator;


// //I should add to scripts

// dev: "nodemon index.js",
// "debug:": "node --inspect-brk index.js"
// "debug-test": "mocha --inspect-brk"
//"debug-dev": node --inspect-br index.js"

// npm run node test 