<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include 'db.php';

$postjson = json_decode(file_get_contents('php://input'), true);

$user_id = $postjson['user_id'];
//$user_id = 1;

$get = mysqli_query($mysqli, "SELECT * FROM LISTE_MATERIEL WHERE unique_id != 6"); 

while($g = mysqli_fetch_object($get)) {
    $data[] = $g;
}

$materiel_user = mysqli_query($mysqli, "SELECT id_materiel FROM MATERIEL_USER WHERE user_id = '$user_id'"); 
while($g = mysqli_fetch_object($materiel_user)) {
    $liste_matos_user[] = $g->id_materiel;
}

//var_dump($liste_matos_user);
foreach($data as $d) {
    $d->picked = false;
}

for ($i = 0; $i < count($data); $i++) {
    for ($ii = 0; $ii < count($liste_matos_user); $ii++) {
        if (intval($data[$i]->unique_id) != intval($liste_matos_user[$ii])) {
            //$data[$i]->check = false;
        } else {
            //var_dump('ok');
            $data[$i]->picked = true;
        }
    }
    
};

$datas['list_matos'] = $data;
$datas['id_matos_user'] = $liste_matos_user;

// var_dump($data[0]->unique_id);
// var_dump($liste_matos_user[0]);


//var_dump($data);
echo json_encode($datas);

?>