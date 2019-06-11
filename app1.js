const express=require('express');
const app=express();
const cors=require('cors');
const socket=require('socket.io');
const mqtt=require('mqtt');
const db=require('./database/db');
const login=require('./api/login');
const uploaddoc=require('./api/uploaddoc');
const register=require('./api/register');
const customer_details=require('./api/customer_details');
const dataadmin=require('./api/dataadmin');
const manager=require('./api/manager');
const emrg=require('./api/emrg_details');
const zone=require('./api/zone');
const caregiver=require('./api/caregiver');
//const sms=require('./api/sms'); 
//const mqtts=require('./api/mqtt');
const admin = require('firebase-admin');

const bodyParser=require('body-parser');
var session=require('express-session');
const bcrypt=require('bcrypt');
const passport=require('passport');
const upload=require('express-fileupload');

app.use(bodyParser.json({limit: '10mb', extended: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));



//user expressfile upload middleware
app.use(upload());
app.use(bodyParser.json());
//add middleware
app.use(cors());
login(app);
register(app);
uploaddoc(app);
customer_details(app);
dataadmin(app);
manager(app);
emrg(app);
zone(app);
caregiver(app);
//sms(app);
//mqtts(app);
////////////////////////////////////////////////
var client  = mqtt.connect('mqqt://13.234.179.251:1883');

client.on('connect', function () {
  client.subscribe('ansyst/test', function (err) {
  })
})
client.on('message', function (topic, message) {
  if(message==null)
  {
    console.log("null");

  }else
  {
    console.log(message.toString());
     // console.log(message.toString());
  var sensor_data=message.toString().split(",")[0];
  var mobile_number=message.toString().split(",")[1].slice(3);
  var datetime=message.toString().split(",")[2];
  var alarm_msg=message.toString().split(",")[3];
  // var sql1="INSERT INTO tbl_emg_alert_msg SET ?";
  //  var post={alert_mob:mobile_number,msg:alarm_msg,sensor_no:sensor_data,status:0}
  //  db.query(sql1,post,function(err,result,fields){
  //    if(err) throw err;
  //    console.log("aaa");
   // io.sockets.emit('admin',sensor_data+"/"+mobile_number+"/"+datetime+"/"+alarm_msg);
    var datas={ 
      "sensor_data":sensor_data,
      "mobile_number":mobile_number,
      "datetime":datetime,
      "alarm_msg":alarm_msg
  }
    io.sockets.emit('admin',datas );
    
  // })
  }

});

//////////////////////////////
// var client  = mqtt.connect('mqqt://13.234.179.251:1883');

// client.on('connect', function () {
//   client.subscribe('ansyst/test', function (err) {
//   })
// })
// client.on('message', function (topic, message) {
//   if(message==null)
//   {
//     console.log("null");

//   }else
//   {
// console.log(message.toString());
//   var sensor_data=message.toString().split(",")[0];
//   var mobile_number=message.toString().split(",")[1].slice(3);
  
//   var datetime=message.toString().split(",")[2];
//   var alarm_msg=message.toString().split(",")[3];
//   var data={ 
//       "sensor_data":sensor_data,
//       "mobile_number":mobile_number,
//       "datetime":datetime,
//       "alarm_msg":alarm_msg
//   }
// console.log(data);
// io.sockets.emit('admin',data);


// //save data
// let sql1= `SELECT a.*, b.cust_address FROM tbl_customer_master as a INNER JOIN tbl_cust_personal_details as b on a.cust_id=b.cust_id WHERE a.alert_mob='${data.mobile_number}'`;
// db.query(sql1,function(err,result,filed){
// if(err) throw err;
// console.log(result);
// var cust_id=result[0].cust_id;
// var address=result[0].cust_address;
// //var emg_no="emg_"+cust_id;

// db.query('select a.emrg_count from tbl_variable_count as a ',function(err,row,fields){
//   if(err) throw err;
//   var emg_case_no=row[0].emrg_count+1;
//   var emg_case_nos="emg_case_"+emg_case_no
//   console.log()
//   let query_updated=db.query(`UPDATE tbl_variable_count SET emrg_count='${emg_case_no}'`,function(result){
//   if(err) throw err;


  





// let sql2="INSERT INTO tbl_emergency SET ?";
// let post2={
// cust_id:cust_id,
// emg_case_no:emg_case_nos,
// emg_date_time:data.datetime,
// emg_msg:data.alarm_msg,
// emg_status:"new",
// emg_type:'type',
// emg_recv_mode:'safetysen'
// }
// db.query(sql2,post2,function(err,result,field){
// if(err) throw err;
// let sql4="SELECT MAX(emg_id) as max_id FROM tbl_emergency";
// db.query(sql4,function(err,result,field){
// console.log(result[0]);
// var id=result[0].max_id;
 
// let sql3="INSERT INTO tbl_emergency_details SET ?";
// let post3={
// emg_id:id,
// emg_desc:data.alarm_msg,
// emg_location:address,
// resp_start_time:" ",
// est_time_reach:" ",
// reaching_time:" ",
// closing_time:" ",
// cust_remark:" ",
// cur_resp_stage:""
// };
// db.query(sql3,post3,function(err,result,field){
// if(err) throw err;
// console.log("your data is saved");

// });
// });
// })
// });


// });
// });
/////////////////////

/////////////////////fcm code for notification 
//firebase admin initilize.

// var serviceAccount = require('./credientials/fcmnotification-11a5e-firebase-adminsdk-jtsn5-f913ce5466.json');
// //FirebaseApp.initializeApp(this);
// admin.initializeApp({
// credential: admin.credential.cert(serviceAccount),
// databaseURL: "https://fcmnotification-11a5e.firebaseio.com"
// });

// // This registration token comes from the client FCM SDKs.
// var registrationToken = "fR_vm5JM8Jo:APA91bFt_So2M2qazdAzBjcIZei0k85OU-WvSjRfTa5T8D-eELvASeRlyBaM8rs4sxG0jPjGLAllWHv7-FIFSXrHWbmny_kVRNSlcmMujYIRf15MeTP4fbMXi0F_kJkASIaF9fC3NKCu";


// var payload = {
// data: {
//   title: "Account Deposit",
//   body: "A deposit to your savings account has just cleared.",
// },
// android:{
// notification:{
//   sound:"song"
// }
// },

// token : registrationToken
// };
// // Send a message to the device corresponding to the provided
// //admin.messaging().send(registrationToken, payload,options)
// admin.messaging().send( payload)
// .then(function(response) {
// console.log("Successfully sent message:", response);
// })
// .catch(function(error) {
// console.log("Error sending message:", error);
// });
//  }

// });





///////////////////////////////

var server=app.listen(5000,()=>{
  console.log("port is connected");
  });
module.exports=server;

  var io=socket(server);
    io.on('connection',(socket)=>{

});
