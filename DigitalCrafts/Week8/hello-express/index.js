const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World');
});
y

app.listen(3000, ()=>{
    console.log('web app is listening! on port 3000')
});