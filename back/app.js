const express = require('express'); 
var cors = require('cors');
const app = express(); 
const port = 8080; 

app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello World");
})

app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username === "user" && password === "web_dev") {
        res.end("yes");
    } else {
        res.end("no");
    }
  });

app.listen(port, function(){
    console.log("Your server running on port " + port);
})