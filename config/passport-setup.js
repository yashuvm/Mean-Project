const passport=require('passport');

const GoogleStrategy=require('passport-google-oauth20');
const keys=require('./keys')
const User=require('../models/user-model');

passport.serializeUser((user,done)=>{
done(null,user.id);
});

passport.deserializeUser((id,done)=>{
        User.findById(id).then((user)=>{
                done(null,user);
        });
         });


passport.use(
    new GoogleStrategy({
        callbackURL:'/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
},(accessToken,refrehToken,profile,done)=>{
        //passport callback function 
        // console.log('passport callback function fired');
        // console.log(profile);

        //chceck if user already exixst in our db
        User.findOne({googleId:profile.id}).then((currentUser)=>{
                if(currentUser){
                        //already have a user
                        console.log('user is ',currentUser);

                        done(null,currentUser);
                }
                else{
                        //if not create user in out db
                        
                                new User({
                                        username:profile.displayName,
                                        googleId:profile.id
                                }).save().then((newUser)=>{
                                        console.log('new user created:'+newUser);
                                        done(null,newUser);
                                });
                                        }
                                });



})
) 