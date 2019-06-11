const express=require('express');
const app=express();
const db=require('../database/db');

module.exports=function(app){

////To add region in  the table.
app.post('/api/add/region',function(req,res){
var data=req.body;
let sql='INSERT INTO tbl_region SET ?';
let post={
region_name:req.body.region_name,
region_location:req.body.region_location,
region_address:req.body.region_address,
region_phone:req.body.region_phone,
region_status:"active",
rm_id:req.body.rm_id
}
db.query(sql,post,function(err,result){
if(err) throw err;
res.json("success");
}); 
});

////To get region from   the table.
app.get('/api/get/region',function(req,res){
let sql="SELECT a.*, b.rm_name FROM tbl_region as a INNER JOIN tbl_region_manager as b ON a.rm_id=b.rm_id";
db.query(sql,function(err,result,field){
if(err) throw err;
res.json(result);
});
});

////////To get region manager from the table.
app.get('/api/get/region_manager',function(req,res){
let sql="select * from tbl_region_manager";
db.query(sql,function(err,result){
if(err) throw (err);
res.json(result);
});
});

////update region  from the table.
app.put('/api/update/region/:region_id',function(req,res){
var data=req.body;
let sql=`UPDATE  tbl_region SET ? where region_id='${req.params.region_id}'`;
let post={
region_name:data.region_name,
region_location:data.region_location,
region_address:data.region_address,
region_phone:data.region_phone,
region_status:data.region_status

}   
db.query(sql,post,function(err,result){
if(err) throw err;
post1={
region_id:req.params.region_id
}
let sql1=`UPDATE TABLE tbl_region_manager SET ? WHERE rm_id=${data.rm_id}`;
db.query(sql1,post1,function(err,result){
if(err) res.json(err);
res.json("region data is saved");
});
})
});



///To add cluster  in the  table.
app.post('/api/add/cluster',function(req,res){
data=req.body;
let sql="INSERT INTO tbl_cluster SET ?";
let post={
cluster_name:data.cluster_name,
cluster_location:data.cluster_location,
cluster_address:data.cluster_address,
cluster_phone:data.cluster_phone,
cluster_status:'active',
clm_id:data.clm_id
}
db.query(sql,post,function(err,result){
if(err) throw err;


let sql2="SELECT MAX(cluster_id) as clusterid FROM tbl_cluster";
db.query(sql2,function(err,result){
if(err) throw err;
//console.log(result);
var cluster_ids=result[0].clusterid;

let sql2="INSERT INTO tbl_cluster_map SET ?";
let post2={
cluster_id:cluster_ids,
region_id:data.region_id
}
db.query(sql2,post2,function(err,result){
if(err) throw err;
res.json("cluster data is saved");
})

});
}); 
});

//////To get cluster  from  the  table
app.get('/api/get/cluster',function(req,res){
let sql="SELECT a.*, b.clm_name, d.region_name FROM tbl_cluster AS a INNER JOIN tbl_cluster_manager AS b ON a.clm_id = b.clm_id INNER JOIN tbl_cluster_map as c on c.cluster_id=a.cluster_id INNER JOIN tbl_region as d on d.region_id=c.region_id";
db.query(sql,function(err,result,field){
if(err) throw err;
res.json(result);
});
});

///To update cluster  table
app.put('/api/put/cluster/cluster_id',function(req,res){
data=req.body;
let sql=`UPDATE tbl_cluster SET ? WHERE cluster_id=${req.params.cluster_id}`;
let post={
cluster_name:data.cluster_name,
cluster_location:data.cluster_location,
cluster_address:data.cluster_address,
cluster_phone:data.cluster_phone,
cluster_status:'active'
}
db.query(sql,post,function(err,result){
if(err) throw err;


let sql2="SELECT MAX(cluster_id) as clusterid FROM tbl_cluster";
db.query(sql2,function(err,result){
if(err) throw err;
console.log(result);
var cluster_ids=result[0].clusterid;
post1={
cluster_id:result[0].clusterid
}
console.log(post1)
let sql1=`UPDATE tbl_cluster_manager SET ? WHERE clm_id=${data.clm_id}`;
db.query(sql1,post1,function(err,result){
if(err) throw err;

let sql2="INSERT INTO tbl_cluster_map SET ?";
let post2={
cluster_id:cluster_ids,
region_id:data.region_id
}
db.query(sql2,post2,function(err,result){
if(err) throw err;
res.json("region data is saved");
})
});
})
}); 
});


app.post('/api/add/community',function(req,res){
var data=req.body;
let sql="INSERT INTO tbl_community SET ?";
let post={
comm_name:data.comm_name,
comm_location:data.comm_location,
comm_address:data.comm_address,
comm_phone:data.comm_phone,
comm_status:'active',
cm_id:data.cm_id

}
db.query(sql,post,function(err,result){
if(err) throw err;

let sql2="SELECT MAX(comm_id) as commid FROM tbl_community";
db.query(sql2,function(err,result){
if(err) throw err;
console.log(result);
var comm_ids=result[0].commid;

let sql2="INSERT INTO tbl_zone_map SET ?";
let post2={
cluster_id:data.cluster_id,
comm_id:comm_ids
}
db.query(sql2,post2,function(err,result){
if(err) throw err;
res.json("success");
})
});

});
});




app.get('/api/get/community',function(req,res){
let sql="SELECT a.*, b.cm_name, d.cluster_name, f.region_name FROM tbl_community AS a INNER JOIN tbl_comm_manager AS b ON a.cm_id = b.cm_id LEFT JOIN tbl_zone_map AS c ON c.comm_id = a.comm_id LEFT JOIN tbl_cluster AS d ON d.cluster_id = c.cluster_id LEFT JOIN tbl_cluster_map AS e ON e.cluster_id = c.cluster_id LEFT JOIN tbl_region AS f ON f.region_id = e.region_id";
db.query(sql,function(err,result,field){
if(err) throw err;
res.json(result);
});
})

app.get('/api/all',function(req,res){
let sql="SELECT a.region_name, c.cluster_name, f.comm_name FROM tbl_region AS a INNER JOIN tbl_cluster_map AS b ON a.region_id = b.region_id INNER JOIN tbl_cluster AS c ON b.cluster_id = c.cluster_id INNER JOIN tbl_zone_map AS d ON d.cluster_id = b.cluster_id INNER JOIN tbl_community AS f ON f.comm_id = d.comm_id";
db.query(sql,function(err,result,field){
if(err) throw err;
res.json(result);
});
});


app.post('/api/token',function(req,res){
 var token=req.body.token;
 console.log(token);   
 res.send('hello');
    });


}

