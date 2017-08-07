var fs = require('fs');

var text = fs.readFileSync(process.argv[2]);
text = text.toString().split("\n");
console.log(text.length -1);
