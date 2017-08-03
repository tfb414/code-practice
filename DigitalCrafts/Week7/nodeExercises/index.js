const fs = require('fs');
const readline = require('readline');
const dns = require('dns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function capsify(){
    const noFileErr = new Error("WE AIN'T GOT DAT FILE!");
    rl.question("What file do you want to capsify? ", (filename)=>{
        rl.close();
        fs.readFile(filename, (err, buffer)=>{
            if(err){
                console.log(noFileErr.message);
                return;
            }
            console.log("you're opening "+ filename);
            let content = buffer.toString();
            let upCased = content.toUpperCase();
            console.log(upCased);

        })
    })    
}


// capsify();
