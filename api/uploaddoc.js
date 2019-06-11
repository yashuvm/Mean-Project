const express=require('express');
const app=express();
const db=require('../database/db');
const upload=require('express-fileupload');
const bodyParser=require('body-parser');
var fs = require('fs');


module.exports=function(app){
////////To upload profile document
app.post('/api/profile/upload/:user_id/:user_type',function(req,res){

var user_id=req.params.user_id;
var user_type=req.params.user_type;
//console.log(req.files);
let sql=`select * from tbl_profile_picture where user_id='${user_id}'`;
db.query(sql,function(err,result){
if (err) throw err;
else if(result.length =="1"){
fs.unlink(result[0].pp_file_path,function(err,result){
if(err) throw err;

else if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/profile_pic/"+filename;

//console.log(path);
file.mv("./document/profile_pic/"+filename,function(err){
if(err) throw err;
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
pp_file_name:filename,
pp_file_path:path  
}
//console.log(post);
db.query(`UPDATE  tbl_profile_picture SET ? WHERE user_id=${req.params.user_id}`,post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{

res.json("Please give file in the structure formet");	
}
});
}

else{
if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/profile_pic/"+filename;

//console.log(path);
file.mv("./document/profile_pic/"+filename,function(err){
if(err) throw err;
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
pp_file_name:filename,
pp_file_path:path  
}
//console.log(post);
db.query("INSERT INTO tbl_profile_picture SET ?",post,function(result){
console.log("your data is saved");
res.json("done");
})

}
})
}else{
res.json("Please give file in the structure formet");	
}
}
});
});





