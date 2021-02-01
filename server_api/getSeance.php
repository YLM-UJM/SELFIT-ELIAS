<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);

// $user = $postjson['user'];
// $matos = $postjson['matos'];
// $table_exo = $postjson['table_exo'];
// $materiel = $postjson['materiel'];
// $materiel = array_unique($materiel);

$user_id = $postjson['user_id'];
$user_id = 6;

$user['niveau'] = 1;

$get_matos = mysqli_query($mysqli, "SELECT id_materiel FROM MATERIEL_USER WHERE user_id = '$user_id' ");

while($g = mysqli_fetch_object($get_matos)) {
    $matos_user[] = $g->id_materiel;
};



array_push($matos_user, "6");

$array = implode(',',$matos_user);
//$length_array = count($array) + 1;

//print_r($length_array);
//var_dump($array);

$datas = [];

$profil = new stdClass;

$profil->endurance = 40;
$profil->force = 40;
$profil->equilibre = 20;

function computeSimilitude($data, $profil) {
     $ecart_endurance = pow($data->score_endurance - $profil->endurance,2);
    $ecart_force = pow($data->score_force - $profil->force,2);
    $ecart_equilibre = pow($data->score_agilite - $profil->equilibre,2);
    $ecart = strval((sqrt($ecart_endurance + $ecart_force + $ecart_equilibre)));
    return $ecart . ' (' . strval(sqrt($ecart_endurance)) . '-' . strval(sqrt($ecart_force)) . '-' . strval(sqrt($ecart_equilibre)) .')';
};

function computeSimilitude2($data, $profil) {
    $ecart_endurance = pow($data->score_endurance - $profil->endurance,2);
    $ecart_force = pow($data->score_force - $profil->force,2);
    $ecart_equilibre = pow($data->score_agilite - $profil->equilibre,2);
    $ecart = round(floatval((sqrt($ecart_endurance + $ecart_force + $ecart_equilibre))),2);
    return $ecart;
};

function cmp($a, $b) {
    return $a->score < $b->score;
}

function displayTemps($temps) {
    if (substr($temps,0,4) == '00mn') {
        $temps = substr($temps,4,6) . ' secondes';
    } else {
        $mn = substr($temps,0,2);
        $mn = intval($mn);
        $s = substr($temps,4,5);
        $s = intval($s);
        if ($s == 0) {
            if ($mn > 1) {
                $temps = $mn . ' minutes';
            } else {
                $temps = $mn . ' minute';
            }

        } else {
            if ($mn > 1) {
                $temps = $mn . ' minutes ' . $s;
            } else {
                $temps = $mn . ' minute ' . $s;
            }
        }
    }
    return $temps;

}

    // $get = mysqli_query($mysqli, "SELECT * FROM $table_exo INNER JOIN $materiel 
    // ON $table_exo.id_seance = $materiel.id_exercice
    // WHERE $materiel.id_materiel IN ($array) AND niveau >= '$user[niveau]' AND niveau < ('$user[niveau]' + 3) "); 

    // $get = mysqli_query($mysqli, "SELECT * from SEANCES
    // WHERE SEANCES.id_seance IN (
    // select id_seance from SEANCES_EXO 
    // WHERE SEANCES_EXO.id_materiel IN ($array)
    // GROUP BY id_seance
    // Having Count(id_seance) = $length_array) "); 
    //AND SEANCES.niveau >= '$user[niveau]' AND SEANCES.niveau < ('$user[niveau]' + 3)
    //ORDER BY SEANCES.id_seance DESC 
    $get = mysqli_query($mysqli, "SELECT * FROM SEANCES 
    WHERE SEANCES.id_seance > 3 AND SEANCES.niveau >= '$user[niveau]' AND SEANCES.niveau < ('$user[niveau]' + 20) AND SEANCES.id_seance IN
     ( SELECT id_seance FROM `BLOC` left join 
     (SELECT id_exercice FROM `MATERIEL_EXO` 
     WHERE id_materiel in ($array)) 
     as exos on id_exo=id_exercice 
     group by id_seance 
     having count(id_exo)= count(id_exercice))
     ORDER BY RAND()
     ");





    if ($get->num_rows == 0) {
        
    } else {
        while($g = mysqli_fetch_object($get)) {
            $datas[] = $g;
        }
    }

    foreach($datas as $data) {
        $get_seance_detail = mysqli_query($mysqli,"SELECT BLOC.*, CONCAT(TIME_FORMAT(BLOC.temps,'%i'),'mn',TIME_FORMAT(BLOC.temps, '%s')) as temps_formatted, EXERCICES.nom_fichier, EXERCICES.nom_exo, EXERCICES.unique_id, EXERCICES.image FROM BLOC 
        INNER JOIN EXERCICES ON BLOC.id_exo = EXERCICES.unique_id
        WHERE BLOC.id_seance = $data->id_seance ORDER BY ORDRE_COMPLET");

        if ($get_seance_detail->num_rows == 0) {
                
        } else {
            while($get = mysqli_fetch_object($get_seance_detail)) {
                if ($get->temps_formatted != '00mn00'){
                    $get->temps_formatted = displayTemps($get->temps_formatted);
                } 
                $data->content[] = $get;

            }
            for($i=0; $i < count($data->content); $i++) {

                if ($data->content[$i]->genre == 'REPET') {
                    $object = new stdClass();
                    $object->genre = 'REPET';
                    $object->nb_serie = $data->content[$i]->nb_serie;
                    $object->part_a = $data->content[$i];
                    $data->contents[] = $object;
                }

                if ($data->content[$i]->genre == 'SERIE') {
                    $object = new stdClass();
                    $object->genre = 'SERIE';
                    $object->nb_serie = $data->content[$i]->nb_serie;
                    $object->part_a = $data->content[$i];
                    $object->part_b = $data->content[$i + 1];
                    $data->contents[] = $object;
                    $i = $i+1;
                }    
            }
        }


        
    }



    foreach($datas as $data) {
        $data->ecart = computeSimilitude($data, $profil);
        $data->score = computeSimilitude2($data, $profil);
    }

    // usort($datas, "cmp");

    $datas = array_slice($datas,0,30);


//$datas = [$datas];

echo json_encode($datas);
//print_r($datas);

// //print_r(($datas));


?>