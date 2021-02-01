<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include 'db.php';

$postjson = json_decode(file_get_contents('php://input'), true);

$user_id = $postjson['user_id'];

$get = mysqli_query($mysqli, "SELECT id_materiel FROM MATERIEL_USER WHERE user_id = '$user_id'"); 

while($g = mysqli_fetch_object($get)) {
    $data[] = $g->id_materiel;
}



echo json_encode($data);

?>