const express = require('express'); 
var cors = require('cors');
//const router = express.Router();
const app = express(); 
const port = 8080; 

app.use(cors());

// router.get('/',function(req,res){
//     res.sendfile("index.html");
// });

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