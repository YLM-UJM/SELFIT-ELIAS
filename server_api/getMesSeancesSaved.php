<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);

$user_id = $postjson['user_id'];
$user_id = 6;

$get_seance_id = mysqli_query($mysqli, "SELECT * FROM SEANCE_SAUVEGARDEE WHERE user_id = $user_id ORDER BY unique_id DESC"); 

if ($get_seance_id->num_rows == 0) {
        
} else {
    while($g = mysqli_fetch_object($get_seance_id)) {
        $datas[] = $g;
    }
}

foreach($datas as $data) {
    $get_bloc_id = mysqli_query($mysqli, "SELECT id_bloc FROM SEANCE_SAUVEGARDEE_DETAIL WHERE unique_id = $data->unique_id"); 

    while($g = mysqli_fetch_object($get_bloc_id)) {
        $data->blocs[] = $g->id_bloc;
    }
}

echo json_encode($datas);
//print_r(($datas));


?>