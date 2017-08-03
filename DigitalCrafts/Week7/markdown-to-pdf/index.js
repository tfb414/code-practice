const fs = require('fs');
const readline = require('readline');
const markdownpdf = require('markdown-pdf');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('filename: ', (filename) => {
    console.log("you said " + filename)
    rl.question('what do you want the output name to be? ', (outputName)=>{
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if(err){
            console.log(err.message);
            return;
        }
        
        console.log('i found it');
        let content = buffer.toString();
            markdownpdf().from.string(content)
                .to(outputName + '.pdf', () =>{
                    console.log("it worked!");
                });
        });
        // let upcased = content.toUpperCase();
        // console.log(upcased);
       
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