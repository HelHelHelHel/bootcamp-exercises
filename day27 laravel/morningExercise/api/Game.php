<?php

class Game
{
   public $id = null;
   public $name = null;
   public $image_url = null;
   public $description = null;
   public $rating = null;

 public function selectGameAsc()
 {
    $queryGA = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `name` ASC";
 }

 public function selectGameDesc()
 {
     $queryGD = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `name` DESC";
 }

 public function selectRatingAsc()
 {
     $queryRA = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `rating` ASC";
 }

 public function selectRatingDesc()
 {
     $queryRD = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY `rating` DESC";
 }
}