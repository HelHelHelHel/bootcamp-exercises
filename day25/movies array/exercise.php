<?php
// $my_name = 'Hel';
// $height = 1.77;
// var_dump($my_name);
// var_dump($height);

// function headline($text) 
// {
//     return '<h1>' . $text . '</h1>';
// }


// echo headline('My website');

// $inches = 12;

// function inchesToCentimeters($no_inches) {
//     return $no_inches * 2.54;
// }
// echo(inchesToCentimeters($inches));


// $celsius = 100;

// function celsiusToFahrenheit($temp_cels) {
//     return ((9/5) * $temp_cels) + 32;
// }
// echo celsiusToFahrenheit($celsius);

// $temperature = 36.5;

// function isHealthy($temperature, $unit)
// {
//     if($unit == 'f'){
//         return celsiusToFahrenheit($temperature);
//     } elseif($temperature < 37){
//         return true;
//     } else false;
// }

// $number = 42;

// function evenOrOdd($number) {
    
//     $number ->$number % 2 == 0 ? 'even': 'odd';
//     return $number;
// }
// echo evenOrOdd($number);

$weekday = 'Monday';

function sayWeekday($weekday) {
    return 'today is ' .$weekday;
}
echo sayWeekday($weekday);

$yearOfBirth = 1990;

function sayBirthday($yearOfBirth) {
    $this_year = 2019;
    $diff =  $this_year - $yearOfBirth;
    return 'I was born in ' .$yearOfBirth. 'so I am celebrating' .$diff. 'years.';
}
echo sayBirthday($yearOfBirth);