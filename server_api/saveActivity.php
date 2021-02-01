<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);


$date = str_replace("/", "-", $postjson['date']);

$year = substr($date,6,4);
$mois = substr($date,3,2);
$day = substr($date,0,2);
$time = substr($date,12,8);
$date = $year . '-' . $mois . '-' . $day . ' ' . $time;




$query = mysqli_query($mysqli, "INSERT INTO ACTIVITY SET 
user_id = 7,
date = '$date',
modalite = '$postjson[modalite]',
duree = '$postjson[duree]',
intensite = '$postjson[intensite]',
commentaire = '$postjson[commentaire]'
");

if($query) $result = json_encode(array('success' => true));
else $result = json_encode(array('success' => false, 'msg'=>'error , please try again', 'error'=>$mysqli->error));

echo $result;

?>
