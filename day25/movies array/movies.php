<?php

$movies_sorted = [
    'The Shawshank redemption',
    'The Godfather',
    'The Godfather II',
    'Dark Knight', 
    '12 angry men', 
    'Schindler\'s list',
    'Pulp fiction',
    'Lord of the Rings: Return of the King',
    'The good, the bad and the ugly',
    'Fight club'
];

sort($movies_sorted);
// send JSON header
header('Content-type: application/json');
//send data JSON
echo json_encode($movies_sorted);

