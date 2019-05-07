const express=require('express');
const cors=require('cors');
const app=express();
//const db=require('./databsase/db');
//const login=require('./api/login');
const socket=require('socket.io');


app.use(cors());

//login(app);



var server=app.listen(5000,function(){
    console.log("The Port is 5000");
})


var io=socket(server);

io.on('connection',(socket)=>{
console.log("made socket"+socket.id);
});



app.listen(80,function(req,res){
    console.log("The Port is 3000");
}) 