<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);

$id_materiel = $postjson['id_materiel']; //  implode(',',$postjson['id_materiel']);
$user_id = $postjson['user_id'];

$mat = $id_materiel[0];

$remove = mysqli_query($mysqli, "DELETE FROM MATERIEL_USER WHERE user_id = '$user_id'" );


foreach($id_materiel as $id_mat) {

    $query = mysqli_query($mysqli, "INSERT INTO MATERIEL_USER SET 
    user_id = '$user_id',
    id_materiel = '$id_mat'
    ");
}


if($query) $result = json_encode(array('success' => true));
else $result = json_encode(array('success' => false, 'msg'=>'error , please try again', 'error'=>$mysqli->error));

echo $result;

?>
