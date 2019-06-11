// const express=require('express');
// const app=express();
// const db=require('../database/db');
// const Nexmo = require('nexmo');


// // Init Nexmo
// // const nexmo = new Nexmo({
// //     apiKey: 'bca53292',
// //     apiSecret: 'UusTV1iQhtIFNMBR'
// //   }, { debug: true });




// module.exports=function(app){

//    app.get('/api/post/sms/servcice',function(req,res){
//     var from ="Nexmo";
// //    / var to='917015598989';
//     var to='917988461255';
//     var text="hello";
  
//     sms(from,to,text);

//    res.json("aa");
//    });
       
 


// // function sms(from,to,text){
// //     //console.log("hello");
   
// //     nexmo.message.sendSms(from, to, text, (err, responseData) => {
// //         if (err) {
// //           console.log(err);
// //         } else {
// //           if(responseData.messages[0]['status'] === "0") {
// //             console.log("Message sent successfully.");
// //             return('message sent');
// //           } else {
// //             console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
// //             return ('mesg not send');
// //           }
// //         }
// //       });
// // }


// }