const router=require('express').Router();
const passport=require('passport');
const passportSetup=require('../config/passport-setup');



//auth login
router.get('/login',function(req,res){
res.render('login');
});

//auth logout
router.get('/logout',function(req,res){
//handle with passport
    //res.send('logingout');
    req.logout();
    res.redirect('/');

});




router.get('/google',passport.authenticate('google',{
    scope:['profile']

}));

//callback route for google to redirect to 
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
   
//res.send(req.user);
res.redirect('/profile');
});



module.exports=router;                                         