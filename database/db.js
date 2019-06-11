var mysql=require('mysql');

var db=mysql.createConnection({
    host     : 'ec2-13-234-179-251.ap-south-1.compute.amazonaws.com',
    user     : 'testuser',
    password : 'password',
    database : 'testing',

    // host     : 'localhost',
    // user     : 'root',
    // password : '',
    // database : 'emoha1',


    // host     : 'ec2-13-233-7-113.ap-south-1.compute.amazonaws.com',
    // user     : 'testuser',
    // password : 'password',
    // database : 'testing',

});

db.connect((err)=>{ 
    if(err){
    console.log(err);
}else{
    console.log("Connected");
}
});
module.exports=db;
