const express=require('express');
const app=express();
const db=require('../database/db');

const Nexmo = require('nexmo');

// Init Nexmo
const nexmo = new Nexmo({
    apiKey: 'e6eea29f',
    apiSecret: 'UzIAGUBB5s2jHX2x'
  }, { debug: true });







module.exports=function(app){


/////To add emergency data into the table.
app.post('/api/emrg',function(req,res){
//console.log(req.body);
var data=req.body;
let sql1= `SELECT a.*, b.cust_address FROM tbl_customer_master as a INNER JOIN tbl_cust_personal_details as b on a.cust_id=b.cust_id WHERE a.alert_mob='${req.body.mobile_number}'`;
db.query(sql1,function(err,result,filed){
if(err) throw err;
console.log(result);
var cust_id=result[0].cust_id;
var address=result[0].cust_address;
var emg_no="emg_"+cust_id;
let sql2="INSERT INTO tbl_emergency SET ?";
let post2={
cust_id:cust_id,
emg_case_no:emg_no,
emg_date_time:data.datetime,
emg_msg:data.alarm_msg,
emg_status:"new",
emg_type:'type',
emg_recv_mode:'safetysen'
}
db.query(sql2,post2,function(err,result,field){
if(err) throw err;
let sql4="SELECT MAX(emg_id) as max_id FROM tbl_emergency";
db.query(sql4,function(err,result,field){
console.log(result[0]);
var id=result[0].max_id;

let sql3="INSERT INTO tbl_emergency_details SET ?";
let post3={
emg_id:id,
emg_desc:data.alarm_msg,
emg_location:address,
resp_start_time:" ",
est_time_reach:" ",
reaching_time:" ",
closing_time:" ",
cust_remark:" ",
cur_resp_stage:""
};
db.query(sql3,post3,function(err,result,field){
if(err) throw err;
res.json("your data is saved");
// post5={
// emg_id:id
// }
// let sql5="INSERT INTO tbl_emergency_responder SET ?";
// db.query(sql5,post5,function(err,result,field){
// console.log("aa");    
// if(err) throw err;
// res.json("your data is saved");
// });

});
});
})
});
});


/////////////To get emergency data from  the table.
app.get('/api/get/emrg',function(req,res){
//let sql="SELECT * FROM tbl_emergency AS a INNER JOIN tbl_customer_master AS b ON a.cust_id = b.cust_id"
let sql="SELECT * FROM tbl_emergency AS a INNER JOIN tbl_customer_master AS b ON a.cust_id = b.cust_id ORDER BY(a.emg_id) DESc"
db.query(sql,function(err,result,field){
if(err) throw err;
res.send(result);
});
});


//////To get emergency data a particular id from  the table.
app.get('/api/get/emrg/:user_id',function(req,res){
let sql=`SELECT * FROM tbl_emergency AS a INNER JOIN tbl_cust_personal_details AS b ON a.cust_id = b.cust_id where a.emg_id='${req.params.user_id}'`;
db.query(sql,function(err,result,field){
if(err) throw err;
res.send(result);
});
});



app.get('/api/emrg/customer_details',function(req,res){
let sql="SELECT a.cust_name,a.cust_code,b.cust_address,a.cust_id FROM tbl_customer_master as a INNER JOIN tbl_cust_personal_details as b on a.cust_id=b.cust_id";
db.query(sql,function(err,row,filed){
if(err) throw err;
res.json(row);
});
});

app.post('/api/emrg/add/customer_details',function(req,res){

var data=req.body;
var datetime = new Date();
var current_date=datetime.toISOString();

db.query('select a.emrg_count from tbl_variable_count as a ',function(err,row,fields){
if(err) throw err;
var emg_case_no=row[0].emrg_count+1;
var emg_case_nos="emg_case_"+emg_case_no
let query_updated=db.query(`UPDATE tbl_variable_count SET emrg_count='${emg_case_no}'`,function(result){
if(err) throw err;
console.log(emg_case_no+""+emg_case_nos);

let sql1="INSERT INTO tbl_emergency SET ?";
let post1={
cust_id:data.cust_id,
emg_case_no:emg_case_nos,
emg_date_time:current_date,  //datetime
emg_msg:data.emg_msg,
emg_status:data.emg_status,
emg_type:data.emg_type,
emg_recv_mode:data.emg_recv_mode
}
//console.log(post1);
db.query(sql1,post1,function(err,result,fields){
if(err) throw err;

db.query('SELECT max(emg_id) as emg_id from tbl_emergency as a ',function(err,row,fields){
if(err) throw err;
var emg_id=row[0].emg_id;
console.log(emg_id);

let sql2="INSERT INTO tbl_emergency_details SET ?";
let post2={
emg_id:emg_id,
emg_desc:data.emg_desc,
emg_location:data.emg_location,
resp_start_time:null,
est_time_reach:null,
reaching_time:null,
closing_time:null,
cust_remark:null,
cur_resp_stage:null
}
db.query(sql2,post2,function(err,row,fields){
if(err) throw err;
res.json('success');
})



})




});
});
});



});


app.get('/api/get/emrg_details',function(req,res){
let sql="SELECT a.cust_code, a.cust_name, b.emg_type, b.emg_status, b.emg_case_no, b.emg_date_time FROM tbl_customer_master AS a INNER JOIN tbl_emergency AS b ON a.cust_id = b.cust_id";
db.query(sql,function(err,row,field){
if(err) throw err;
res.json(row);
});
});


app.get('/api/get/emrg_details/:cust_id',function(req,res){
 
let sql=`SELECT a.cust_code, a.cust_name,b.* FROM tbl_customer_master AS a INNER JOIN tbl_emergency AS b ON a.cust_id = b.cust_id WHERE a.cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.json(row);
});
});


app.get('/api/get/emrg_assigndetails/:emg_case_no',function(req,res){
let sql=`SELECT a.*,b.*, c.cust_mob,c.cust_name FROM tbl_emergency AS a INNER JOIN tbl_emergency_details AS b ON a.emg_id = b.emg_id INNER JOIN tbl_customer_master as c on c.cust_id=a.cust_id WHERE a.emg_case_no ='${req.params.emg_case_no}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.json(row);
});
});


