const fs = require('fs');
const readline = require('readline');
const dns = require('dns');
const https = require('https');
const { URL } = require('url');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getIP(){
    rl.question('hostname?: ', (website)=>{
        rl.close();
        dns.lookup(website, (err, address, family)=>{
            if(err){
                throw err;
            }
            console.log(address);
            return address;
        })
    })
}


function capsify(){
    rl.question("What file do you want to capsify? ", (filename)=>{
        rl.question('What file do you want to write to? ', (output)=>{
            rl.close();
            fs.readFile(filename, (err, buffer)=>{
                console.log(err);
                if(err){
                    if(err.code ==="ENOENT"){
                    return err.code;
                    }
                    throw err;
                } 
                
                console.log(output);
                console.log("you're reading "+ filename + "and you're writing to " + output);
                let content = buffer.toString();
                let upCased = content.toUpperCase();
                fs.writeFile(output, upCased, (err)=>{
                    if(err) throw err;
                    console.log('The file has been updated!')
                })

            })            
        })
        
    })    
}

function saveHTML(){
    rl.question('You want to grab the HTML from which website? ', (website)=>{
        
        let myURL = new URL("https://" + website);
        https.get(myURL, (res)=>{
            res.on('data', (d) =>{
                d = d.toString();
                saveTheStuff(d);
            })

        }).on('error', (err) => {
            if(err){
                if(err.code === "ENOTFOUND") throw err.code;
                throw err;
            }
        });
    })
}

function saveTheStuff(stuff){
    console.log(stuff);
    rl.question("What file do you want to save this information to? ", (filename)=>{
        rl.close();    
        console.log('one')
        fs.writeFile(filename, stuff, (err)=>{
            console.log('two');
            if(err) throw err;
            console.log('The file has been updated!')
        })
    
    })
    return;  
}

saveHTML();
// getIP();
// capsify();

