-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 11, 2019 at 01:40 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emoha1`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_aadhaar_card`
--

CREATE TABLE `tbl_aadhaar_card` (
  `user_id` varchar(20) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `aadhaar_file_name` varchar(50) NOT NULL,
  `aadhaar_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_attendant`
--

CREATE TABLE `tbl_attendant` (
  `attd_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `attd_name` varchar(20) DEFAULT NULL,
  `emp_code` varchar(10) DEFAULT NULL,
  `attd_mob` varchar(15) DEFAULT NULL,
  `cluster_id` varchar(20) DEFAULT NULL,
  `attd_alt_mob_no` varchar(15) NOT NULL,
  `attd_email` varchar(30) DEFAULT NULL,
  `attd_address` varchar(100) DEFAULT NULL,
  `attd_dob` date DEFAULT NULL,
  `attd_gender` varchar(10) DEFAULT NULL,
  `attd_language` varchar(30) DEFAULT NULL,
  `attd_education_1` varchar(100) DEFAULT NULL,
  `attd_education_2` varchar(100) DEFAULT NULL,
  `attd_education_3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_care_coordinator`
--

CREATE TABLE `tbl_care_coordinator` (
  `ccd_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `ccd_name` varchar(20) NOT NULL,
  `emp_code` varchar(10) NOT NULL,
  `ccd_mob` varchar(15) NOT NULL,
  `ccd_alt_mob_no` varchar(15) NOT NULL,
  `ccd_email` varchar(30) DEFAULT NULL,
  `ccd_address` varchar(100) DEFAULT NULL,
  `ccd_dob` date NOT NULL,
  `ccd_gender` varchar(10) DEFAULT NULL,
  `ccd_language` varchar(50) DEFAULT NULL,
  `ccd_education_1` varchar(100) DEFAULT NULL,
  `ccd_education_2` varchar(100) DEFAULT NULL,
  `ccd_education_3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_care_manager`
--

CREATE TABLE `tbl_care_manager` (
  `crm_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `crm_name` varchar(20) DEFAULT NULL,
  `emp_code` varchar(10) DEFAULT NULL,
  `crm_mob` varchar(15) DEFAULT NULL,
  `comm_id` varchar(20) NOT NULL,
  `crm_alt_mob_no` varchar(15) NOT NULL,
  `crm_email` varchar(30) DEFAULT NULL,
  `crm_address` varchar(100) DEFAULT NULL,
  `crm_dob` date DEFAULT NULL,
  `crm_gender` varchar(10) DEFAULT NULL,
  `crm_language` varchar(50) DEFAULT NULL,
  `crm_education_1` varchar(100) DEFAULT NULL,
  `crm_education_2` varchar(100) DEFAULT NULL,
  `crm_education_3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_care_services`
--

CREATE TABLE `tbl_care_services` (
  `care_serv_id` int(10) NOT NULL,
  `care_cust_id` int(10) NOT NULL,
  `care_giver_id` int(10) NOT NULL,
  `care_giver_type` varchar(10) NOT NULL,
  `serv_from_date` date NOT NULL,
  `serv_to_date` date NOT NULL,
  `cae_serv_status` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cluster`
--

CREATE TABLE `tbl_cluster` (
  `cluster_id` int(10) NOT NULL,
  `clm_id` int(10) DEFAULT NULL,
  `cluster_name` varchar(20) NOT NULL,
  `cluster_location` varchar(50) DEFAULT NULL,
  `cluster_address` varchar(100) DEFAULT NULL,
  `cluster_phone` varchar(20) DEFAULT NULL,
  `cluster_status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cluster_manager`
--

CREATE TABLE `tbl_cluster_manager` (
  `clm_id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL,
  `clm_name` varchar(20) NOT NULL,
  `emp_code` varchar(20) DEFAULT NULL,
  `clm_mob` varchar(15) NOT NULL,
  `clm_alt_mob_no` varchar(15) DEFAULT NULL,
  `clm_email` varchar(30) NOT NULL,
  `clm_address` varchar(100) DEFAULT NULL,
  `clm_dob` date DEFAULT NULL,
  `clm_gender` varchar(10) DEFAULT NULL,
  `clm_language` varchar(50) DEFAULT NULL,
  `clm_education_1` varchar(100) DEFAULT NULL,
  `clm_education_2` varchar(100) DEFAULT NULL,
  `clm_education_3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cluster_map`
--

CREATE TABLE `tbl_cluster_map` (
  `cluster_id` int(10) NOT NULL,
  `region_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_community`
--

CREATE TABLE `tbl_community` (
  `comm_id` int(10) NOT NULL,
  `cm_id` int(10) DEFAULT NULL,
  `comm_name` varchar(20) NOT NULL,
  `comm_location` varchar(50) DEFAULT NULL,
  `comm_address` varchar(100) DEFAULT NULL,
  `comm_phone` varchar(20) DEFAULT NULL,
  `comm_status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comm_manager`
--

CREATE TABLE `tbl_comm_manager` (
  `cm_id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL,
  `cm_name` varchar(20) NOT NULL,
  `emp_code` varchar(20) DEFAULT NULL,
  `cm_mob` varchar(15) NOT NULL,
  `cm_alt_mob_no` varchar(15) DEFAULT NULL,
  `cm_email` varchar(30) NOT NULL,
  `cm_address` varchar(100) DEFAULT NULL,
  `cm_dob` date DEFAULT NULL,
  `cm_gender` varchar(10) DEFAULT NULL,
  `cm_language` varchar(50) DEFAULT NULL,
  `cm_education_1` varchar(100) DEFAULT NULL,
  `cm_education_2` varchar(100) DEFAULT NULL,
  `cm_education_3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customer_master`
--

CREATE TABLE `tbl_customer_master` (
  `cust_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `cust_code` varchar(10) NOT NULL,
  `cust_name` varchar(50) NOT NULL,
  `cust_mob` varchar(15) NOT NULL,
  `alert_mob` varchar(15) DEFAULT NULL,
  `pri_emg_name` varchar(20) DEFAULT NULL,
  `pri_emg_mob` varchar(15) DEFAULT NULL,
  `comm_id` int(10) NOT NULL,
  `regn_type` varchar(15) NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customer_sensor`
--

CREATE TABLE `tbl_customer_sensor` (
  `cust_id` int(10) NOT NULL,
  `sensor_no` int(4) NOT NULL,
  `alert_msg` varchar(30) NOT NULL,
  `alert_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_cognitive_status`
--

CREATE TABLE `tbl_cust_cognitive_status` (
  `cust_id` int(10) NOT NULL,
  `understand_verbal_content` varchar(300) DEFAULT NULL,
  `three_word_test` varchar(10) DEFAULT NULL,
  `clock_test` varchar(10) DEFAULT NULL,
  `remembering_test` varchar(10) DEFAULT NULL,
  `oriented_to_time` varchar(10) DEFAULT NULL,
  `oriented_to_location` varchar(10) DEFAULT NULL,
  `Withdrawal` varchar(50) DEFAULT NULL,
  `refusing_medication_comments` varchar(50) DEFAULT NULL,
  `easily_agitated_comments` varchar(50) DEFAULT NULL,
  `verbal_aggression_comments` varchar(50) DEFAULT NULL,
  `sleeplessness_comments` varchar(50) DEFAULT NULL,
  `refuses_hygiene_comments` varchar(50) DEFAULT NULL,
  `physical_aggression_comments` varchar(50) DEFAULT NULL,
  `wandering_comments` varchar(50) DEFAULT NULL,
  `self_harm_comments` varchar(50) DEFAULT NULL,
  `repetitive_statements_comments` varchar(50) DEFAULT NULL,
  `hallucinations_delusions_comments` varchar(50) DEFAULT NULL,
  `paranoia_comments` varchar(50) DEFAULT NULL,
  `other_behaviour` varchar(100) DEFAULT NULL,
  `pain_pt_and_stage_1` varchar(50) DEFAULT NULL,
  `pain_pt_and_stage_2` varchar(50) DEFAULT NULL,
  `pain_pt_and_stage_3` varchar(50) DEFAULT NULL,
  `pain_pt_and_stage_4` varchar(50) DEFAULT NULL,
  `pain_pt_and_stage_5` varchar(50) DEFAULT NULL,
  `major_wounds` varchar(300) NOT NULL,
  `other_major_wounds` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_crm_map`
--

CREATE TABLE `tbl_cust_crm_map` (
  `cust_id` int(10) NOT NULL,
  `crm_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_emergency_details`
--

CREATE TABLE `tbl_cust_emergency_details` (
  `cust_id` int(10) NOT NULL,
  `pri_emg_name` varchar(50) NOT NULL,
  `pri_emg_gender` varchar(10) NOT NULL,
  `pri_emg_dob` date DEFAULT NULL,
  `pri_emg_email` varchar(30) DEFAULT NULL,
  `pri_emg_address` varchar(100) DEFAULT NULL,
  `pri_emg_mob` varchar(10) NOT NULL,
  `pri_emg_whatsapp` varchar(15) DEFAULT NULL,
  `pri_emg_phone` varchar(15) DEFAULT NULL,
  `pri_emg_relationship` varchar(20) NOT NULL,
  `pri_emg_availability` varchar(20) NOT NULL,
  `secd_emg_name` varchar(20) DEFAULT NULL,
  `secd_emg_gender` varchar(10) DEFAULT NULL,
  `secd_emg_dob` date DEFAULT NULL,
  `secd_emg_email` varchar(30) DEFAULT NULL,
  `secd_emg_address` varchar(100) DEFAULT NULL,
  `secd_emg_mob` varchar(15) DEFAULT NULL,
  `secd_emg_whatsapp` varchar(15) DEFAULT NULL,
  `secd_emg_phone` varchar(15) DEFAULT NULL,
  `secd_emg_relationship` varchar(20) DEFAULT NULL,
  `secd_emg_availability` varchar(20) DEFAULT NULL,
  `nok_emg_name` varchar(50) NOT NULL,
  `nok_emg_gender` varchar(10) NOT NULL,
  `nok_emg_dob` date DEFAULT NULL,
  `nok_emg_email` varchar(30) DEFAULT NULL,
  `nok_emg_address` varchar(100) DEFAULT NULL,
  `nok_emg_mob` varchar(10) NOT NULL,
  `nok_emg_whatsapp` varchar(15) DEFAULT NULL,
  `nok_emg_phone` varchar(15) DEFAULT NULL,
  `nok_emg_relationship` varchar(20) NOT NULL,
  `nok_emg_availability` varchar(20) NOT NULL,
  `doc_name` varchar(20) DEFAULT NULL,
  `doc_address` varchar(100) DEFAULT NULL,
  `doc_mob` varchar(15) DEFAULT NULL,
  `doc_whatsapp` varchar(15) DEFAULT NULL,
  `doc_speciality` varchar(100) DEFAULT NULL,
  `doc_hospital` varchar(20) DEFAULT NULL,
  `doc_hospital_phone` varchar(15) DEFAULT NULL,
  `hospital_name` varchar(15) DEFAULT NULL,
  `hospital_address` varchar(20) DEFAULT NULL,
  `hospital_phone` varchar(15) DEFAULT NULL,
  `li_policy_agent_name` varchar(20) DEFAULT NULL,
  `li_policy_agent_mob` varchar(15) DEFAULT NULL,
  `hi_policy_agent_name` varchar(20) DEFAULT NULL,
  `hi_policy_agent_mob` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_functional_ability`
--

CREATE TABLE `tbl_cust_functional_ability` (
  `cust_id` int(10) NOT NULL,
  `eating_asst_level` int(2) DEFAULT NULL,
  `grooming_asst_level` int(2) DEFAULT NULL,
  `bathing_asst_level` int(2) DEFAULT NULL,
  `dressing_upper_body_asst_level` int(2) DEFAULT NULL,
  `dressing_lower_body_asst_level` int(2) DEFAULT NULL,
  `toileting_asst_level` int(2) DEFAULT NULL,
  `bladder_mgmt_asst_level` int(2) DEFAULT NULL,
  `bowel_mgmt_asst_level` int(2) DEFAULT NULL,
  `transferrring_bed_asst_level` int(2) DEFAULT NULL,
  `transferrring_toilet_asst_level` int(2) DEFAULT NULL,
  `transferrring_shower_asst_level` int(2) DEFAULT NULL,
  `walking_wheel_chair_asst_level` int(2) DEFAULT NULL,
  `walking_stairs_asst_level` int(2) DEFAULT NULL,
  `comprehension_asst_level` int(2) DEFAULT NULL,
  `expression_asst_level` int(2) DEFAULT NULL,
  `social_interaction_asst_level` int(2) DEFAULT NULL,
  `problem_solving_asst_level` int(2) DEFAULT NULL,
  `memory_asst_level` int(2) DEFAULT NULL,
  `hearing_impairments` varchar(10) DEFAULT NULL,
  `hearing_aids` varchar(10) DEFAULT NULL,
  `visual_impairments` varchar(10) DEFAULT NULL,
  `visual_aids` varchar(50) DEFAULT NULL,
  `swallowing_difficulties` varchar(10) DEFAULT NULL,
  `special_diet` varchar(30) DEFAULT NULL,
  `other_special_diet` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_medical_details`
--

CREATE TABLE `tbl_cust_medical_details` (
  `cust_id` int(10) NOT NULL,
  `cust_blood_grp` varchar(5) DEFAULT NULL,
  `cust_pulse_rate` varchar(10) DEFAULT NULL,
  `cust_blood_pressure` varchar(20) DEFAULT NULL,
  `cust_prev_care` varchar(20) DEFAULT NULL,
  `cust_prev_care_duration` int(4) DEFAULT NULL,
  `cust_nos_falls` int(2) DEFAULT NULL,
  `cust_fall_injury` varchar(5) DEFAULT NULL,
  `cust_allergy_reaction_1` varchar(100) DEFAULT NULL,
  `cust_allergy_reaction_2` varchar(100) DEFAULT NULL,
  `cust_allergy_reaction_3` varchar(100) DEFAULT NULL,
  `cust_med_diagnosis` varchar(100) DEFAULT NULL,
  `other_diagnosis` varchar(100) DEFAULT NULL,
  `cust_surgery_and_date_1` varchar(100) DEFAULT NULL,
  `cust_surgery_and_date_2` varchar(100) DEFAULT NULL,
  `cust_surgery_and_date_3` varchar(100) DEFAULT NULL,
  `cust_mobility_device` varchar(100) DEFAULT NULL,
  `other_mobility_device` varchar(100) DEFAULT NULL,
  `cust_current_mobility_equip` varchar(100) DEFAULT NULL,
  `other_current_equipment` varchar(100) DEFAULT NULL,
  `cust_need_mobility_equip` varchar(100) DEFAULT NULL,
  `other_need_mobility_equip` varchar(100) DEFAULT NULL,
  `communicable_disease` varchar(10) DEFAULT NULL,
  `falls_remarks` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_medical_reports`
--

CREATE TABLE `tbl_cust_medical_reports` (
  `cust_id` int(10) NOT NULL,
  `med_report_no` int(10) NOT NULL,
  `med_report_date` varchar(10) NOT NULL,
  `med_report_name` varchar(20) NOT NULL,
  `med_report_file_name` varchar(100) NOT NULL,
  `med_report_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_medication`
--

CREATE TABLE `tbl_cust_medication` (
  `cust_id` int(10) NOT NULL,
  `cust_medicine_1` varchar(100) DEFAULT NULL,
  `cust_medicine_2` varchar(100) DEFAULT NULL,
  `cust_medicine_3` varchar(100) DEFAULT NULL,
  `cust_medicine_4` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_personal_details`
--

CREATE TABLE `tbl_cust_personal_details` (
  `cust_id` int(10) NOT NULL,
  `preferred_name` varchar(50) NOT NULL,
  `cust_email` varchar(30) NOT NULL,
  `cust_address` varchar(100) NOT NULL,
  `cust_community` varchar(20) DEFAULT NULL,
  `cust_height` double NOT NULL,
  `cust_weight` double NOT NULL,
  `cust_geolocation` varchar(50) NOT NULL,
  `cust_category` varchar(15) DEFAULT NULL,
  `cust_language` varchar(100) NOT NULL,
  `cust_dob` date NOT NULL,
  `cust_gender` varchar(10) NOT NULL,
  `cust_marital_status` varchar(10) DEFAULT NULL,
  `cust_dom` date DEFAULT NULL,
  `cust_religion` varchar(100) DEFAULT NULL,
  `cust_living_situation` varchar(100) NOT NULL,
  `cust_statying_with` int(5) NOT NULL,
  `cust_family_member_1` varchar(100) DEFAULT NULL,
  `cust_family_member_2` varchar(100) DEFAULT NULL,
  `cust_family_member_3` varchar(100) DEFAULT NULL,
  `cust_education_1` varchar(100) DEFAULT NULL,
  `cust_education_2` varchar(100) DEFAULT NULL,
  `cust_education_3` varchar(100) DEFAULT NULL,
  `cust_asset_1` varchar(100) DEFAULT NULL,
  `cust_asset_2` varchar(100) DEFAULT NULL,
  `cust_asset_3` varchar(100) DEFAULT NULL,
  `cust_risk_assessment_1` varchar(20) NOT NULL,
  `cust_risk_assessment_2` varchar(20) NOT NULL,
  `cust_risk_assessment_3` varchar(20) NOT NULL,
  `cust_risk_assessment_4` varchar(20) NOT NULL,
  `cust_risk_assessment_5` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust_social_background`
--

CREATE TABLE `tbl_cust_social_background` (
  `cust_id` int(10) NOT NULL,
  `cust_school` varchar(100) DEFAULT NULL,
  `cust_last_employment` varchar(20) DEFAULT NULL,
  `cust_wakeup_time` varchar(20) DEFAULT NULL,
  `cust_bed_time` varchar(20) DEFAULT NULL,
  `cust_shower_time` varchar(20) DEFAULT NULL,
  `cust_shower` varchar(20) DEFAULT NULL,
  `cust_fav_food` varchar(20) DEFAULT NULL,
  `cust_fav_music` varchar(20) DEFAULT NULL,
  `cust_fav_singer` varchar(20) DEFAULT NULL,
  `cust_fav_musician` varchar(20) DEFAULT NULL,
  `cust_fav_sports` varchar(20) DEFAULT NULL,
  `cust_fav_athletes` varchar(20) DEFAULT NULL,
  `cust_fav_book` varchar(20) DEFAULT NULL,
  `cust_enjoy_spiritual` varchar(10) DEFAULT NULL,
  `cust_special_note` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_datadmin`
--

CREATE TABLE `tbl_datadmin` (
  `admin_id` int(10) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `emp_code` varchar(10) NOT NULL,
  `emp_name` varchar(20) NOT NULL,
  `emp_mob` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_driving_license`
--

CREATE TABLE `tbl_driving_license` (
  `user_id` varchar(20) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `dl_file_name` varchar(50) NOT NULL,
  `dl_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_emergency`
--

CREATE TABLE `tbl_emergency` (
  `emg_id` int(10) NOT NULL,
  `cust_id` int(10) NOT NULL,
  `emg_date_time` varchar(50) NOT NULL,
  `emg_msg` varchar(30) DEFAULT NULL,
  `emg_status` varchar(10) NOT NULL,
  `emg_type` varchar(10) NOT NULL,
  `emg_recv_mode` varchar(10) NOT NULL,
  `emg_case_no` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_emergency_details`
--

CREATE TABLE `tbl_emergency_details` (
  `emg_id` int(10) NOT NULL,
  `emg_desc` varchar(50) NOT NULL,
  `emg_location` varchar(100) NOT NULL,
  `resp_start_time` varchar(300) DEFAULT NULL,
  `est_time_reach` varchar(30) DEFAULT NULL,
  `reaching_time` varchar(30) DEFAULT NULL,
  `closing_time` varchar(30) DEFAULT NULL,
  `cust_remark` varchar(50) DEFAULT NULL,
  `cur_resp_stage` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_emergency_responder`
--

CREATE TABLE `tbl_emergency_responder` (
  `emg_id` int(10) NOT NULL,
  `rsp_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_emg_alert_msg`
--

CREATE TABLE `tbl_emg_alert_msg` (
  `alert_mob` varchar(15) NOT NULL,
  `msg` varchar(20) NOT NULL,
  `sensor_no` varchar(25) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_health_insurance`
--

CREATE TABLE `tbl_health_insurance` (
  `cust_id` int(10) NOT NULL,
  `hi_policy_no` varchar(10) NOT NULL,
  `hi_policy_company` varchar(50) NOT NULL,
  `hi_policy_name` varchar(20) NOT NULL,
  `hi_policy_expiry` varchar(20) NOT NULL,
  `hi_file_name` varchar(100) NOT NULL,
  `hi_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_life_insurance`
--

CREATE TABLE `tbl_life_insurance` (
  `cust_id` int(10) NOT NULL,
  `li_policy_no` varchar(10) NOT NULL,
  `li_policy_company` varchar(50) NOT NULL,
  `li_policy_name` varchar(20) NOT NULL,
  `li_policy_expiry` varchar(20) NOT NULL,
  `li_file_name` varchar(50) NOT NULL,
  `li_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_nurse`
--

CREATE TABLE `tbl_nurse` (
  `nurse_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `nurse_name` varchar(20) DEFAULT NULL,
  `emp_code` varchar(10) DEFAULT NULL,
  `nurse_mob` varchar(15) DEFAULT NULL,
  `cluster_id` varchar(20) DEFAULT NULL,
  `nurse_alt_mob_no` varchar(15) NOT NULL,
  `nurse_email` varchar(30) DEFAULT NULL,
  `nurse_address` varchar(100) DEFAULT NULL,
  `nurse_dob` date DEFAULT NULL,
  `nurse_gender` varchar(10) DEFAULT NULL,
  `nurse_language` varchar(50) DEFAULT NULL,
  `nurse_education_1` varchar(100) DEFAULT NULL,
  `nurse_education_2` varchar(100) DEFAULT NULL,
  `nurse_education_3` varchar(100) DEFAULT NULL,
  `nurse_duty_hrs` int(11) DEFAULT NULL,
  `nurse_shift` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pan_card`
--

CREATE TABLE `tbl_pan_card` (
  `user_id` varchar(20) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `pan_file_name` varchar(50) NOT NULL,
  `pan_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_passport`
--

CREATE TABLE `tbl_passport` (
  `user_id` varchar(20) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `passport_file_name` varchar(50) NOT NULL,
  `passport_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_profile_picture`
--

CREATE TABLE `tbl_profile_picture` (
  `user_id` varchar(20) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `pp_file_name` varchar(50) NOT NULL,
  `pp_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_region`
--

CREATE TABLE `tbl_region` (
  `region_id` int(10) NOT NULL,
  `rm_id` int(10) DEFAULT NULL,
  `region_name` varchar(20) NOT NULL,
  `region_location` varchar(50) DEFAULT NULL,
  `region_address` varchar(100) DEFAULT NULL,
  `region_phone` varchar(20) DEFAULT NULL,
  `region_status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_region_manager`
--

CREATE TABLE `tbl_region_manager` (
  `rm_id` int(10) NOT NULL,
  `user_id` int(10) DEFAULT NULL,
  `rm_name` varchar(20) NOT NULL,
  `emp_code` varchar(10) DEFAULT NULL,
  `rm_mob` varchar(15) NOT NULL,
  `rm_alt_mob_no` varchar(15) DEFAULT NULL,
  `rm_email` varchar(30) NOT NULL,
  `rm_address` varchar(100) DEFAULT NULL,
  `rm_dob` date DEFAULT NULL,
  `rm_gender` varchar(10) DEFAULT NULL,
  `rm_language` varchar(50) DEFAULT NULL,
  `rm_education_1` varchar(100) DEFAULT NULL,
  `rm_education_2` varchar(100) DEFAULT NULL,
  `rm_education_3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_region_manager_details`
--

CREATE TABLE `tbl_region_manager_details` (
  `rm_id` int(10) NOT NULL,
  `rm_alt_mob_no` int(10) NOT NULL,
  `rm_email` varchar(15) NOT NULL,
  `rm_address` varchar(100) NOT NULL,
  `rm_dob` date NOT NULL,
  `rm_gender` varchar(10) NOT NULL,
  `rm_language` varchar(10) NOT NULL,
  `rm_education_1` varchar(100) NOT NULL,
  `rm_education_2` varchar(100) NOT NULL,
  `rm_education_3` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_responder`
--

CREATE TABLE `tbl_responder` (
  `rsp_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `rsp_name` varchar(20) DEFAULT NULL,
  `emp_code` varchar(10) DEFAULT NULL,
  `res_mob` varchar(15) DEFAULT NULL,
  `comm_id` varchar(20) DEFAULT NULL,
  `rsp_alt_mob_no` varchar(15) NOT NULL,
  `rsp_email` varchar(30) DEFAULT NULL,
  `rsp_address` varchar(100) DEFAULT NULL,
  `rsp_dob` date DEFAULT NULL,
  `rsp_gender` varchar(10) DEFAULT NULL,
  `rsp_language` varchar(50) DEFAULT NULL,
  `rsp_education_1` varchar(100) DEFAULT NULL,
  `rsp_education_2` varchar(100) DEFAULT NULL,
  `rsp_education_3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_service`
--

CREATE TABLE `tbl_service` (
  `serv_id` int(10) NOT NULL,
  `cust_id` int(10) NOT NULL,
  `serv_date_time` datetime NOT NULL,
  `serv_desc` varchar(50) NOT NULL,
  `serv_type` varchar(10) NOT NULL,
  `serv_status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_service_crm_map`
--

CREATE TABLE `tbl_service_crm_map` (
  `serv_id` int(10) NOT NULL,
  `crm_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `user_status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_variable_count`
--

CREATE TABLE `tbl_variable_count` (
  `cust_count` int(10) NOT NULL,
  `emp_count` int(10) NOT NULL,
  `emrg_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_voter_card`
--

CREATE TABLE `tbl_voter_card` (
  `user_id` varchar(20) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `voter_card_file_name` varchar(50) NOT NULL,
  `voter_card_file_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_zone_map`
--

CREATE TABLE `tbl_zone_map` (
  `comm_id` int(10) NOT NULL,
  `cluster_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_attendant`
--
ALTER TABLE `tbl_attendant`
  ADD PRIMARY KEY (`attd_id`);

--
-- Indexes for table `tbl_care_coordinator`
--
ALTER TABLE `tbl_care_coordinator`
  ADD PRIMARY KEY (`ccd_id`);

--
-- Indexes for table `tbl_care_manager`
--
ALTER TABLE `tbl_care_manager`
  ADD PRIMARY KEY (`crm_id`);

--
-- Indexes for table `tbl_care_services`
--
ALTER TABLE `tbl_care_services`
  ADD PRIMARY KEY (`care_serv_id`);

--
-- Indexes for table `tbl_cluster`
--
ALTER TABLE `tbl_cluster`
  ADD PRIMARY KEY (`cluster_id`);

--
-- Indexes for table `tbl_cluster_manager`
--
ALTER TABLE `tbl_cluster_manager`
  ADD PRIMARY KEY (`clm_id`);

--
-- Indexes for table `tbl_community`
--
ALTER TABLE `tbl_community`
  ADD PRIMARY KEY (`comm_id`);

--
-- Indexes for table `tbl_comm_manager`
--
ALTER TABLE `tbl_comm_manager`
  ADD PRIMARY KEY (`cm_id`);

--
-- Indexes for table `tbl_customer_master`
--
ALTER TABLE `tbl_customer_master`
  ADD PRIMARY KEY (`cust_id`),
  ADD UNIQUE KEY `cust_mob` (`cust_mob`);

--
-- Indexes for table `tbl_cust_crm_map`
--
ALTER TABLE `tbl_cust_crm_map`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `tbl_emergency`
--
ALTER TABLE `tbl_emergency`
  ADD PRIMARY KEY (`emg_id`);

--
-- Indexes for table `tbl_nurse`
--
ALTER TABLE `tbl_nurse`
  ADD PRIMARY KEY (`nurse_id`);

--
-- Indexes for table `tbl_region`
--
ALTER TABLE `tbl_region`
  ADD PRIMARY KEY (`region_id`);

--
-- Indexes for table `tbl_region_manager`
--
ALTER TABLE `tbl_region_manager`
  ADD PRIMARY KEY (`rm_id`);

--
-- Indexes for table `tbl_region_manager_details`
--
ALTER TABLE `tbl_region_manager_details`
  ADD PRIMARY KEY (`rm_id`);

--
-- Indexes for table `tbl_responder`
--
ALTER TABLE `tbl_responder`
  ADD PRIMARY KEY (`rsp_id`);

--
-- Indexes for table `tbl_service`
--
ALTER TABLE `tbl_service`
  ADD PRIMARY KEY (`serv_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_attendant`
--
ALTER TABLE `tbl_attendant`
  MODIFY `attd_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_care_coordinator`
--
ALTER TABLE `tbl_care_coordinator`
  MODIFY `ccd_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_care_manager`
--
ALTER TABLE `tbl_care_manager`
  MODIFY `crm_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_care_services`
--
ALTER TABLE `tbl_care_services`
  MODIFY `care_serv_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_cluster`
--
ALTER TABLE `tbl_cluster`
  MODIFY `cluster_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_cluster_manager`
--
ALTER TABLE `tbl_cluster_manager`
  MODIFY `clm_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_community`
--
ALTER TABLE `tbl_community`
  MODIFY `comm_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_comm_manager`
--
ALTER TABLE `tbl_comm_manager`
  MODIFY `cm_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_customer_master`
--
ALTER TABLE `tbl_customer_master`
  MODIFY `cust_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_emergency`
--
ALTER TABLE `tbl_emergency`
  MODIFY `emg_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_nurse`
--
ALTER TABLE `tbl_nurse`
  MODIFY `nurse_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_region`
--
ALTER TABLE `tbl_region`
  MODIFY `region_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_region_manager`
--
ALTER TABLE `tbl_region_manager`
  MODIFY `rm_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_region_manager_details`
--
ALTER TABLE `tbl_region_manager_details`
  MODIFY `rm_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_responder`
--
ALTER TABLE `tbl_responder`
  MODIFY `rsp_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_service`
--
ALTER TABLE `tbl_service`
  MODIFY `serv_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
