const router=require('express').Router();
const authCheck=(req,res,next)=>{
    if(!req.user){
        //if user is not login
        res.redirect('auth/login');
    }
    else{
        //if logged in 
        next();
    }
}




router.get('/',authCheck,function(req,res){
//res.send('you are login '+req.user.username);
console.log(req.user+'sss');
res.render('profile',{user:req.user});

});

module.exports=router;