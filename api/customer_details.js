const express=require('express');
const app=express();
const db=require('../database/db');


module.exports=function(app){
//////To get all vantage customer details.
app.get('/api/customer/details/vantage',function(req,res){
let sql="SELECT a.*, b.user_id,b.user_name,b.user_email FROM tbl_customer_master as a INNER JOIN tbl_user as b ON a.user_id = b.user_id WHERE a.regn_type='vantagepackage'";    
db.query(sql,function(err,row,field){
if(err) throw err;
res.json(row);
});
});

//////To get all samrt care customer details.
app.get('/api/customer/details/smart',function(req,res){
let sql="SELECT a.*, b.user_id,b.user_name,b.user_email FROM tbl_customer_master as a INNER JOIN tbl_user as b ON a.user_id = b.user_id WHERE a.regn_type='smartcare'";    
db.query(sql,function(err,row,field){
if(err) throw err;
res.json(row);
});
});


app.get('/api/customer/details',function(req,res){
    let sql="SELECT a.*, b.*, c.* FROM tbl_customer_master AS a INNER JOIN tbl_user AS b ON a.user_id = b.user_id INNER JOIN tbl_cust_personal_details as c on a.cust_id=c.cust_id";    
    db.query(sql,function(err,row,field){
    if(err) throw err;
    res.json(row);
    });
    });








//////To get particuler customer details.
app.get('/api/customer_personal_details/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_cust_personal_details WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.json(row);
});
});

////To update particuler customer details.
app.put('/api/customer_personal_details/up/:cust_id',function(req,res){
post={
"preferred_name":req.body.preferred_name,
"cust_email":req.body.cust_email,
"cust_address":req.body.cust_address,
"cust_community":req.body.cust_community,
"cust_geolocation":req.body.cust_geolocation,
"cust_category":req.body.cust_category,
"cust_language":req.body.cust_language,
"cust_dob":req.body.cust_dob,
"cust_gender":req.body.cust_gender,
"cust_marital_status":req.body.cust_marital_status,
"cust_dom":req.body.cust_dom,
"cust_religion":req.body.cust_religion,
"cust_living_place":req.body.cust_living_place,
"cust_living_situation":req.body.cust_living_situation,
"cust_statying_with":req.body.cust_staying_with,
"cust_family_member_1":req.body.cust_family_member_1,
"cust_family_member_2":req.body.cust_family_member_2,
"cust_family_member_3":req.body.cust_family_member_3,
"cust_education_1":req.body.cust_education_1,
"cust_education_2":req.body.cust_education_2,
"cust_education_3":req.body.cust_education_3,
"cust_asset_1":req.body.cust_asset_1,
"cust_asset_2":req.body.cust_asset_2,
"cust_asset_3":req.body.cust_asset_3,
"cust_risk_assessment_1":req.body.cust_risk_assessment_1,
"cust_risk_assessment_2":req.body.cust_risk_assessment_2,
"cust_risk_assessment_3":req.body.cust_risk_assessment_3,
"cust_risk_assessment_4":req.body.cust_risk_assessment_4,
"cust_risk_assessment_5":req.body.cust_risk_assessment_5,
}
// console.log()
let sql=`UPDATE tbl_cust_personal_details SET ? WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,post,function(err){
if(err) throw err;
res.send("your data is update");
});
});




/////:To get aadhar card docment..
app.get('/api/get/aadhar/:user_id',function(req,res){
let sql=`SELECT * FROM tbl_aadhaar_card WHERE user_id='${req.params.user_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
if(row[0]){
res.sendFile(row[0].aadhaar_file_path);
}
else{
res.json('no file');
}
});
});


/////To get pan card  docment.
app.get('/api/get/pancard/:user_id',function(req,res){
let sql=`SELECT * FROM tbl_pan_card WHERE user_id='${req.params.user_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.sendFile(row[0].pan_file_path);

if(row[0]){
res.sendFile(row[0].pan_file_path);
}
else{
res.json('no file');
}

});
});


///:To get votor card docment.
app.get('/api/get/voter_card/:user_id',function(req,res){
let sql=`SELECT * FROM tbl_voter_card WHERE user_id='${req.params.user_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.sendFile(row[0].voter_card_file_path);

if(row[0]){
res.sendFile(row[0].voter_card_file_path);
}
else{
res.json('no file');
}


});
});



////:To get dl card docment.
app.get('/api/get/dl/:user_id',function(req,res){
let sql=`SELECT * FROM tbl_driving_license WHERE user_id='${req.params.user_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.sendFile(row[0].dl_file_path);

if(row[0]){ 
res.sendFile(row[0].dl_file_path);
}
else{
res.json('no file');
}
});
});


//////:To get passport card docment.
app.get('/api/get/passport/:user_id',function(req,res){
let sql=`SELECT * FROM tbl_passport WHERE user_id='${req.params.user_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.sendFile(row[0].passport_file_path);

if(row[0]){
res.sendFile(row[0].passport_file_path);
}
else{
res.json('no file');
}
});
});



//////To get profile pic  docment.
app.get('/api/get/profilepic/:user_id',function(req,res){
let sql=`SELECT * FROM tbl_profile_picture WHERE user_id='${req.params.user_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.sendFile(row[0].pp_file_path);
if(row[0]){
res.sendFile(row[0].pp_file_path);
}
else{
res.json('no file');
}
});
});


////////To get life insurance document.
app.get('/api/get/li/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_life_insurance WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.sendFile(row[0].li_file_path);


if(row[0]){
res.sendFile(row[0].li_file_path);
}
else{
res.json('no file');
}


});
});

///////To get health insurance document.
app.get('/api/get/hi/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_health_insurance WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
//res.sendFile(row[0].hi_file_path);
if(row[0]){
res.sendFile(row[0].hi_file_path);
}
else{
res.json('no file');
}

});
});







//////get emergency details of customer
app.get('/api/customer_emrg_details/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_cust_emergency_details WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.send(row);
});
});


///////To get fucntional details of customer
app.get('/api/functional_ability_details/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_cust_functional_ability WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.send(row);
});
});




/////To get coginitive details of customer.
app.get('/api/cognitive_status_details/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_cust_cognitive_status WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.send(row);
});
});


////////To get medication details of customer.
app.get('/api/cust_medication_details/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_cust_medication WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.send(row);
});
});


/////To get social details of customer.
app.get('/api/social_details/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_cust_social_background WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.send(row);
});
});


/////: To get medical details of customer.
app.get('/api/medical_details/:cust_id',function(req,res){
let sql=`SELECT * FROM tbl_cust_medical_details WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,function(err,row,field){
if(err) throw err;
res.send(row);
});
});


}