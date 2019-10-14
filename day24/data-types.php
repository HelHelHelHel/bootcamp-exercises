<?php

// $first_name = 'Helena';
// $last_name = 'Hrubes';
// echo $first_name . '<br>' . $last_name . '<br>';

// $year_of_birth = 1986;
// $height = 177;
// echo 'year of birth: '. $year_of_birth . '<br>' . 'height: ' . $height;

// define ('SERVER_SOFTWARE', 'Apache');
// echo SERVER_SOFTWARE;

// define ('MY_OS', 'MacOS');
// echo 'My operating system is: ' . MY_OS;

// function greet($whom) {
//     return 'hello'. $whom;
// }
// echo greet('Prague');
// '<br>';


// function truncateString (&$string, $size) 
// {
//    $string = mb_substr($string,  0,  $size);
   
// }
 
// $sentence = 'Quick brown fox jumps over the lazy dog.';
 
// truncateString($sentence, 10);
 
// echo $sentence;

// $days_to_xmas = 76;
// while ($days_to_xmas > 0) {
//     $days_to_xmas --;
//     echo 'there are still' .$days_to_xmas. 'to xmas. <br>';
// }

// do {
//     $days_to_xmas--;
//     echo 'there are still' .$days_to_xmas. 'to xmas. <br>';
// }   while ($days_to_xmas > 0);

// for ($days_to_xmas = 76; ; $number++)

// $time_served = 0;

// while ($time_served < 10) {
//     $time_served++;
//     echo 'the prisoner has served ' . $time_served . ' years.<br>';
// }

// do {
//     $time_served++;
//     echo 'the prisoner has served ' . $time_served . ' years.<br>';
// } while ($time_served < 10);

// for ($number = 0; $number < 5; $number++) {
//     $time_to_serve = 5 - $number;
//     echo 'the prisoner has '.$time_to_serve. 'years to serve.<br>';
// }

// for ($number = 10; $number > 0; $number--) {
    
//     echo 'the prisoner has '.$number. 'years to serve.<br>';
//     if ($number > 5){
//         continue;
//     }
//     echo 'going to a parole hearing..<br>';
//     if ($number == 2) {
        
//         echo 'paroled!';
//         break;
//     }
        
    
// }

$cars_i_want = [
    'Aston Martin',
    'Bugatti',
    'Ferrari',
    'Lamborghini',
    'Maserati',
    'Mercedes',
    'Porsche',
    'Skoda'];
var_dump($cars_i_want);

echo 'for myself i want '. $cars_i_want[3]. '.<br>';
echo 'For my spouse I would buy' . $cars_i_want[2]. '.<br>';
$cars_i_want[4] = 'smart';
echo 'Each of my kids will get a ' .$cars_i_want[4]. '.<br>';

'<ul>';
foreach($cars_i_want as $value){
    echo '<li> ' .$value. ' </li>';
}
'</ul>';

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];
echo 'you can have a Porsche for only ' .$car_prices['Porsche 911']. '<br>';

foreach($car_prices as $car_name => $prices){
    echo 'the price of ' . $car_name . ' is ' . $prices . ' <br> ';
}
