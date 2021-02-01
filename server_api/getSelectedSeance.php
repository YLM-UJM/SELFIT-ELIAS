<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

$postjson = json_decode(file_get_contents('php://input'), true);

$seances = $postjson['seances'];



$array = implode(',',$seances);
$datas = [];

$profil = new stdClass;

$profil->endurance = $postjson['endurance'];
$profil->force = $postjson['force'];
$profil->equilibre = $postjson['equilibre'];

function computeSimilitude($data, $profil) {
    $ecart_endurance = pow($data->score_endurance - $profil->endurance,2);
    $ecart_force = pow($data->score_force - $profil->force,2);
    $ecart_equilibre = pow($data->score_agilite - $profil->equilibre,2);
    $ecart = strval(round(sqrt($ecart_endurance + $ecart_force + $ecart_equilibre)));
    return $ecart;
};

function cmp($a, $b) {
    return $a->ecart < $b->ecart;
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

    $get = mysqli_query($mysqli, "SELECT * FROM SEANCES WHERE id_seance IN ($array) ORDER BY FIELD (id_seance, $array)"); 

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

    // foreach($datas as $data) {
    //     $data->ecart = computeSimilitude($data, $profil);
    // }

    // usort($datas, "cmp");




echo json_encode($datas);
//print_r(($datas));


?>