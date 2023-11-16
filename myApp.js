let express = require('express');
let app = express();

const cas=process.env.MESSAGE_STYLE;


console.log("Hello World")


// app.get('/', function(req, res){
//     res.send("Hello Express")
// })

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
})


app.use("/public", express.static(__dirname + "/public"));



app.get('/json', function(req, res){
    if(cas=='uppercase'){
        res.json({"message": "HELLO JSON"});
    }
    else{
        res.json({"message": "Hello json"});
    }
})




















 module.exports = app;
