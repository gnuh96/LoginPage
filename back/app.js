const express = require('express'); 
const fs = require('fs');
var cors = require('cors');
const app = express(); 
const port = 8080; 

app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello World");
})

// Read file JSON 
var data = require('./data.json');
var users = data.user;

// Verified username and password input
app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var bool = false;
    for (let user of users) {
        if (username === user.username && password === user.password) {
            bool = true;
            break;
        }
    };
    if (bool) {
        res.end("yes");
    } else {
        res.end("no");
    };
  });

app.listen(port, function(){
    console.log("Your server running on port " + port);
})