<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);


$user_id = $postjson['user_id'];
$selected_bloc = $postjson['selected_bloc'];
$feedback_user = $postjson['feedback_user'];
$nb_bloc = count($selected_bloc);

$user_id = 6;


$query = mysqli_query($mysqli, "INSERT INTO SEANCE_FAITE SET 
    user_id = '$user_id',
    nb_bloc = '$nb_bloc'
");

$query2 = mysqli_query($mysqli, "DELETE FROM `SEANCE_FAITE` WHERE nb_bloc = 0
");

$get_max = mysqli_query($mysqli, 'SELECT max(unique_id) as max FROM SEANCE_FAITE');

$row = mysqli_fetch_assoc($get_max);
$unique_id = intval($row['max']);

$i = 1;
foreach($selected_bloc as $bloc) {
    $add_bloc = mysqli_query($mysqli, "INSERT INTO SEANCE_FAITE_DETAIL SET 
        id_seance = '$unique_id',
        id_bloc = '$bloc',
        ordre = '$i'
");
$i = $i + 1;
};

$get_max = mysqli_query($mysqli, 'SELECT max(id_seance_detail) as max FROM SEANCE_FAITE_DETAIL');

$row = mysqli_fetch_assoc($get_max);
$unique_id = intval($row['max']);

$i = 1;
foreach($feedback_user as $feedback) {
    $add_feedback = mysqli_query($mysqli, "INSERT INTO SEANCE_BLOC_FEEDBACK SET 
        id_seance_detail = '$unique_id',
        qualite = '$feedback[qualite]',
        difficulte = '$feedback[difficulte]'
");
$i = $i + 1;
}



if($query) $result = json_encode(array('success' => true));
else $result = json_encode(array('success' => false, 'msg'=>'error , please try again', 'error'=>$mysqli->error));

echo ($result);

?>
