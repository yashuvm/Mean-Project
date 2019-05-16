const bcrypt=require('bcrypt');
const passport=require('passport');
const bodyParser=require('body-parser');
var session=require('express-session');
const express=require('express');
const app=express();
const db=require('../database/db');


//use middleware
app.use(passport.initialize());
app.use(passport.session());


//use body parser middleware
app.use(bodyParser.json());




module.exports=function(app){

app.post('/api/login',function(req,res){
var email=req.body.email;
console.log(req.body.email);
var sql=`Select * from user where user_email='${email}'`;
db.query(sql,function(err,row,fields){
 req.session.email_id=row[0].user_id;
 const password=row[0].password;

bcrypt.compare(req.body.password,password,function(err,result){
if(result==true){
res.json({message:"You are login",session:req.session.email_id,username:row[0].user_name});
}else{
    {res.send("username and password is not matched");}
}
});
});

});

app.get('/api/logout',function(req,res){
req.session.destroy(function(err){
if(!err){
    res.send('You are logout');
}
else{
    res.send(err);
}
});
});

app.get('/api/dashboard',function(req,res){
    if(req.session.email_id){
        res.json(req.session.email_id);
    }else{
        res.json("please login first");
    }
})

}