var fs = require('fs');

fs.readFile(process.argv[2], (err, buffer)=>{
    
    if(err) throw err;
    var contents = buffer.toString();
    splitContents = contents.split("\n").length - 1;
    console.log(splitContents);
});
