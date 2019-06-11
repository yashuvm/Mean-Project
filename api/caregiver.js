const express=require('express');
const app=express();
const db=require('../database/db');

module.exports=function(app){

app.get('/api/get/caregiver',function(req,res){
let sql="SELECT a.user_type,b.crm_name,c.nurse_name,d.attd_name, b.crm_id,c.nurse_id,d.attd_id FROM tbl_user as a LEFT JOIN tbl_care_manager as b on a.user_id=b.user_id LEFT JOIN tbl_nurse as c on a.user_id=c.user_id LEFT JOIN tbl_attendant as d on a.user_id=d.user_id WHERE a.user_type IN('nurse','caremanager','attendent')";
db.query(sql,function(err,result,fields){
if(err) throw err;
res.json(result);
});
});




app.post('/api/get/assignduty',function(req,res){
let sql="INSERT INTO tbl_cust_crm_map SET  ?";
let post={
    cust_id:req.body.cust_id,
    crm_id:req.body.crm_id
}
db.query(sql,post,function(err,result){
    if(err) throw err;
    res.json("success");
})
});

app.get('/api/get/customer/:comm_id',(req,res)=>{
    let sql=`SELECT a.cust_name,a.cust_id FROM tbl_customer_master AS a INNER JOIN tbl_community as b on a.comm_id=b.comm_id WHERE b.comm_id='${req.params.comm_id}'`;
    db.query(sql,(err,result,fields)=>{
        if (err) throw err;
        res.json(result);
    });
})
}