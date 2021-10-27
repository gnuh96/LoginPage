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
    console.log(req.body);
    // var username = req.body.username;
    // var password = req.body.password;
    // console.log("User name = "+username+", password is "+password);
    // res.end("yes");
  });

app.listen(port, function(){
    console.log("Your server running on port " + port);
})