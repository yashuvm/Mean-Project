const express=require('express');
const app=express();
const db=require('../database/db');


module.exports=function(app){




/////To add care manager.
app.post('/api/add/care_manager',function(req,res){
var data=req.body;

let post={user_name:data.crm_mob,user_email:data.crm_email,password:data.password,user_type:data.user_type,user_status:"active"};
let sql='INSERT INTO tbl_user SET ?';
//console.log(post);
let query=db.query(sql,post,function(err,result){
if (err) throw err;

var ds=req.body.crm_email;
var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
var query1=db.query(sql1,function(err,row,fields){
if(err) throw err;
var user_set_id=row[0].user_id;  
var user_type=row[0].user_type;  
// console.log(user_set_id);

var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
var empid=row[0].emp_count+1;
var emp_codes="emp_"+empid;   

let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
if (err) throw err;

var data=req.body;
let sql="INSERT INTO tbl_care_manager SET ?";
let post={
user_id:user_set_id,
crm_name:data.crm_name,
emp_code:emp_codes,
crm_mob:data.crm_mob,
comm_id:data.comm_id,
crm_alt_mob_no:data.crm_alt_mob_no,
crm_email:data.crm_email,
crm_address:data.crm_address,
crm_dob:data.crm_dob,
crm_gender:data.crm_gender,
crm_language:data.crm_language,
crm_education_1:data.crm_education_1,
crm_education_2:data.crm_education_2,
crm_education_3:data.crm_education_3
};

db.query(sql,post,function(err,result){
if(err) throw err;
res.json("your data is saved");
})
})

});
});
});
});

///////To get care manager.
app.get('/api/get/care_manager',function(req,res){
let sql="SELECT b.*, c.comm_name, COUNT(d.cust_id) AS COUNT FROM tbl_care_manager AS b INNER JOIN tbl_community AS c ON c.comm_id = b.comm_id LEFT JOIN tbl_cust_crm_map AS d ON d.crm_id = b.crm_id GROUP BY b.crm_id";
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})


//////To get care manager at a particuler id.
app.get('/api/get/care_manager/:crm_id',function(req,res){
let sql=`SELECT * FROM tbl_care_manager WHERE crm_id='${req.params.crm_id}'`;
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})





//////To add cluster manager
app.post('/api/add/cluster_manager',function(req,res){

var data=req.body;
//console.log(data);
let post={user_name:data.clm_mob,user_email:data.clm_email,password:data.password,user_type:data.user_type,user_status:"active"};
let sql='INSERT INTO tbl_user SET ?';

let query=db.query(sql,post,function(err,result){
if (err) throw err;

var ds=req.body.clm_email;
var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
var query1=db.query(sql1,function(err,row,fields){
if(err) throw err;
var user_set_id=row[0].user_id;  
var user_type=row[0].user_type;  
console.log(user_set_id);

var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
var empid=row[0].emp_count+1;
var emp_codes="emp_"+empid;   

let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
if (err) throw err;

var data=req.body;
let sql="INSERT INTO tbl_cluster_manager SET ?";
let post={
user_id:user_set_id,
clm_name:data.clm_name,
emp_code:emp_codes,
clm_mob:data.clm_mob,
clm_alt_mob_no:data.clm_alt_mob_no,
clm_email:data.clm_email,
clm_address:data.clm_address,
clm_dob:data.clm_dob,
clm_gender:data.clm_gender,
clm_language:data.clm_language,
clm_education_1:data.clm_education_1,
clm_education_2:data.clm_education_2,
clm_education_3:data.clm_education_3
};

db.query(sql,post,function(err,result){
if(err) throw err;
res.json("your data is saved");
})
})

});
});
});

});


///////To get cluster manager.
app.get('/api/get/cluster_manager',function(req,res){
let sql="SELECT a.*, b.cluster_status,b.cluster_name FROM tbl_cluster_manager as a LEFT JOIN tbl_cluster as b ON a.clm_id=b.clm_id";
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})

///To get cluster manager at a particuler id.
app.get('/api/get/cluster_manager/:clm_id',function(req,res){
let sql=`SELECT * FROM tbl_cluster_manager WHERE clm_id='${req.params.clm_id}'`;
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})








