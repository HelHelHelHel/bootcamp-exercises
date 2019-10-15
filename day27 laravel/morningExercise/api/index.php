<?php
require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

//require_once 'Games.php';

connect('localhost', 'world', 'root', 'rootroot');

// get data from URL ($_GET) with way
// 1.type -default type and value
// $orderway = 'ASC';
// if(isset($_GET['way']) && $_GET['way'] == 'desc') {
//     $orderway = 'DESC'
// }

//second way - ternary operator
// $orderway = isset($_GET['way']) && strtolower($_GET['way']) == 'desc' ? 'DESC' : 'ASC';

// approach 3 long way
if(isset($_GET['way'])) {
    switch($_GET['way']){
        default:
        case 'asc':
        $orderway = 'ASC';
        break;
        case 'desc':
        $orderway = 'DESC';
        break;
    }
    
} else {
    $orderway = 'ASC';
}

// get data value orderby with rating
// $orderby = isset($_GET['orderby']) && strtolower($_GET['orderby']) = 'rating' ? 'rating' : 'name';


$query = "
SELECT *
FROM `games`
WHERE 1";


$results = select($query, [], 'Game');



header('Content-type: application/json');
echo json_encode($results);

var_dump($_POST);