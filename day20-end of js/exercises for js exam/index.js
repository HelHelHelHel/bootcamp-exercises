console.log('it works');
// salary

// const hourlySalary = 20;
// const daysWorked = 21;
// const hoursWorked = 8;
// const tax = 0.25;

// const monthlySalary = hourlySalary * daysWorked * hoursWorked;
// const taxedSalary = monthlySalary -(monthlySalary * tax);
// const avDailyHours = (9 + 7 + 5.5 + 6 +2)/5 
// const avDailySal = avDailyHours * hourlySalary

// miles to kms

// const mph = 20;
// const toKm = mph * 1.609344;
// console.log(toKm);

// dice roll

// let diceRoll = Math.floor(Math.random() * 6 ) + 1;
// console.log(diceRoll);

// users age

// let userBirthYear = prompt('What is your birth year?');
// let userAge = 2019 - parseInt(userBirthYear);
// alert(userAge);

//chessboard

// const chessboard = [ [5, 0, 0, 0, 0, 0, 0, 0], 
//                      [0, 0, 0, 0, 0, 1, 0, 0],
//                      [0, 0, 0, 0, 0, 1, 0, 1],
//                      [0, 0, 0, 0, 0, 1, 1, 3],
//                      [0, 0, 0, 0, 0, 0, 1, 6],
//                      [0, 0, 0, 0, 3, 0, 1, 1],
//                      [0, 1, 0, 0, 0, 0, 0, 1],
//                      [0, 0, 0, 0, 0, 0, 4, 0]]

// chessboard [4[0]] = 6;
// chessboard [4[0]] = 0;                  

// cards
// const cards = ['ace', 8, 9, 10, 'J', 'Q', 'K'];
// const suits = ['club', 'diamond', 'heart'];
// let rankIndex = Math.floor(Math.random() * 7);
// let suitIndex = Math.floor(Math.random() * 3);
// document.write(cards[rankIndex]  + ' of ' + suits[suitIndex]);

//login

// const btn = document.querySelector('#btn');
// btn.addEventListener ('click', () => {
// let input = document.querySelector('#passInput');
// let input2 = document.querySelector('#passInput2');


// if (input.value.length < 8) {
//     alert('your password is not secure');
// } 


// if (input.value === input2.value) { 
//     alert('yes');
// } else alert('passwords do not match');

// });



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
// } else alert('Passwords do not match')

// const acc1 = '000256784';
// const acc2 = '000986056';
// const acc3 = '001546238';
// const acc4 = '030987456';
// let bal1 = 790;
// let bal2 = 5600;
// let bal3 = 78065;
// let bal4 = 120910;

// const yourAcc = prompt('what is your acc no?');
// const action = prompt('what action are you looking for?')

// if (action === 'balance') {
//     let balance = null;

//     if (yourAcc === acc1) {

//         balance = bal1;
//     } else if (yourAcc === acc2) {

//         balance = bal2;
//     } else if (yourAcc === acc3) {

//         balance = bal3;
//     } else if (yourAcc === acc4) {

//         balance = bal4;
//     }

//     if (balance === null) {
//         alert('incorrect acc no');
//     } else alert('your balance is: ' + balance);

// } else if (action === 'withdraw') {
//     let sum = parseInt(prompt('how much to withdraw?'));

//     if (yourAcc === acc1) {
//         bal1 -= sum;
//     } else if (yourAcc === acc2) {
//         bal2 -= sum;
//     } else if (yourAcc === acc3) {
//         bal3 -= sum;
//     } else if (yourAcc === acc4) {
//         bal4 -= sum;
//         alert ('your new balance is:' + bal4);
//     }
// } else {
//     alert('not enough money on your account');



// }

// for (let num = "#"; num.length < 8; num += "#")
//   console.log(num);

//   for (let num = 1; num <= 100; num++){
//   let output = '';
//     if(num % 3 === 0) {
//         output += 'Fizz';
//     } 
//     if (num % 5 === 0) {
//         output += 'Buzz';
//     }
//         console.log(output || num);
//     }

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }

//  let size = 8;
//  let board = '';
//  for(let x = 0; x < 8; x++) {
//      for(let y = 0; y < 8; y++) {
//          if ((x+y) % 2 === 0) {
//              board += ' ';
//          } else board += '#';
//      }
//      board += '\n';
//  }
//  console.log(board);

// const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// console.log(numbers.length);

// console.log(numbers[13]);

// let middle = Math.floor(numbers.length / 2);
// console.log (numbers[middle]);

// for(const number of numbers){
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number*number);
// }

// for(const number of numbers) {
//     let abs = Math.abs(number);
//     console.log(abs);
// }

// for (const number of numbers) {
//     let absN = Math.abs(number);
//     let output = [];
//     if(absN % 3 === 0) {
//         output++ ;
//     }
//     console.log(output);
// }

// for (const number of numbers) {
//     let minus5 = (number - 5) * (number - 5);
//     console.log(minus5);

// } 

// for(let i = 0; i < numbers.length; i++ ) {

//     let greater = [];
//     if(numbers[i - 1] < numbers[i]) {
//         greater.push(numbers[i]);
//     }
//     console.log(greater);
// }

// for (let i = 0; i < numbers.length; i++) {
//     let greatest = [];
//     if (numbers[i - 1] < numbers[i] && numbers[i] > numbers[i + 1]) {
//         greatest.push(numbers[i]);
//     }
//     console.log(greatest);
// }

/* for(const number of numbers) {
    let neg = [];
    if(number < 0) {
        neg.push(number);
    }
    console.log(neg);
    console.log(neg.length)
} */

// const sum = numbers.reduce((total, sum) => total + sum);
// console.log(sum);

// const sum = numbers.reduce( (total, sum) => total + sum);
// const av = sum / numbers.length;
// console.log(av);

// const mx = Math.max.apply(null, numbers);
// console.log(mx);

// find longest increasing sub-array:








// numbers.sort((a,b)=> b - a);
// console.log(numbers[1]);

// reverse an array and keep the old one intact
// let rever = numbers.slice().reverse();
// console.log(numbers);



// for (let i = 0; i < numbers.length; i++) {  
//     if (numbers[i - 1] < numbers[i] && numbers[i] > numbers[i + 1]) {
//         numbers.push(numbers[i]);
        
//         let max = numbers.reduce((a, b) => {
//         return Math.max(a,b);
//     });
//     console.log(max);
//     }
// }

// numbers.reverse();
// console.log(numbers);

// numbers.sort((a, b) => Math.random() - Math.random());
// console.log(numbers);

// numbers.sort((a,b) => a-b);
// console.log(numbers);



// shoppinglist array
// const shoppingList = [
//     { name: 'apples', amount: '1kg'}, 
//     { name: 'bananas', amount: '2kg'},
//     { name: 'cheese', amount: '20dkg'},
// ];

// document.addEventListener('DOMContentLoaded', () => {
//   const listElm = document.querySelector('.shopping-list');

//   for(const item of shoppingList) {
//     const html = (
//         `<div class="shopping-list__item">
//         <span>${item.name}</span>
//         <span>${item.amount}</span></div>`
//     );
//     listElm.innerHTML += html;
// }


//   const btn = document.querySelector('#add');
//   btn.addEventListener('click', () => {
//     const nameInp = document.querySelector('#name');
//     const amountInp = document.querySelector('#amount');
//     shoppingList.push({ name: nameInp.value, amount: amountInp.value});
//     console.log(shoppingList);
    
    
       
       
//   });
// });

 
const len = ([5, 4, 3, 2]) => len.length;

console.log(len);
    