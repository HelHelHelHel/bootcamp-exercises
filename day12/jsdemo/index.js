

// const birthYear = prompt('Enter your birth year:');
// let age = 2019 - parseInt(birthYear);
// alert(age);

// const hourlyWage = prompt('Enter your hourly wage:');
// const hoursDay = prompt('Enter how many hours your work a day:');
// const daysMonth = prompt('How many days a month do you work:');
// let monthlySalary = hourlyWage * hoursDay * daysMonth;
// alert(monthlySalary);

// const euro = prompt('Euros to exchange into CZK');
// let czk = Math.round(parseInt(euro) * 25.695);
// alert(czk);

// const hours = [12, 12, 9, 12, 8, 6, 6];
// console.log(hours[6]);
// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// days.push('Saturday', 'Sunday');
// console.log(days[0]);
// console.log(days[5]);
// console.log(days.length);

// let chess = [[5, 0, 0, 0, 0, 0, 0, 0], 
//             [0, 0, 0, 0, 0, 1, 0, 0], 
//             [0, 0, 0, 0, 0, 1, 0, 1], 
//             [0, 0, 0, 0, 0, 1, 1, 3],
//             [0, 0, 0, 0, 0, 0, 1, 6], 
//             [0, 0, 0, 0, 3, 0, 2, 1], 
//             [0, 0, 0, 0, 0, 0, 0, 1], 
//             [0, 0, 0, 0, 0, 0, 6, 0]];
// console.log(chess);
// chess[4][7] = 0;
// chess [4][1] = 6;


// console.log(chess[4][1]);




// const playingCards = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// const playingCardsSuits = ['clubs', "heart", 'spade', 'diamonds'];


// let rankIndex = Math.floor(Math.random(playingCards) * 12);
// let suiteIndex = Math.floor(Math.random(playingCardsSuits) * 4);


// document.write(playingCards[rankIndex] + ' of ' + playingCardsSuits[suiteIndex]);






// Create a page which will ask the user for their hourly pay, number of hours they work in a day, and number of days they work in a month a output their monthly salary after 25% tax. Output the salary with some nice message like "Your salary is 2500 euro after tax." Use the functions created in the previous exercise.


// const hourlyPay = prompt('How much are you paid per hour?');
// const numberOfWorkHours = prompt('How many hours do you work a day?');
// const numberOfWorkDays = prompt('How many days do you work in a month?');
// const salaryGross = hourlyPay * numberOfWorkHours * numberOfWorkDays;
// const salaryNetto = salaryGross - (salaryGross * 0.25);
// alert('Your salary after tax is euro: ' + salaryNetto);



// Random numbers page
// Create a page which will output a random number between 1 and 6 every time your refresh it.
// Change the page so that it asks the user for a number limit and it will output a random number between 1 and limit.
// Finally, change the page so that it asks for min and max and output a random number between min and max.

// const randomNumberRefresh = alert(Math.floor(Math.random() * 6) + 1);

// const limit = prompt('Enter the limit number');
// const randomNumberLimit = alert(Math.floor(Math.random() * limit));

// const min = prompt('Enter min number');
// const max = prompt('Enter max number');
// const randomNumberMin = document.write(Math.floor(Math.random() * parseInt(max - min)) + parseInt(min));



// Create a page that will ask the user for their login and password. Check, that the password is equal to sore-thumb-218 and if so, output "access granted." Otherwise output "Nice try."

// let password = prompt('Enter your password');
// if (password === 'sore-thumb-2018') {
//     alert('access granted');
// } else alert('nice try');

// Create a page where the user needs to create their password for the first time. Ask for the password twice and check that they are the same. If not, output something like "Your passwords to no match."

// let passwordOne = prompt('Enter your password');
// let passwordTwo = prompt('Enter your password again');
// if (passwordOne === passwordTwo) {
//     alert('Well done');
// } else alert('Passwords do not match');


// Improve the above page so that it does not allow passwords less then 8 characters long. If the password is less then 8 characters output "Your password is no secure." In such a case do not ask the user to type the password again. Only do that if it passes the security check.

// let passwordOne = prompt('Enter 8 characters password');
// let passwordTwo = 'Enter your password again';
// if (passwordOne.length < 8) {
//     alert('Your password is not secure');
// } else prompt(passwordTwo);
// if (passwordOne = passwordTwo) {
//     alert('Well done');
// } else alert('Passwords do not match');

// Let's say that the basic price for a bus ticket is 12 euro. Create a page which will ask the user for their age and compute a discounted price according to these rules:
// age under 6 years (preschool kids): 0 euro,
// age between 6 and 15 (pupils): 35% of the basic price,
// age between 16 and 26 (students): 65% of the basic price,
// age between 27 and 64 (adults): 100% of the basic price,
// otherwise (seniors): 50% of the basic price.

const price = 12
let age = prompt('Enter your age');
if (age < 6) {
    alert('Preschool kids ride free');
} else if (age <= 15) {
    alert('Pupils pay euro ' + (Math.round(price * 0.35)));
} else if (age <= 26) {
    alert('Students pay euro ' + (Math.round(price * 0.65)));
} else if (age <= 64) {
    alert('Sorry full price: ' + price + ' euro');
} else alert('Seniors pay euro ' + (price * 0.5)); 

// switch(age) {
     
//     case parseInt(age) < 6: 
//         alert('Preschool kids ride free');
      
//     break;
//     case parseInt(age) <= 15: 
//         alert('Pupils pay euro ' + (Math.round(price * 0.35)));
    
//     break;

//     case parseInt(age) <= 26: 
//         alert('Students pay euro ' + (Math.round(price * 0.65)));
    
//     break;
//     case parseInt(age) >= 65: 
//         alert('Seniors pay euro ' + (price * 0.5)); 
    
//     break;
//     default:
//         alert('Sorry full price: ' + price + ' euro');  
// }