// app.post('/api/add/comm_manager',function(req,res){
// res.send("sss");
// var data=req.body;
// let sql="INSERT INTO tbl_comm_manager SET ?";
// let post={
// user_id:data.user_id,
// clm_name:data.clm_name,
// cm_name:data.cm_name,
// emp_code:data.emp_code,
// cm_mob:data.cm_mob,
// comm_id:data.comm_id,
// cm_alt_mob_no:data.cm_alt_mob_no,
// cm_email:data.cm_email,
// cm_address:data.cm_address,
// cm_dob:data.cm_dob,
// cm_gender:data.cm_gender,
// cm_language:data.cm_language,
// cm_education_1:data.cm_education_1,
// cm_education_2:data.cm_education_2,
// cm_education_3:data.clm_education_3
// };

// db.query(sql,post,function(err,result){
// if(err) throw err;
// res.json("your data is saved");
// })
// });




/////To add region manager..
app.post('/api/add/region_manager',function(req,res){

var data=req.body;
//console.log(data);
let post={user_name:data.rm_mob,user_email:data.rm_email,password:data.password,user_type:data.user_type,user_status:"active"};
let sql='INSERT INTO tbl_user SET ?';

let query=db.query(sql,post,function(err,result){
if (err) throw err;

var ds=req.body.rm_email;
var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
var query1=db.query(sql1,function(err,row,fields){
if(err) throw err;
var user_set_id=row[0].user_id;  
var user_type=row[0].user_type;  
console.log(user_set_id);

var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
var empid=row[0].emp_count+1;
var emp_codes="emp_"+empid;   

let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
if (err) throw err;

var data=req.body;
let sql="INSERT INTO tbl_region_manager SET ?";
let post={
user_id:user_set_id,
rm_name:data.rm_name,
emp_code:emp_codes,
rm_mob:data.rm_mob,
rm_alt_mob_no:data.rm_alt_mob_no,
rm_email:data.rm_email,
rm_address:data.rm_address,
rm_dob:data.rm_dob,
rm_gender:data.rm_gender,
rm_language:data.rm_language,
rm_education_1:data.rm_education_1,
rm_education_2:data.rm_education_2,
rm_education_3:data.rm_education_3
};

db.query(sql,post,function(err,result){
if(err) throw err;
res.json("your data is saved");
})
})

});
});
});
});


////To get region manager..
app.get('/api/get/region_manager',function(req,res){
let sql="SELECT b.*, a.region_status, a.region_name FROM tbl_region AS a RIGHT JOIN tbl_region_manager AS b ON a.rm_id = b.rm_id";
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})


///To get region manager at particular id.
app.get('/api/get/region_manager/:rm_id',function(req,res){
let sql=`SELECT * FROM tbl_region_manager WHERE rm_id='${req.params.rm_id}'`;
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})



////To add community manager.
app.post('/api/add/comm_manager',function(req,res){

var data=req.body;
//console.log(data);
let post={user_name:data.cm_mob,user_email:data.cm_email,password:data.password,user_type:data.user_type,user_status:"active"};
let sql='INSERT INTO tbl_user SET ?';

let query=db.query(sql,post,function(err,result){
if (err) throw err;

var ds=req.body.cm_email;
var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
var query1=db.query(sql1,function(err,row,fields){
if(err) throw err;
var user_set_id=row[0].user_id;  
var user_type=row[0].user_type;  
console.log(user_set_id);

var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
var empid=row[0].emp_count+1;
var emp_codes="emp_"+empid;   

let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
if (err) throw err;

var data=req.body;
let sql="INSERT INTO tbl_comm_manager SET ?";
let post={
user_id:user_set_id,
cm_name:data.cm_name,
emp_code:emp_codes,
cm_mob:data.cm_mob,
cm_alt_mob_no:data.cm_alt_mob_no,
cm_email:data.cm_email,
cm_address:data.cm_address,
cm_dob:data.cm_dob,
cm_gender:data.cm_gender,
cm_language:data.cm_language,
cm_education_1	:data.cm_education_1,
cm_education_2:data.cm_education_2,
cm_education_3:data.cm_education_3
};

db.query(sql,post,function(err,result){
if(err) throw err;
res.json("your data is saved");
})
})

});
});
});
});




