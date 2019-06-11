const express=require('express');
const app=express();
const db=require('../database/db');
const bodyParser=require('body-parser');
app.use(express.static('public'));

module.exports=function(app){


app.post('/api/resgister',function(req,res){
var data=req.body;
var password="$2b$10$Vjz4gHBYk0vtTy8PG7LNBukgiuXXRxgg4Bgpdvv9Ek.cMclPOpo/a";
var datetime = new Date();
var current_date=datetime.toISOString().slice(0,10);

//var current_date=
//insert row in table_user
let post={user_name:data.homecare_reg.user_name,user_email:data.personal_details.user_email,password:password,user_type:data.homecare_reg.user_type,user_status:"active"};
let sql='INSERT INTO tbl_user SET ?';

let query=db.query(sql,post,function(err,result){
if (err) throw err;
if(result){


//get user_id and user_type       
var ds=req.body.personal_details.user_email;
var sql1=`SELECT * FROM tbl_user WHERE user_email='${ds}'`;
var query1=db.query(sql1,function(err,row,fields){
if (err) throw err;
//console.log(row);
var user_set_id=row[0].user_id;  
var user_type=row[0].user_type;  
//console.log(user_type);


// check condition if user_type==customer insert into tbl master customer
if(user_type=="customer"){
var qyery_custid=db.query("SELECT * FROM tbl_variable_count",function(err,row,fields){
var custid=row[0].cust_count+1;
var cust_codes="cust_"+custid;


//update tbl_varriable_count table         
let query_updated=db.query(`UPDATE tbl_variable_count SET cust_count='${custid}'`,function(result){
if (err) throw err;


//insert data into tbl_customer_master table         
var post2={user_id:user_set_id,
cust_code:cust_codes,
cust_name:data.homecare_reg.user_name,
cust_mob:data.homecare_reg.mobile_number,
alert_mob:data.homecare_reg.alert_mob,
pri_emg_name:data.emergency_details.pri_emg_name,
pri_emg_mob:data.emergency_details.pri_emg_mob,
comm_id:0,
regn_type:data.homecare_reg.regn_type,
date:current_date
};


var sql2="INSERT INTO tbl_customer_master SET ?";
var query2=db.query(sql2,post2,function(err,result){
if (err) throw err;

///fetch cust_id from tbl_customer_master
var sql9=`SELECT  * FROM  tbl_customer_master where cust_code='${cust_codes}'`;
//var sql9=`select * from tbl_customer_master where user_id='${user_set_id}'`;
var query9=db.query(sql9,function(err,row,fields){  
if (err) throw err;
var cust_idss=row[0].cust_id;

///insert data into tbl_personal_details       
let post3={

"preferred_name":data.homecare_reg.prefered_name,
"cust_id":cust_idss,
"cust_email":data.personal_details.user_email,
"cust_address":data.personal_details.cust_address,
"cust_community":data.personal_details.cust_community,
//"cust_geolocation":data.personal_details.cust_geolocation,
"cust_height":data.personal_details.cust_height,
"cust_weight":data.personal_details.cust_weight,
"cust_geolocation":data.personal_details.cust_geolocation,
"cust_category":data.personal_details.cust_category,
"cust_language":data.personal_details.cust_language,
"cust_dob":data.personal_details.cust_dob,
"cust_gender":data.personal_details.cust_gender,
"cust_marital_status":data.personal_details.cust_marital_status,
"cust_dom":data.personal_details.cust_dom,
"cust_religion":data.personal_details.cust_religion,
"cust_living_situation":data.personal_details.cust_living_situation,
"cust_statying_with":data.personal_details.cust_staying_with,
"cust_family_member_1":data.personal_details.cust_family_member_1,
"cust_family_member_2":data.personal_details.cust_family_member_2,
"cust_family_member_3":data.personal_details.cust_family_member_3,
"cust_education_1":data.personal_details.cust_education_1,
"cust_education_2":data.personal_details.cust_education_2,
"cust_education_3":data.personal_details.cust_education_3,
"cust_asset_1":data.personal_details.cust_asset_1,
"cust_asset_2":data.personal_details.cust_asset_2,
"cust_asset_3":data.personal_details.cust_asset_3,
"cust_risk_assessment_1":data.personal_details.cust_risk_assessment_1,
"cust_risk_assessment_2":data.personal_details.cust_risk_assessment_2,
"cust_risk_assessment_3":data.personal_details.cust_risk_assessment_3,
"cust_risk_assessment_4":data.personal_details.cust_risk_assessment_4,
"cust_risk_assessment_5":data.personal_details.cust_risk_assessment_5,
}    
let sql3="INSERT INTO tbl_cust_personal_details SET ?";
//console.log(post3);
let query3=db.query(sql3,post3,function(err,result){

if (err) throw err;
//insert data into tbl emrg
let post4=
{ 
"cust_id":cust_idss,
"pri_emg_name":data.emergency_details.pri_emg_name,
"pri_emg_gender":data.emergency_details.pri_emg_gender,
"pri_emg_dob":data.emergency_details.pri_emg_dob,
"pri_emg_email":data.emergency_details.pri_emg_email,
"pri_emg_address":data.emergency_details.pri_emg_address,
"pri_emg_mob":data.emergency_details.pri_emg_mob,
"pri_emg_whatsapp":data.emergency_details.pri_emg_whatsapp,
"pri_emg_phone":data.emergency_details.pri_emg_phone,
"pri_emg_relationship":data.emergency_details.pri_emg_relationship,
"pri_emg_availability":data.emergency_details.pri_emg_availability,
"secd_emg_name":data.emergency_details.secd_emg_name,
"secd_emg_gender":data.emergency_details.secd_emg_gender,
"secd_emg_dob":data.emergency_details.secd_emg_dob,
"secd_emg_email":data.emergency_details.secd_emg_email,
"secd_emg_address":data.emergency_details.secd_emg_address,
"secd_emg_mob":data.emergency_details.secd_emg_mob,
"secd_emg_whatsapp":data.emergency_details.secd_emg_whatsapp,
"secd_emg_phone":data.emergency_details.secd_emg_phone,
"secd_emg_relationship":data.emergency_details.secd_emg_relationship,
"secd_emg_availability":data.emergency_details.secd_emg_availability,
"nok_emg_name":data.emergency_details.nok_emg_name,
"nok_emg_gender":data.emergency_details.nok_emg_gender,
"nok_emg_dob":data.emergency_details.nok_emg_dob,
"nok_emg_email":data.emergency_details.nok_emg_email,
"nok_emg_address":data.emergency_details.nok_emg_address,
"nok_emg_mob":data.emergency_details.nok_emg_mob,
"nok_emg_whatsapp":data.emergency_details.nok_emg_whatsapp,
"nok_emg_phone":data.emergency_details.nok_emg_phone,
"nok_emg_relationship":data.emergency_details.nok_emg_relationship,
"nok_emg_availability":data.emergency_details.nok_emg_availability,
"doc_name":data.emergency_details.doc_name,
"doc_address":data.emergency_details.doc_address,
"doc_mob":data.emergency_details.doc_mob,
"doc_whatsapp":data.emergency_details.doc_whatsapp,
"doc_speciality":data.emergency_details.doc_speciality,
"doc_hospital":data.emergency_details.doc_hospital,
"doc_hospital_phone":data.emergency_details.doc_hospital_phone,
"hospital_name":data.emergency_details.hospital_name,
"hospital_address":data.emergency_details.hospital_address,
"hospital_phone":data.emergency_details.hospital_phone,
"li_policy_agent_name":data.emergency_details.li_policy_agent_name,
"li_policy_agent_mob":data.emergency_details.li_policy_agent_mob,
"hi_policy_agent_name":data.emergency_details.hi_policy_agent_name,
"hi_policy_agent_mob":data.emergency_details.hi_policy_agent_mob,

}

let sql4="INSERT INTO tbl_cust_emergency_details SET ?";
let query4=db.query(sql4,post4,function(err,result){
if (err) throw err;


//insert data into customer medical table
let post5={
"cust_id":cust_idss,
//"cust_med_cond":data.medicals_details.cust_med_cond,
//"cust_diet_restriction":data.medicals_details.cust_diet_restriction,

"cust_blood_grp":data.medicals_details.cust_blood_grp,
"cust_pulse_rate":data.medicals_details.cust_pulse_rate,
"cust_blood_pressure":data.medicals_details.cust_blood_pressure,
//"cust_body_type":data.medicals_details.cust_body_type,
"cust_prev_care":data.medicals_details.cust_prev_care,
"cust_prev_care_duration":data.medicals_details.cust_prev_care_duration,
"cust_nos_falls":data.medicals_details.cust_nos_falls,
"cust_fall_injury":data.medicals_details.cust_fall_injury,
"cust_allergy_reaction_1":data.medicals_details.cust_allergy_reaction_1,
"cust_allergy_reaction_2":data.medicals_details.cust_allergy_reaction_2,
"cust_allergy_reaction_3":data.medicals_details.cust_allergy_reaction_3,
"cust_med_diagnosis":data.medicals_details.cust_med_diagnosis,
"other_diagnosis":data.medicals_details.other_diagnosis,
"cust_surgery_and_date_1":data.medicals_details.cust_surgery_and_date_1,
"cust_surgery_and_date_2":data.medicals_details.cust_surgery_and_date_2,
"cust_surgery_and_date_3":data.medicals_details.cust_surgery_and_date_3,
"cust_mobility_device":data.medicals_details.cust_mobility_device,
"other_mobility_device":data.medicals_details.other_mobility_device,
"cust_current_mobility_equip":data.medicals_details.cust_current_mobility_equip,
"other_current_equipment":data.medicals_details.other_current_equipment,
"cust_need_mobility_equip":data.medicals_details.cust_need_mobility_equip,
"other_need_mobility_equip":data.medicals_details.other_need_mobility_equip,
"communicable_disease":data.medicals_details.communicable_disease,
"falls_remarks":data.medicals_details.falls_remarks


}     
let sql5="INSERT INTO tbl_cust_medical_details SET ?";
let query5=db.query(sql5,post5,function(err,result){
if (err) throw err;



//insert data into functional ability table          
let post6={
"cust_id":cust_idss,
"eating_asst_level":data.functional_ability_details.eating_asst_level,
"grooming_asst_level":data.functional_ability_details.grooming_asst_level,
"bathing_asst_level":data.functional_ability_details.bathing_asst_level,
"dressing_upper_body_asst_level":data.functional_ability_details.dressing_upper_body_asst_level,
"dressing_lower_body_asst_level":data.functional_ability_details.dressing_lower_body_asst_level,
"toileting_asst_level":data.functional_ability_details.toileting_asst_level,
"bladder_mgmt_asst_level":data.functional_ability_details.bladder_mgmt_asst_level,
"bowel_mgmt_asst_level":data.functional_ability_details.bowel_mgmt_asst_level,
"transferrring_bed_asst_level":data.functional_ability_details.transferrring_bed_asst_level,
"transferrring_toilet_asst_level":data.functional_ability_details.transferrring_toilet_asst_level,
"transferrring_shower_asst_level":data.functional_ability_details.transferrring_shower_asst_level,
"walking_wheel_chair_asst_level":data.functional_ability_details.walking_wheel_chair_asst_level,
"walking_stairs_asst_level":data.functional_ability_details.walking_stairs_asst_level,
"comprehension_asst_level":data.functional_ability_details.comprehension_asst_level,
"expression_asst_level":data.functional_ability_details.expression_asst_level,
"social_interaction_asst_level":data.functional_ability_details.social_interaction_asst_level,
"problem_solving_asst_level":data.functional_ability_details.problem_solving_asst_level,
"memory_asst_level":data.functional_ability_details.memory_asst_level,
"hearing_impairments":data.functional_ability_details.hearing_impairments,
"hearing_aids":data.functional_ability_details.hearing_aids,
"visual_impairments":data.functional_ability_details.visual_impairments,
"visual_aids":data.functional_ability_details.visual_aids,
"swallowing_difficulties":data.functional_ability_details.swallowing_difficulties,
"special_diet":data.functional_ability_details.special_diet
}
let sql6="INSERT INTO tbl_cust_functional_ability SET ?";
let query6=db.query(sql6,post6,function(err,result){
if (err) throw err;


//insert data into cognitive table            
let post7=
{
"cust_id":cust_idss,
"understand_verbal_content":data.cognitive_status_details.understand_verbal_content,
"three_word_test":data.cognitive_status_details.three_word_test,
"clock_test":data.cognitive_status_details.clock_test,
"remembering_test":data.cognitive_status_details.remembering_test,
"oriented_to_time":data.cognitive_status_details.oriented_to_time,
"oriented_to_location":data.cognitive_status_details.oriented_to_location,
"Withdrawal":data.cognitive_status_details.Withdrawal,
"refusing_medication_comments":data.cognitive_status_details.refusing_medication_comments,
"easily_agitated_comments":data.cognitive_status_details.easily_agitated_comments,
"verbal_aggression_comments":data.cognitive_status_details.verbal_aggression_comments,
"sleeplessness_comments":data.cognitive_status_details.sleeplessness_comments,
"refuses_hygiene_comments":data.cognitive_status_details.refuses_hygiene_comments,
"physical_aggression_comments":data.cognitive_status_details.physical_aggression_comments,
"wandering_comments":data.cognitive_status_details.wandering_comments,
"self_harm_comments":data.cognitive_status_details.self_harm_comments,
"repetitive_statements_comments":data.cognitive_status_details.repetitive_statements_comments,
"hallucinations_delusions_comments":data.cognitive_status_details.hallucinations_delusions_comments,
"paranoia_comments":data.cognitive_status_details.paranoia_comments,
"other_behaviour":data.cognitive_status_details.other_behaviour,
"pain_pt_and_stage_1":data.cognitive_status_details.pain_pt_and_stage_1,
"pain_pt_and_stage_2":data.cognitive_status_details.pain_pt_and_stage_2,
"pain_pt_and_stage_3":data.cognitive_status_details.pain_pt_and_stage_3,
"pain_pt_and_stage_4":data.cognitive_status_details.pain_pt_and_stage_4,
"pain_pt_and_stage_5":data.cognitive_status_details.pain_pt_and_stage_5,
"major_wounds":data.cognitive_status_details.major_wounds,
"other_major_wounds":data.cognitive_status_details.other_major_wounds,

}
let sql7="INSERT INTO tbl_cust_cognitive_status SET ?";
let query7=db.query(sql7,post7,function(err,result){
if (err) throw err;

//insert data into meidcation table           
let post8={
"cust_id":cust_idss,
"cust_medicine_1":data.medicatoin_status_details.cust_medicine_1,
"cust_medicine_2":data.medicatoin_status_details.cust_medicine_2,
"cust_medicine_3":data.medicatoin_status_details.cust_medicine_3,
"cust_medicine_4":data.medicatoin_status_details.cust_medicine_4
};

let sql8="INSERT INTO tbl_cust_medication SET ?";
let query8=db.query(sql8,post8,function(err,result){
if (err) throw err;
//res.send("your data is saved"+cust_idss);

////////data of social
let post12={
"cust_id":cust_idss,
"cust_school":data.social_details.cust_school,
"cust_last_employment":data.social_details.cust_last_employment,
"cust_wakeup_time":data.social_details.cust_wakeup_time,
"cust_bed_time":data.social_details.cust_bed_time,
"cust_shower_time":data.social_details.cust_shower_time,
"cust_shower":data.social_details.cust_shower,
"cust_fav_food":data.social_details.cust_fav_food,
"cust_fav_music":data.social_details.cust_fav_music,
"cust_fav_singer":data.social_details.cust_fav_singer,
"cust_fav_musician":data.social_details.cust_fav_musician,
"cust_fav_sports":data.social_details.cust_fav_sports,
"cust_fav_athletes":data.social_details.cust_fav_athletes,
"cust_fav_book":data.social_details.cust_fav_book,
"cust_enjoy_spiritual":data.social_details.cust_enjoy_spiritual,
"cust_special_note":data.social_details.cust_special_note
};

let sql12="INSERT INTO tbl_cust_social_background SET ?";
let query8=db.query(sql12,post12,function(err,result){
if (err) throw err;
res.json(cust_idss);
});


});

});

})

});

})

})

});

});
});

});
}
else{
res.send("admin");
console.log("admin");
}
});
}
});

});

////////To get  user_id and user_type before submit the document
 


///////////////////////////////update personal
app.put('/api/put/personal_details/:cust_id',function(req,res){
console.log("ssdsds");
var data=req.body;
console.log(data);
let post={
"preferred_name":data.personal_details.preferred_name,
"cust_id":req.params.cust_id,
"cust_email":data.personal_details.user_email,
"cust_address":data.personal_details.cust_address,
"cust_community":data.personal_details.cust_community,
"cust_geolocation":data.personal_details.cust_geolocation,
"cust_height":data.personal_details.cust_height,
"cust_weight":data.personal_details.cust_weight,
"cust_geolocation":data.personal_details.cust_geolocation,
"cust_category":data.personal_details.cust_category,
"cust_language":data.personal_details.cust_language,
"cust_dob":data.personal_details.cust_dob,
"cust_gender":data.personal_details.cust_gender,
"cust_marital_status":data.personal_details.cust_marital_status,
"cust_dom":data.personal_details.cust_dom,
"cust_religion":data.personal_details.cust_religion,
"cust_living_situation":data.personal_details.cust_living_situation,
"cust_statying_with":data.personal_details.cust_staying_with,
"cust_family_member_1":data.personal_details.cust_family_member_1,
"cust_family_member_2":data.personal_details.cust_family_member_2,
"cust_family_member_3":data.personal_details.cust_family_member_3,
"cust_education_1":data.personal_details.cust_education_1,
"cust_education_2":data.personal_details.cust_education_2,
"cust_education_3":data.personal_details.cust_education_3,
"cust_asset_1":data.personal_details.cust_asset_1,
"cust_asset_2":data.personal_details.cust_asset_2,
"cust_asset_3":data.personal_details.cust_asset_3,
"cust_risk_assessment_1":data.personal_details.cust_risk_assessment_1,
"cust_risk_assessment_2":data.personal_details.cust_risk_assessment_2,
"cust_risk_assessment_3":data.personal_details.cust_risk_assessment_3,
"cust_risk_assessment_4":data.personal_details.cust_risk_assessment_4,
"cust_risk_assessment_5":data.personal_details.cust_risk_assessment_5,

}  

let sql=`UPDATE tbl_cust_personal_details SET ? WHERE cust_id='${req.params.cust_id}'`;
db.query(sql,post,function(err,result){
if (err) throw err;

let post1={
comm_id:data.personal_details.comm_id,
"alert_mob":data.personal_details.alert_mob
}  

let sql1=`UPDATE tbl_customer_master SET ? WHERE cust_id='${req.params.cust_id}'`;

db.query(sql1,post1,function(err,result){

if(err) throw err;
console.log("Aa");
res.json("success");




})
});
});

///////////////////////////////update emerg
app.put('/api/put/tbl_cust_emergency_details/:cust_id',function(req,res){
var data=req.body;
let sql=`UPDATE tbl_cust_emergency_details SET ? WHERE cust_id='${req.params.cust_id}'`;
let post={ 
"cust_id":req.params.cust_id,
"pri_emg_name":data.emergency_details.pri_emg_name,
"pri_emg_gender":data.emergency_details.pri_emg_gender,
"pri_emg_dob":data.emergency_details.pri_emg_dob,
"pri_emg_email":data.emergency_details.pri_emg_email,
"pri_emg_address":data.emergency_details.pri_emg_address,
"pri_emg_mob":data.emergency_details.pri_emg_mob,
"pri_emg_whatsapp":data.emergency_details.pri_emg_whatsapp,
"pri_emg_phone":data.emergency_details.pri_emg_phone,
"pri_emg_relationship":data.emergency_details.pri_emg_relationship,
"pri_emg_availability":data.emergency_details.pri_emg_availability,
"secd_emg_name":data.emergency_details.secd_emg_name,
"secd_emg_gender":data.emergency_details.secd_emg_gender,
"secd_emg_dob":data.emergency_details.secd_emg_dob,
"secd_emg_email":data.emergency_details.secd_emg_email,
"secd_emg_address":data.emergency_details.secd_emg_address,
"secd_emg_mob":data.emergency_details.secd_emg_mob,
"secd_emg_whatsapp":data.emergency_details.secd_emg_whatsapp,
"secd_emg_phone":data.emergency_details.secd_emg_phone,
"secd_emg_relationship":data.emergency_details.secd_emg_relationship,
"secd_emg_availability":data.emergency_details.secd_emg_availability,
"nok_emg_name":data.emergency_details.nok_emg_name,
"nok_emg_gender":data.emergency_details.nok_emg_gender,
"nok_emg_dob":data.emergency_details.nok_emg_dob,
"nok_emg_email":data.emergency_details.nok_emg_email,
"nok_emg_address":data.emergency_details.nok_emg_address,
"nok_emg_mob":data.emergency_details.nok_emg_mob,
"nok_emg_whatsapp":data.emergency_details.nok_emg_whatsapp,
"nok_emg_phone":data.emergency_details.nok_emg_phone,
"nok_emg_relationship":data.emergency_details.nok_emg_relationship,
"nok_emg_availability":data.emergency_details.nok_emg_availability,
"doc_name":data.emergency_details.doc_name,
"doc_address":data.emergency_details.doc_address,
"doc_mob":data.emergency_details.doc_mob,
"doc_whatsapp":data.emergency_details.doc_whatsapp,
"doc_speciality":data.emergency_details.doc_speciality,
"doc_hospital":data.emergency_details.doc_hospital,
"doc_hospital_phone":data.emergency_details.doc_hospital_phone,
"hospital_name":data.emergency_details.hospital_name,
"hospital_address":data.emergency_details.hospital_address,
"hospital_phone":data.emergency_details.hospital_phone,
"li_policy_agent_name":data.emergency_details.li_policy_agent_name,
"li_policy_agent_mob":data.emergency_details.li_policy_agent_mob,
"hi_policy_agent_name":data.emergency_details.hi_policy_agent_name,
"hi_policy_agent_mob":data.emergency_details.hi_policy_agent_mob,

}
db.query(sql,post,function(err,result){
if(err) throw err;
res.json("success");
});
});


/////////update medical 
app.put('/api/put/tbl_cust_medical_details/:cust_id',function(req,res){
var data=req.body;
let sql=`UPDATE tbl_cust_medical_details SET ? WHERE cust_id='${req.params.cust_id}'`;
let post={
"cust_id":req.params.cust_id,
//"cust_med_cond":data.medicals_details.cust_med_cond,
//"cust_diet_restriction":data.medicals_details.cust_diet_restriction,

"cust_blood_grp":data.medicals_details.cust_blood_grp,
"cust_pulse_rate":data.medicals_details.cust_pulse_rate,
"cust_blood_pressure":data.medicals_details.cust_blood_pressure,
//"cust_body_type":data.medicals_details.cust_body_type,
"cust_prev_care":data.medicals_details.cust_prev_care,
"cust_prev_care_duration":data.medicals_details.cust_prev_care_duration,
"cust_nos_falls":data.medicals_details.cust_nos_falls,
"cust_fall_injury":data.medicals_details.cust_fall_injury,
"cust_allergy_reaction_1":data.medicals_details.cust_allergy_reaction_1,
"cust_allergy_reaction_2":data.medicals_details.cust_allergy_reaction_2,
"cust_allergy_reaction_3":data.medicals_details.cust_allergy_reaction_3,
"cust_med_diagnosis":data.medicals_details.cust_med_diagnosis,
"other_diagnosis":data.medicals_details.other_diagnosis,
"cust_surgery_and_date_1":data.medicals_details.cust_surgery_and_date_1,
"cust_surgery_and_date_2":data.medicals_details.cust_surgery_and_date_2,
"cust_surgery_and_date_3":data.medicals_details.cust_surgery_and_date_3,
"cust_mobility_device":data.medicals_details.cust_mobility_device,
"other_mobility_device":data.medicals_details.other_mobility_device,
"cust_current_mobility_equip":data.medicals_details.cust_current_mobility_equip,
"other_current_equipment":data.medicals_details.other_current_equipment,
"cust_need_mobility_equip":data.medicals_details.cust_need_mobility_equip,
"other_need_mobility_equip":data.medicals_details.other_need_mobility_equip,
"communicable_disease":data.medicals_details.communicable_disease,
"falls_remarks":data.medicals_details.falls_remarks


}  
db.query(sql,post,function(err,result){
if(err) throw err;
res.json("success");
});
});


//////update functional ability
app.put('/api/put/tbl_cust_functional_ability/:cust_id',function(req,res){
var data=req.body;
let sql=`UPDATE tbl_cust_functional_ability SET ? WHERE cust_id='${req.params.cust_id}'`;
let post={
"cust_id":req.params.cust_id,
"eating_asst_level":data.functional_ability_details.eating_asst_level,
"grooming_asst_level":data.functional_ability_details.grooming_asst_level,
"bathing_asst_level":data.functional_ability_details.bathing_asst_level,
"dressing_upper_body_asst_level":data.functional_ability_details.dressing_upper_body_asst_level,
"dressing_lower_body_asst_level":data.functional_ability_details.dressing_lower_body_asst_level,
"toileting_asst_level":data.functional_ability_details.toileting_asst_level,
"bladder_mgmt_asst_level":data.functional_ability_details.bladder_mgmt_asst_level,
"bowel_mgmt_asst_level":data.functional_ability_details.bowel_mgmt_asst_level,
"transferrring_bed_asst_level":data.functional_ability_details.transferrring_bed_asst_level,
"transferrring_toilet_asst_level":data.functional_ability_details.transferrring_toilet_asst_level,
"transferrring_shower_asst_level":data.functional_ability_details.transferrring_shower_asst_level,
"walking_wheel_chair_asst_level":data.functional_ability_details.walking_wheel_chair_asst_level,
"walking_stairs_asst_level":data.functional_ability_details.walking_stairs_asst_level,
"comprehension_asst_level":data.functional_ability_details.comprehension_asst_level,
"expression_asst_level":data.functional_ability_details.expression_asst_level,
"social_interaction_asst_level":data.functional_ability_details.social_interaction_asst_level,
"problem_solving_asst_level":data.functional_ability_details.problem_solving_asst_level,
"memory_asst_level":data.functional_ability_details.memory_asst_level,
"hearing_impairments":data.functional_ability_details.hearing_impairments,
"hearing_aids":data.functional_ability_details.hearing_aids,
"visual_impairments":data.functional_ability_details.visual_impairments,
"visual_aids":data.functional_ability_details.visual_aids,
"swallowing_difficulties":data.functional_ability_details.swallowing_difficulties,
"special_diet":data.functional_ability_details.special_diet,
"other_special_diet":data.functional_ability_details.other_special_diet,

}
db.query(sql,post,function(err,result){
if(err) res.json(err);
res.json("success");
});
});

//////update cognitive status
app.put('/api/put/tbl_cust_cognitive_status/:cust_id',function(req,res){
var data=req.body;
let sql=`UPDATE tbl_cust_cognitive_status SET ? WHERE cust_id='${req.params.cust_id}'`;
let post={
"cust_id":req.params.cust_id,
"understand_verbal_content":data.cognitive_status_details.understand_verbal_content,
"three_word_test":data.cognitive_status_details.three_word_test,
"clock_test":data.cognitive_status_details.clock_test,
"remembering_test":data.cognitive_status_details.remembering_test,
"oriented_to_time":data.cognitive_status_details.oriented_to_time,
"oriented_to_location":data.cognitive_status_details.oriented_to_location,
"Withdrawal":data.cognitive_status_details.Withdrawal,
"refusing_medication_comments":data.cognitive_status_details.refusing_medication_comments,
"easily_agitated_comments":data.cognitive_status_details.easily_agitated_comments,
"verbal_aggression_comments":data.cognitive_status_details.verbal_aggression_comments,
"sleeplessness_comments":data.cognitive_status_details.sleeplessness_comments,
"refuses_hygiene_comments":data.cognitive_status_details.refuses_hygiene_comments,
"physical_aggression_comments":data.cognitive_status_details.physical_aggression_comments,
"wandering_comments":data.cognitive_status_details.wandering_comments,
"self_harm_comments":data.cognitive_status_details.self_harm_comments,
"repetitive_statements_comments":data.cognitive_status_details.repetitive_statements_comments,
"hallucinations_delusions_comments":data.cognitive_status_details.hallucinations_delusions_comments,
"paranoia_comments":data.cognitive_status_details.paranoia_comments,
"other_behaviour":data.cognitive_status_details.other_behaviour,
"pain_pt_and_stage_1":data.cognitive_status_details.pain_pt_and_stage_1,
"pain_pt_and_stage_2":data.cognitive_status_details.pain_pt_and_stage_2,
"pain_pt_and_stage_3":data.cognitive_status_details.pain_pt_and_stage_3,
"pain_pt_and_stage_4":data.cognitive_status_details.pain_pt_and_stage_4,
"pain_pt_and_stage_5":data.cognitive_status_details.pain_pt_and_stage_5,
"major_wounds":data.cognitive_status_details.major_wounds,
"other_major_wounds":data.cognitive_status_details.other_major_wounds,

}
db.query(sql,post,function(err,result){
if(err) res.json(err);
res.json("success");
});
});





app.put('/api/put/tbl_cust_medication/:cust_id',function(req,res){
var data=req.body;
let sql=`UPDATE tbl_cust_medication SET ? WHERE cust_id='${req.params.cust_id}'`;
let post={
"cust_id":cust_idss,
"cust_medicine_1":data.medicatoin_status_details.cust_medicine_1,
"cust_medicine_2":data.medicatoin_status_details.cust_medicine_2,
"cust_medicine_3":data.medicatoin_status_details.cust_medicine_3,
"cust_medicine_4":data.medicatoin_status_details.cust_medicine_4
};

db.query(sql,post,function(err,result){
if(err) res.json(err);
res.json("success");
});
});


app.put('/api/put/tbl_cust_social_background/:cust_id',function(req,res){
var data=req.body;
let sql=`UPDATE tbl_cust_social_background SET ? WHERE cust_id='${req.params.cust_id}'`;
let post={
"cust_id":req.params.cust_id,
"cust_school":data.social_details.cust_school,
"cust_last_employment":data.social_details.cust_last_employment,
"cust_wakeup_time":data.social_details.cust_wakeup_time,
"cust_bed_time":data.social_details.cust_bed_time,
"cust_shower_time":data.social_details.cust_shower_time,
"cust_shower":data.social_details.cust_shower,
"cust_fav_food":data.social_details.cust_fav_food,
"cust_fav_music":data.social_details.cust_fav_music,
"cust_fav_singer":data.social_details.cust_fav_singer,
"cust_fav_musician":data.social_details.cust_fav_musician,
"cust_fav_sports":data.social_details.cust_fav_sports,
"cust_fav_athletes":data.social_details.cust_fav_athletes,
"cust_fav_book":data.social_details.cust_fav_book,
"cust_enjoy_spiritual":data.social_details.cust_enjoy_spiritual,
"cust_special_note":data.social_details.cust_special_note
};

db.query(sql,post,function(err,result){
if(err) throw err;
res.json("success");
});
});

app.get('/api/check/user_email/:email',function(req,res){
let sql=`SELECT a.user_email from tbl_user as a where user_email='${req.params.email}'`;
db.query(sql,function(err,result,field){
if(err) throw err;
else if(result.length>0){
res.json("not avaliable");
}
else{
res.json("avaliable");
}
});
})


app.get('/api/check/mobile/:mobile',function(req,res){
console.log("aaa");
let sql=`SELECT a.cust_mob from tbl_customer_master as a where cust_mob='${req.params.mobile}'`;
db.query(sql,function(err,result,field){
if(err) throw err;
else if(result.length > 0){
res.json("not avaliable");
}
else{
res.json("avaliable");
}
});
})












}





