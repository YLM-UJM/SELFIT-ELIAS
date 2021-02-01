<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);

$name = $postjson['name'];
$id_bloc = $postjson['id_bloc'];
$user_id = $postjson['user_id'];

$user_id = 6;


$query = mysqli_query($mysqli, "INSERT INTO SEANCE_SAUVEGARDEE SET 
    user_id = '$user_id',
    nom = '$name'
");

$query2 = mysqli_query($mysqli, "DELETE FROM `SEANCE_SAUVEGARDEE` WHERE nom = ''
");

$get_max = mysqli_query($mysqli, 'SELECT max(unique_id) as max FROM SEANCE_SAUVEGARDEE');

$row = mysqli_fetch_assoc($get_max);
$unique_id = intval($row['max']);

$i = 1;
foreach($id_bloc as $id) {
    $add_bloc = mysqli_query($mysqli, "INSERT INTO SEANCE_SAUVEGARDEE_DETAIL SET 
        unique_id = '$unique_id',
        id_bloc = '$id',
        ordre = '$i'
");
$i = $i + 1;
}



if($query) $result = json_encode(array('success' => true));
else $result = json_encode(array('success' => false, 'msg'=>'error , please try again', 'error'=>$mysqli->error));
//$result = json_encode('ok');

echo $result;

?>
