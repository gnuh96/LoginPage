const express = require('express'); 
const app = express(); 
const port = 5500; 

app.get('/', function(req, res){
    res.send("Hello World");
})

app.listen(port, function(){
    console.log("Your server running on port " + port);
})