const express=require('express');
const app=express();
const db=require('../databsase/db');




module.exports=function(app){
app.get('/api/employee',function(req,res){
    db.query('Select * from testings',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
           res.json(err);
        }
    })
});
}