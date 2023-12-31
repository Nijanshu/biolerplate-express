let express = require('express');
let app = express();
let bodyParser= require('body-parser');
require('dotenv').config();

const cas=process.env.MESSAGE_STYLE;

app.use(bodyParser.urlencoded({ extended: false }));// express 11
app.use(bodyParser.json());// express
console.log("Hello World")


// app.get('/', function(req, res){
//     res.send("Hello Express")
// })

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
})
app.get('/method',(req,res,next)=>{
var string = req.method + " " + req.path + " - " + req.ip;
console.log(string)
    next();
})


app.use("/public", express.static(__dirname + "/public"));


console.log(process.env.MESSAGE_STYLE)
app.get('/json', function(req, res){
    if(process.env.MESSAGE_STYLE=='uppercase'){
        res.json({"message": "Hello json".toUpperCase()});
    }
    else{
        res.json({"message": "Hello json"});
    }
})

app.get('/now', (req, res, next) => {   //EXpress 8
   req.time= new Date().toString();
   next();
},
(req, res)=>{
res.json({time: req.time});
})


app.get('/:word/echo',(req, res)=>{   // Express 9
    let word = req.params.word;
    res.json({echo:word})
})

app.get('/name',(req, res)=>{   // Express 10
    let word = req.query;
    let first= word.first
    let last= word.last;

    res.json({name:`${first} ${last}`})
})

app.post('/name',(req, res)=>{   // Express 12
    var string= req.body.first+" "+ req.body.last;
    res.json({name:string})
})
 module.exports = app;
