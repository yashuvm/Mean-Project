const express=require('express');
const app=express();
const cors=require('cors');
const socket=require('socket.io');
const mqtt=require('mqtt');
const db=require('./database/db');
const login=require('./api/login');
const bodyParser=require('body-parser');
var session=require('express-session');
const bcrypt=require('bcrypt');
const passport=require('passport');

app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));


app.use(bodyParser.json());
//add middleware
app.use(cors());
login(app);













// var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://broker.mqttdashboard.com');

// //Websocket connectivity
// client.on('connect', function () {
//     client.subscribe('testtopic/abc', function (err) {
//     })
//   })
//   client.on('message', function (topic, message) {
//     //console.log(topic.toString());
//     var dah=message.toString();
// //    console.log(dah);

//    console.log("cokek");
//     var sql = 'SELECT * FROM tablereg WHERE imei_number = ?';
//     db.query(sql,[dah],function(err,result,fields){
//       //if(err) throw err;
//       if(result.length==0){
//         console.log("ss");

//       }
//       else{
//         console.log("helkkljdfjsdjf");
//         var store_data=result[0].id;
//         console.log(result[0].id);
//         io.sockets.emit(result[0].id,result[0].id);
//       }

//     }
//  );

  //})

var server=app.listen(5000,()=>{
  console.log("port is connected");
  });


  var io=socket(server);
    io.on('connection',(socket)=>{
    console.log("connected",socket.id);

  //    socket.on('chat',function(data){
    //    console.log(data);
//      })

});
