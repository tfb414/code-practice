const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    //this is typically from the keyboard
    output: process.stdout
    //this is typically going to the screen.
    //standard err (stderr) is also mapped to the screen
    //these are called streams - a series of data over time
    
});

rl.question('filename: ', (filename) => {
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        //many node things recieve the error call back first
        if(err){
            console.log(err.message);
            return;
            //this return goes no where. unless we turned it into a promise.
        }
        let content = buffer.toString();
        //buffer is whatever they typed in, that's the string that we read in from the file
        //it's turning in the binary to something that we can read
        let upcased = content.toUpperCase();
        console.log(upcased);
        fs.writeFile(outputFile, upcased, (err) =>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('it worked');
        });
    })
    
});

//for readline and file system stuff we're just going to next functions, but later it will be promises