////////////////To upload aadhar  document
app.post('/api/aadhar/upload/:user_id/:user_type',function(req,res){
var user_id=req.params.user_id;
var user_type=req.params.user_type;
//console.log(req.files);
let sql=`select * from tbl_aadhaar_card where user_id='${user_id}'`;
db.query(sql,function(err,result){
if (err) throw err;
else if(result.length =="1"){
fs.unlink(result[0].aadhaar_file_path,function(err,result){
if(err) throw err;

else if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/aadhar_card/"+filename;

//console.log(path);
file.mv("./document/aadhar_card/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
aadhaar_file_name:filename,
aadhaar_file_path:path  
}
////console.log(post);
db.query(`UPDATE  tbl_aadhaar_card SET ? WHERE user_id=${req.params.user_id}`,post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}
else{

res.json("Please give file in the structure formet");	
}
});
}

else{
if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/aadhar_card/"+filename;

console.log(path);
file.mv("./document/aadhar_card/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
aadhaar_file_name:filename,
aadhaar_file_path:path  
}
//console.log(post);
db.query("INSERT INTO tbl_aadhaar_card SET ?",post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{
res.json("Please give file in the structure formet");	
}
}
});



});
//}

////////////////To upload pan card document
app.post('/api/pancard/upload/:user_id/:user_type',function(req,res){

var user_id=req.params.user_id;
var user_type=req.params.user_type;
//console.log(req.files);
let sql=`select * from tbl_pan_card where user_id='${user_id}'`;
db.query(sql,function(err,result){
if (err) throw err;
else if(result.length =="1"){
fs.unlink(result[0].pan_file_path,function(err,result){
if(err) throw err;

else if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/pan_card/"+filename;

//console.log(path);
file.mv("./document/pan_card/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
pan_file_name:filename,
pan_file_path:path  
}
//console.log(post);
db.query(`UPDATE  tbl_pan_card SET ? WHERE user_id=${req.params.user_id}`,post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{

res.json("Please give file in the structure formet");	
}
});
}

else{
if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/pan_card/"+filename;

//console.log(path);
file.mv("./document/pan_card/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
pan_file_name:filename,
pan_file_path:path  
}
//console.log(post);
db.query("INSERT INTO tbl_pan_card SET ?",post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{
res.json("Please give file in the structure formet");	
}
}
});


})



//////////////////////////To upload driving license document.
app.post('/api/drivingls/upload/:user_id/:user_type',function(req,res){
var user_id=req.params.user_id;
var user_type=req.params.user_type;
//console.log(req.files);
let sql=`select * from tbl_driving_license where user_id='${user_id}'`;
db.query(sql,function(err,result){
if (err) throw err;
else if(result.length =="1"){
fs.unlink(result[0].dl_file_path,function(err,result){
if(err) throw err;

else if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/driving_license/"+filename;

//console.log(path);
file.mv("./document/driving_license/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
dl_file_name:filename,
dl_file_path:path  
}
//console.log(post);
db.query(`UPDATE  tbl_driving_license SET ? WHERE user_id=${req.params.user_id}`,post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{

res.json("Please give file in the structure formet");	
}
});
}

else{
if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/driving_license/"+filename;

//console.log(path);
file.mv("./document/driving_license/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
dl_file_name:filename,
dl_file_path:path  
}
//console.log(post);
db.query("INSERT INTO tbl_driving_license SET ?",post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{
res.json("Please give file in the structure formet");	
}
}
});

})


///////////To upload voter document.
app.post('/api/voter/upload/:user_id/:user_type',function(req,res){
var user_id=req.params.user_id;
var user_type=req.params.user_type;
//console.log(req.files);
let sql=`select * from tbl_voter_card where user_id='${user_id}'`;
db.query(sql,function(err,result){
if (err) throw err;
else if(result.length =="1"){
fs.unlink(result[0].voter_card_file_path,function(err,result){
if(err) throw err;

else if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/voter_card/"+filename;

//console.log(path);
file.mv("./document/voter_card/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
voter_card_file_name:filename,
voter_card_file_path:path  
}
//console.log(post);
db.query(`UPDATE  tbl_voter_card SET ? WHERE user_id=${req.params.user_id}`,post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{

res.json("Please give file in the structure formet");	
}
});
}

else{
if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/voter_card/"+filename;

//console.log(path);
file.mv("./document/voter_card/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
voter_card_file_name:filename,
voter_card_file_path:path  
}
//console.log(post);
db.query("INSERT INTO tbl_voter_card SET ?",post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{
res.json("Please give file in the structure formet");	
}
}
});


})

/////////////////To upload passport document.
app.post('/api/passport/upload/:user_id/:user_type',function(req,res){
var user_id=req.params.user_id;
var user_type=req.params.user_type;
//console.log(req.files);
let sql=`select * from tbl_passport where user_id='${user_id}'`;
db.query(sql,function(err,result){
if (err) throw err;
else if(result.length =="1"){
fs.unlink(result[0].passport_file_path,function(err,result){
if(err) throw err;

else if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/passport/"+filename;

//console.log(path);
file.mv("./document/passport/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
passport_file_name:filename,
passport_file_path:path  
}
//console.log(post);
db.query(`UPDATE  tbl_passport SET ? WHERE user_id=${req.params.user_id}`,post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{

res.json("Please give file in the structure formet");	
}
});
}

else{
if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/passport/"+filename;

//console.log(path);
file.mv("./document/passport/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={user_id:req.params.user_id,
user_type:req.params.user_type,
passport_file_name:filename,
passport_file_path:path  
}
//console.log(post);
db.query("INSERT INTO tbl_passport SET ?",post,function(result){
console.log("your data is saved");
})
res.json("done");
}
})
}else{
res.json("Please give file in the structure formet");	
}
}
});


})





///////: To upload life insurance document.
app.post('/api/li/upload/:cust_id',function(req,res){

if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/li_policy/"+filename;

console.log(path);
file.mv("./document/li_policy/"+filename,function(err){
if(err){
throw err;
}
else{
post={
cust_id:req.params.cust_id,
li_file_name:filename,
li_file_path:path,
li_policy_no:"0",
li_policy_company:"",
li_policy_name:"",
li_policy_expiry:"",  
}
console.log(post);
//db.query("INSERT INTO tbl_life_insurance SET ?",post,function(result){
db.query("INSERT INTO  tbl_life_insurance SET ?",post,function(err,result){
if(err) throw err;
res.json("done");
console.log("your data is updated");
})
}
})
}else{

res.json("Please give file in the structure formet");	
}

});




//////To upload life insurance data.
app.post('/api/li/uploads/:cust_id',function(req,res){
post={
li_policy_no:req.body.li_policy_no,
li_policy_company:req.body.li_policy_company,
li_policy_name:req.body.li_policy_name,
li_policy_expiry:req.body.li_policy_expiry,
cust_id:req.params.cust_id  //
}
var sql = `UPDATE tbl_life_insurance SET ?  WHERE cust_id = '${req.params.cust_id}'`;
//var sql="INSERT INTO tbl_life_insurance SET ? "
db.query(sql,post,function (err, result,fields) {
if (err) throw err;
console.log(result.affectedRows + " record(s) updated");

post2={
li_policy_agent_name:req.body.li_policy_agent_name,
li_policy_agent_mob:req.body.li_policy_agent_mob
}
db.query(`UPDATE tbl_cust_emergency_details SET ? WHERE cust_id='${req.params.cust_id}'`,post2,function(err,result){
res.json("data is saved");
});
});
});


////////: To upload life health insurance  document..
app.post('/api/healthins/upload/:cust_id',function(req,res){
if(req.files){
const file=req.files.photo;
const filename=req.files.photo.name;
const path="/home/ubuntu/nodeserver/Mean-Project/document/health_insurence/"+filename;

console.log(path);
file.mv("./document/health_insurence/"+filename,function(err){
if(err){
res.json(err);
}
else{
post={
cust_id:req.params.cust_id,
hi_file_name:filename,
hi_file_path:path,
hi_policy_no:"0",
hi_policy_company:"",
hi_policy_name	:"",
hi_policy_expiry:""  
}
console.log(post);
let sql="INSERT INTO tbl_health_insurance SET ?";
db.query(sql,post,function(err,result){
if (err) throw err;
console.log("your data is saved");
})
res.json("done");
}
})
}else{

res.json("Please give file in the structure formet");	
}
});


///////To upload life health insurance  data..
app.post('/api/healthins/uploads/:cust_id',function(req,res){
post={
hi_policy_no:req.body.hi_policy_no,
hi_policy_company:req.body.hi_policy_company,
hi_policy_name	:req.body.hi_policy_name,
hi_policy_expiry:req.body.hi_policy_expiry,
}
var sql = `UPDATE tbl_health_insurance SET ?  WHERE cust_id = '${req.params.cust_id}'`;
db.query(sql,post,function (err, result) {
if (err) throw err;
console.log(result.affectedRows + " record(s) updated");

post2={
hi_policy_agent_name:req.body.hi_policy_agent_name,
hi_policy_agent_mob:req.body.hi_policy_agent_mob
}
db.query(`UPDATE tbl_cust_emergency_details SET ? WHERE cust_id='${req.params.cust_id}'`,post2,function(err,result){
res.json("data is saved");
});
});
});
}
//};
//}
//});