///To get community manager.
app.get('/api/get/comm_manager',function(req,res){
let sql="SELECT a.*, b.comm_name, b.comm_status FROM tbl_comm_manager AS a LEFT JOIN tbl_community AS b ON a.cm_id = b.cm_id";
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})



/////To get community manager at perticular id.
app.get('/api/get/comm_manager/:cm_id',function(req,res){
let sql=`SELECT * FROM tbl_comm_manager WHERE cm_id='${req.params.cm_id}'`;
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
})



////To add care cordinator manager.
app.post('/api/add/care_corrdinator',function(req,res){

var data=req.body;
//console.log(data);
let post={user_name:data.ccd_mob,user_email:data.ccd_email,password:data.password,user_type:data.user_type,user_status:"active"};
let sql='INSERT INTO tbl_user SET ?';

let query=db.query(sql,post,function(err,result){
if (err) throw err;

var ds=req.body.ccd_email;
var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
var query1=db.query(sql1,function(err,row,fields){
if(err) throw err;
var user_set_id=row[0].user_id;  
var user_type=row[0].user_type;  
console.log(user_set_id);

var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
var empid=row[0].emp_count+1;
var emp_codes="emp_"+empid;   

let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
if (err) throw err;

var data=req.body;
let sql="INSERT INTO tbl_care_coordinator SET ?";
let post={
user_id:user_set_id,
ccd_name:data.ccd_name,
emp_code:emp_codes,
ccd_mob:data.ccd_mob,
ccd_alt_mob_no:data.ccd_alt_mob_no,
ccd_email:data.ccd_email,
ccd_address:data.ccd_address,
ccd_dob:data.ccd_dob,
ccd_gender:data.ccd_gender,
ccd_language:data.ccd_language,
ccd_education_1	:data.ccd_education_1,
ccd_education_2:data.ccd_education_2,
ccd_education_3:data.ccd_education_3
};

db.query(sql,post,function(err,result){
if(err) throw err;
res.json("your data is saved");
})
})

});
});
});
});



///To get care cordinator .
app.get('/api/get/care_coordinator',function(req,res){
console.log("aa");
let sql="SELECT * FROM tbl_care_coordinator as a";
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
});





////To add  responder
app.post('/api/add/responder',function(req,res){

var data=req.body;
console.log(data);
let post={user_name:data.res_mob,
user_email:data.rsp_email,
password:data.password,
user_type:data.user_type,
user_status:"active"};
let sql='INSERT INTO tbl_user SET ?';
console.log(post);
let query=db.query(sql,post,function(err,result){
if (err) throw err;

var ds=req.body.rsp_email;
var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
var query1=db.query(sql1,function(err,row,fields){
if(err) throw err;
var user_set_id=row[0].user_id;  
var user_type=row[0].user_type;  
//console.log(user_set_id);

var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
var empid=row[0].emp_count+1;
var emp_codes="emp_"+empid;   

let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
if (err) throw err;

var data=req.body;
let sql="INSERT INTO tbl_responder SET ?";
let post={
user_id:user_set_id,
rsp_name:data.rsp_name,
emp_code:emp_codes,
res_mob:data.res_mob,
comm_id:data.comm_id,
rsp_alt_mob_no:data.rsp_alt_mob_no,
rsp_email:data.rsp_email,
rsp_address:data.rsp_address,
rsp_dob:data.rsp_dob,
rsp_gender:data.rsp_gender,
rsp_language:data.rsp_language,
rsp_education_1	:data.rsp_education_1,
rsp_education_2:data.rsp_education_2,
rsp_education_3:data.rsp_education_3
};

db.query(sql,post,function(err,result){
if(err) throw err;
res.json("your data is saved");
})
})

});
});
});
});


///To get responder .
app.get('/api/get/responder',function(req,res){
let sql="SELECT a.*, b.comm_name FROM tbl_responder AS a INNER JOIN tbl_community AS b ON a.comm_id = b.comm_id";
let query=db.query(sql,function(err,row,fields){
if(err) throw err;
res.json(row);
});
});




