<?php

define('DB_NAME', 'selfit-2');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', 'localhost:8889');


// define('DB_NAME', 'selfit');
// define('DB_USER', 'ly81551h');
// define('DB_PASSWORD', 'idrPzVbTE');
// define('DB_HOST', 'localhost');


$mysqli = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME); 


?>