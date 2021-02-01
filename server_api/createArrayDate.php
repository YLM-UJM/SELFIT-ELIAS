<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db.php";

define ('DATE_RSS', "D, d M Y H:i:s O");


$period = new DatePeriod(new DateTime('2021-01-25'), new DateInterval('P1D'), new DateTime('2021-01-31 +1 day'));
foreach ($period as $date) {
    $dates[] = $date;
}

$today = date('Y-m-d');
//var_dump($today);


$frenchDay = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

$object =  Array();
$today_activity = new stdClass;


foreach($dates as $key => $date) {

    $d = $date->format('Y-m-d');

    $get_matinal = mysqli_query($mysqli, "SELECT sum(nb_bloc) as duree_totale FROM SEANCE_FAITE WHERE DATE(created_at) = '$d'
"); 

    // while($matinal = mysqli_fetch_object($get_matinal)) {

    //     if ($matinal->date == $date->format('Y-m-d H:i:s') ) {
    //         $object[$key]->data = $matinal->date;
    //     } else {
    //         $object[$key]->data = null;
    //     }

        
    // }

    if ($get_matinal->num_rows == 0) {

        $object[$key]->origin = $date->format('Y-m-d H:i:s');
        $object[$key]->unix = $frenchDay[date("N",strtotime($date->format('Y-m-d'))) - 1];
        $object[$key]->dateEN = $date->format(DATE_RSS);
        $object[$key]->dateFR = substr($date->format(DATE_RSS), 0, 3);
        $object[$key]->data = null;
        $object[$key]->duree = 0;
        $object[$key]->id_activity = null;

        if ($date->format('Y-m-d') === $today) {
            $object[$key]->today = true;
            $dateSelected = $date->format(DATE_RSS);
            $today_activity->duree = 0;
        } else {
            $object[$key]->today = false;
        }
        
    } else {
        while($matinal = mysqli_fetch_object($get_matinal)) {
            // $labels[] = date( 'Y-m-d', strtotime($matinal->created_at));  // if want created_at use $matinal->created_at
            
            $object[$key]->origin = $date->format('Y-m-d H:i:s');
            $object[$key]->unix = $frenchDay[date("N",strtotime($date->format('Y-m-d'))) - 1];
            $object[$key]->dateEN = $date->format(DATE_RSS);
            $object[$key]->dateFR = substr($date->format(DATE_RSS), 0, 3);
            $object[$key]->duree = $matinal->duree_totale *10;
            $object[$key]->id_activity = $matinal->unique_id;

            if ($date->format('Y-m-d') === $today) {
                $object[$key]->today = true;
                $dateSelected = $date->format(DATE_RSS);
                $today_activity->duree = $matinal->duree_totale *10;

            } else {
                $object[$key]->today = false;
            }

        }
    }
}




$data_send['data'] = $object;
$data_send['today'] = $today_activity;
$data_send['dateSelected'] = $dateSelected;

//ONLY SHOWING

//var_dump($dates);
//print_r($object);
echo json_encode($data_send);
//print_r(($object));


exit();
?>