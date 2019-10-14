<?php
include 'data.php';
require_once 'Celebrity.php';

$celebrities = [];
foreach($data as $value){

    $celebrity = new Celebrity;
$celebrity->fromArray($value);
$celebrities[]= $celebrity;

}