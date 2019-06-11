const express=require('express');
const app=express();
const db=require('../database/db');

module.exports=function(app){

    app.get('/api/data_admin/get',function(req,res){
        let sql="SELECT * FROM tbl_datadmin as a INNER JOIN tbl_user as b on a.user_id=b.user_id";
        db.query(sql,function(err,row,field){
            res.json(row);
        });
 });

 app.post('/api/data_admin/get_self',function(req,res){
    var data=req.body;     
    post={
        admin_alt_mob_no:data.admin_alt_mob_no,
        admin_email:data.admin_email,
        admin_address:data.admin_address,
        admin_dob:data.admin_dob,
        admin_gender:data.admin_gender,
        admin_language:data.admin_language,
        admin_education_1:data.admin_education_1,
        admin_education_2:data.admin_education_2,
        admin_education_3:data.admin_education_3,
     }
    let sql="INSERT INTO tbl_dataadmin_details SET ?";
    db.query(sql,post,function(err,row,field){
        if(err) throw err;
    });

    post1={
        user_name:data.user_name,
        user_email:data.admin_email,
        password:"ssss",
        user_status:"Active",
        user_type:"dataadmin"
    }
    let sql1="INSERT INTO tbl_user SET ?";
    db.query(sql1,post1,function(err,row,field){
        if(err) throw err;
        res.json("data is saved");
    })
});


app.get('/api/get/dataadmin/:admin_id',function(req,res){
let sql2=`select * from tbl_dataadmin_details where admin_id='${req.params.admin_id}'`;
db.query(sql2,function(err,row,field){
    if(err) throw err;
    res.json(row);
});
});

app.put('/api/put/dataadmin/:admin_id',function(req,res){
    var data=req.body;
    var post4={
        admin_alt_mob_no:data.admin_alt_mob_no,
        admin_email:data.admin_email,
        admin_address:data.admin_address,
        admin_dob:data.admin_dob,
        admin_gender:data.admin_gender,
        admin_language:data.admin_language,
        admin_education_1:data.admin_education_1,
        admin_education_2:data.admin_education_2,
        admin_education_3:data.admin_education_3,
    }
let sql3=`UPDATE tbl_dataadmin_details SET ? where admin_id='${req.params.admin_id}'`;
db.query(sql3,post4,function(err,row,field){
    if(err) throw err;
    res.json("your data is updated");
});
});


}