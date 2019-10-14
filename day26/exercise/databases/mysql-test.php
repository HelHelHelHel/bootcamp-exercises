<?php

require_once '../DB/DB.php';
require_once '../DB/DB_functions.php';
require_once 'Country.php';
require_once 'Region.php';

// connect to database
connect('localhost', 'world', 'root', 'rootroot');

// prepare a query string - check the quotes!!! use question mark instead of value to prevent sql injection
// $query = "
// SELECT * 
// FROM `Country` 
// WHERE `Population` > ?

// ";

//run the query, put value in array where question mark in query to prevent sql injection
// $results = select($query, [20000000], 'Country');

// $populations= array_map(function($country) {
//     return $country->getFormattedPopulation();
// }, $results);


// var_dump($results);

// $region = new Region;
// $region->name = 'Central Africa';
// $region->slug = 'africa';
// $region->insert();

// echo 'A new region was inserted with id' .$region->id. '<br>';

// update the slug of Central Africa
$query = "
SELECT *
FROM `region`
WHERE `name` =?
";
$central_africa =select_one($query, ['Central Africa'], 'Region');

var_dump($central_africa);

$central_africa->slug = 'central-africa';
$central_africa->update();