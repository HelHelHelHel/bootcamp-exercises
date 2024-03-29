
-- Write a SQL query to select everything from the table country

SELECT*
FROM `country`

--Write a SQL query to select everything from the table country with population above 20 000 000

SELECT*
FROM `country`
WHERE `population` > 20000000;

--Write a SQL query to select everything from the table country with population above 20 000 000 and order it by population

SELECT*
FROM `country`
WHERE `population` > 20000000
ORDER BY `population` DESC;


--Write a SQL query to select everything from the table country with population above 20 000 000, order it by population and limit the results to first 10

SELECT*
FROM `country`
WHERE `population` > 20000000
ORDER BY `population` DESC
LIMIT 10;