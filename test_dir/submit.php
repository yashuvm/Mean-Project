<?php
$id = "";
$v1 = "";
$v2 = "";
$v3 = "";
$v4 = "";

if(isset($_GET["id"]))
$id     = $_GET["id"];

//if(isset($_GET["mac"]))
$mac    = $_GET["mac"];

//if(isset($_GET["s"]))
$status = $_GET["s"];

if(isset($_GET["v1"]))
$v1     = $_GET["v1"];

if(isset($_GET["v2"]))
$v2     = $_GET["v2"];

if(isset($_GET["v3"]))
$v3     = $_GET["v3"];

$myfile = fopen("console.txt", "a+") or die("die");
$txt = $id.",".$mac.",".$status.",".$v1.",".$v2.",".$v3."\n";
fwrite($myfile, $txt);
fclose($myfile);

//echo "SW1 ON"
$file = "";
if($mac=="B4E62D6A818B")
$file = "status.txt";
else
$file = "status2.txt";

$myfile = fopen($file, "r");
echo trim(fgets($myfile));
fclose($myfile);

$myfile = fopen("a".$file, "w+");
$txt = $status;
fwrite($myfile, $txt);
fclose($myfile);
?>