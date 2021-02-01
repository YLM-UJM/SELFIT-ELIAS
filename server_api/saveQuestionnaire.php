<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);

function getResult($data) {
    unset($data['user_id']);
    $sum = array_sum((array)$data);
    return $sum;
}

$db = $postjson['db'];
unset($postjson['db']);


$resultat = getResult($postjson);
$columns = implode(", ",array_keys($postjson));
$columns = $columns . ', resultat';
$a = array_map('strval', $postjson);
$values  = implode('", "', $a);
$values = '"' . $values . '"';
$values = $values . ', "' . $resultat . '"';

$query = mysqli_query($mysqli, "INSERT INTO $db ($columns) VALUES ($values)");

if($query) $result = json_encode(array('success' => true));
else $result = json_encode(array('success' => false, 'msg'=>'error , please try again', 'error'=>$mysqli->error));

echo $result;

?>
