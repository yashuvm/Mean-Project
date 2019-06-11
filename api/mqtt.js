// const express=require('express');
// const app=express();
// const cors=require('cors');
// const socket=require('socket.io');
// const mqtt=require('mqtt');
// const db=require('../database/db');
// const  server=require('../app');
// const admin = require('firebase-admin');





// module.exports=function(app){
//     var client  = mqtt.connect('mqqt://13.234.179.251:1883');

//     client.on('connect', function () {
//       client.subscribe('ansyst/test', function (err) {
//       })
//     })
//     client.on('message', function (topic, message) {
//       if(message==null)
//       {
//         console.log("null");
    
//       }else
//       {
//     console.log(message.toString());
//       var sensor_data=message.toString().split(",")[0];
//       var mobile_number=message.toString().split(",")[1].slice(3);
      
//       var datetime=message.toString().split(",")[2];
//       var alarm_msg=message.toString().split(",")[3];
//       var data={ 
//           "sensor_data":sensor_data,
//           "mobile_number":mobile_number,
//           "datetime":datetime,
//           "alarm_msg":alarm_msg
//       }
// console.log(data);
// io.sockets.emit('admin',data);


// //save data
// let sql1= `SELECT a.*, b.cust_address FROM tbl_customer_master as a INNER JOIN tbl_cust_personal_details as b on a.cust_id=b.cust_id WHERE a.alert_mob='${data.mobile_number}'`;
// db.query(sql1,function(err,result,filed){
// if(err) throw err;
// console.log(result);
// var cust_id=result[0].cust_id;
// var address=result[0].cust_address;
// var emg_no="emg_"+cust_id;
// let sql2="INSERT INTO tbl_emergency SET ?";
// let post2={
// cust_id:cust_id,
// emg_case_no:emg_no,
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
// /////////////////////

// /////////////////////fcm code for notification 
// //firebase admin initilize.

// var serviceAccount = require('../credientials/fcmnotification-11a5e-firebase-adminsdk-jtsn5-f913ce5466.json');
// //FirebaseApp.initializeApp(this);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://fcmnotification-11a5e.firebaseio.com"
// });

// // This registration token comes from the client FCM SDKs.
// var registrationToken = "fQqhLen7Z1o:APA91bE9oxZ5X7qK8jjxXBCOONYAdzDQXuwQDQ3G2ymeclyU0nAVAbYfiq3ZuCgMdGoljBPQIG_X0XUY7hFW1i1m3Glf0759wTtpR8u9k6gFMOZVKnAEEhfsQ7b4Scf2rqpm7fHIuMEM";


//   var payload = {
//     data: {
//       title: "Account Deposit",
//       body: "A deposit to your savings account has just cleared."
//     },
//     token : registrationToken
//   };
// // Send a message to the device corresponding to the provided
// //admin.messaging().send(registrationToken, payload,options)
// admin.messaging().send( payload)
//   .then(function(response) {
//     console.log("Successfully sent message:", response);
//   })
//   .catch(function(error) {
//     console.log("Error sending message:", error);
//   });





// ////////////////////
       
//       }
    
//     });
    
// };
//   var io=socket(server);
//     io.on('connection',(socket)=>{

// });
