<?php
include 'data.php';
// now I have $data array
require_once 'Celebrity.php';

$celebrities = [];
foreach($data as $value) {
    
    $celebrity = new Celebrity;
    $celebrity->fromArray($value);
    $celebrities[] = $celebrity;
    // array_push($celebrities, $celebrity);
    
}

header('Content-type: application/json');
echo json_encode($celebrities);
