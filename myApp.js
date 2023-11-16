let express = require('express');
let app = express();




console.log("Hello World")


// app.get('/', function(req, res){
//     res.send("Hello Express")
// })

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
})




























 module.exports = app;
