let express = require('express');
let app = express();
require('dotenv').config();

const cas=process.env.MESSAGE_STYLE;


console.log("Hello World")


// app.get('/', function(req, res){
//     res.send("Hello Express")
// })

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
})


app.use("/public", express.static(__dirname + "/public"));


console.log(process.env.MESSAGE_STYLE)
app.get('/json', function(req, res){
    if(process.env.MESSAGE_STYLE==='uppercase'){
        res.json({"message": "Hello json".toUpperCase()});
    }
    else{
        res.json({"message": "Hello json"});
    }
})




















 module.exports = app;