////To add  nurse
app.post('/api/add/nurse',function(req,res){

    var data=req.body;
    ////console.log(data);
    let post={user_name:data.nurse_mob,
    user_email:data.nurse_email,
    password:data.password,
    user_type:data.user_type,
    user_status:"active"};
    let sql='INSERT INTO tbl_user SET ?';
    //console.log(post);
    let query=db.query(sql,post,function(err,result){
    if (err) throw err;
    
    var ds=req.body.nurse_email;
    var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
    var query1=db.query(sql1,function(err,row,fields){
    if(err) throw err;
    var user_set_id=row[0].user_id;  
    var user_type=row[0].user_type;  
    //console.log(user_set_id);
    
    var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
    var empid=row[0].emp_count+1;
    var emp_codes="emp_"+empid;   
    
    let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
    if (err) throw err;
    
    var data=req.body;
    let sql="INSERT INTO tbl_nurse SET ?";
    let post={
    user_id:user_set_id,
    nurse_name:data.nurse_name,
    emp_code:emp_codes,
    nurse_mob:data.nurse_mob,
    cluster_id:data.cluster_id,
    nurse_alt_mob_no:data.nurse_alt_mob_no,
    nurse_email:data.nurse_email,
    nurse_address:data.nurse_address,
    nurse_dob:data.nurse_dob,
    nurse_gender:data.nurse_gender,
    nurse_language:data.nurse_language,
    nurse_education_1:data.nurse_education_1,
    nurse_education_2:data.nurse_education_2,
    nurse_education_3:data.nurse_education_3,
    nurse_duty_hrs:data.nurse_duty_hrs,
    nurse_shift:data.nurse_shift
    };
    
    db.query(sql,post,function(err,result){
    if(err) throw err;
    res.json("your data is saved");
    })
    })
    
    });
    });
    });
    });

///To get nurse .
app.get('/api/get/nurse',function(req,res){
    let sql="SELECT a.*, b.cluster_name FROM tbl_nurse as a INNER JOIN tbl_cluster as b on a.cluster_id=b.cluster_id ";
    let query=db.query(sql,function(err,row,fields){
    if(err) throw err;
    res.json(row);
    });
    });






////To add  attendent
app.post('/api/add/attendent',function(req,res){

    var data=req.body;
    ////console.log(data);
    let post={user_name:data.attd_mob,
    user_email:data.attd_email,
    password:data.password,
    user_type:data.user_type,
    user_status:"active"};
    let sql='INSERT INTO tbl_user SET ?';
    console.log(post);
    let query=db.query(sql,post,function(err,result){
    if (err) throw err;
    
    var ds=req.body.attd_email;
    var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
    var query1=db.query(sql1,function(err,row,fields){
    if(err) throw err;
    var user_set_id=row[0].user_id;  
    var user_type=row[0].user_type;  
    console.log(user_set_id);
    
    var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
    var empid=row[0].emp_count+1;
    var emp_codes="emp_"+empid;   
    
    let query_updated=db.query(`UPDATE tbl_variable_count SET emp_count='${empid}'`,function(result){
    if (err) throw err;
    
    var data=req.body;
    let sql="INSERT INTO tbl_attendant SET ?";
    let post={
    user_id:user_set_id,
    attd_name:data.attd_name,
    emp_code:emp_codes,
    attd_mob:data.attd_mob,
    cluster_id:data.cluster_id,
    attd_alt_mob_no:data.attd_alt_mob_no,
    attd_email:data.attd_email,
    attd_address:data.attd_address,
    attd_dob:data.attd_dob,
    attd_gender:data.attd_gender,
    attd_language:data.attd_language,
    attd_education_1:data.attd_education_1,
    attd_education_2:data.attd_education_2,
    attd_education_3:data.attd_education_3,
    };
    console.log(post);
    db.query(sql,post,function(err,result){
    if(err) throw err;
    res.json("your data is saved");
    })
    })
    
    });
    });
    });
    });

///To get nurse .
app.get('/api/get/attendent',function(req,res){
    let sql="SELECT * FROM tbl_attendant as a INNER JOIN tbl_cluster as b on a.cluster_id=b.cluster_id ";
    let query=db.query(sql,function(err,row,fields){
    if(err) throw err;
    res.json(row);
    });
    });




}