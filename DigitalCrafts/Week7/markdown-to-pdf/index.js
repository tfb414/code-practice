const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('filename: ', (filename) => {
    console.log("you said " + filename)
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if(err){
            console.log(err.message);
            return;
        }
        console.log('i found it');
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
        // fs.writeFile(outputFile, upcased, (err) =>{
        //     if(err){
        //         console.log(err.message);
        //         return;
        //     }
        //     console.log('it worked');
        // });
    })
    
});

// var yelp = (what) => {
//     return "hey that " + what;
// }

// fs.watch('DERP.md', (event) => {
//     // console.log('ouchies!');
//     console.log(yelp('tickles derp'));
//     console.log(event);
// });

//npm init -y
//npm install --save nodemon
//npm install --save markdown-pdf