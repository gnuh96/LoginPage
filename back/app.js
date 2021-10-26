const express = require('express'); 
const app = express(); 
const port = 8080; 

app.get('/', function(req, res){
    res.send("Hello World");
})

app.post('/login', function (req, res) {
    res.send('POST request to the homepage');
  });

app.listen(port, function(){
    console.log("Your server running on port " + port);
})