<?php
$pdo = new PDO (
    "mysql: dbname=world; host=localhost; charset=utf8",
    'root',
    'rootroot'
);
var_dump($pdo);

$query ="
SELECT*
FROM `games`
WHERE `rating` ?
ORDER BY `rating` DESC
";
// preapre the query, get statement object
$statement = $pdo-> prepare($query);
// execute the query
//sends query and values separately to db, return true or false
if($statement->execute([50])) {
    die('there was an error');
}

while($next_result = $statement->fetch()) {
    var_dump($next_result);
}

//this is included in DB.php