app.post('/api/post/add/responder_emerg',function(req,res){
  var data=req.body;
 // console.log(data);
let sql="INSERT INTO tbl_emergency_responder SET ?";
let post={
    emg_id:req.body.emg_id,
    rsp_id:req.body.rsp_id
}
db.query(sql,post,function(err,result){
if(err) throw err;
//res.json('success');



////////////////////sending message
var from ="Nexmo";
let sql1=`SELECT * from tbl_customer_master as a INNER JOIN tbl_cust_personal_details as b on a.cust_id=b.cust_id WHERE a.cust_id='${req.body.cust_id}'`;
db.query(sql1,function(err,result,fields){
if(err) throw err;
//console.log(result);
var prim_emg_contact_no=result[0].pri_emg_mob
var cust_geolocation=result[0].cust_geolocation
//var text=data.cust_name+"-"+data.cust_mob+"-"+data.emg_location+data.emg_msg+data.emg_date_time+"-"+"geolocation"+"Primary_contact"+prim_emg_contact_no+"-"+prim_emg_contact_no;

console.log("sendsc");

db.query(`SELECT a.res_mob,a.rsp_name FROM tbl_responder as a where a.rsp_id='${req.body.rsp_id}'`,function(err,result,fields){
  if(err) throw err;
  var resname=result[0].rsp_name;
  console.log(resname); 




db.query('SELECT a.res_mob,a.rsp_name FROM tbl_responder as a',function(err,result,fields){
if(err) throw err;




var text=data.cust_name+"-"+data.cust_mob+"-"+data.emg_location+data.emg_msg+data.emg_date_time+"-"+"geolocation"+"Primary_contact"+prim_emg_contact_no+"-"+prim_emg_contact_no+"-"+resname;
let index;
var array_length=result.length;
for (index=0;index <= result.length - 1; index++) {
  smss(from,result[index].res_mob,text);

  console.log(result[index]);
}
//var to='917988461255';
//smss(from,to,text);
res.send("success");

});
});
});
/////////////////
});
});


app.post('/api/post/add/sensor_config',function(req,res){
var data=req.body;
let sql="INSERT INTO tbl_customer_sensor SET ?";
let post={
    cust_id:req.body.cust_id,
    sensor_no:req.body.sensor_no,
    alert_msg:req.body.alert_msg,
    alert_type:req.body.alert_type
};
db.query(sql,post,function(err,result){
    if(err) throw err;
    res.json("success");
});
});

app.get('/api/get/sensor_config',function(req,res){
let sql='SELECT * FROM tbl_customer_sensor';
db.query(sql,function(err,result,row){
if(err) throw err;
res.json(row);
});

});






function smss(from,to,text){
  //console.log("hello");
 
  nexmo.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if(responseData.messages[0]['status'] === "0") {
         // console.log("Message sent successfully.");
          return('message sent');
        } else {
         // console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          return ('mesg not send');
        }
      }
    });
}
}




