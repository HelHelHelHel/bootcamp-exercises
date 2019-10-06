// Create a simple HTML+JS application. The page will be empty, only include your JS file.
// There are four accounts in our bank with numbers and balances as follows:

// number: 000256784, balance: 790 euro,
// number: 000986056, balance: 5 600 euro,
// number: 001546238, balance: 78 065 euro,
// number: 030987456, balance: 120 910 euro.
// Save this information in appropriate variables in your program.

// When the application starts, it asks the user for their account number and it outputs the balance on it.

// const account1 = '000256784';
// const account2 = '000986056';
// const account3 = '001546238';
// const account4 = '030987456';

// const bal1 = '790 euro';
// const bal2 = '5 600 euro';
// const bal3 = '78 065 euro';
// const bal4 = '120 910 euro';

// const accountno = prompt('Enter Your Account Number');
// if (accountno === account1) {
//   prompt('');
//   alert(`Your balance is ${bal1}`);
// } else alert('Wrong account no');


const accountNumber = prompt('Enter Your Account Number');
if (accountNumber === '000256784') {
  alert('Your balance is 790 euro');
} else if (accountNumber === '000986056') {
  alert('Your balance is 5,600 euro');
} else if (accountNumber === '001546238') {
  alert('Your balance is 78,065 euro');
} else if (accountNumber === '030987456') {
  alert('Your balance is 120,910 euro');
} else alert('Wrong account number');


// Change your application so that after asking for the account number it asks the user for an action. If the action is "balance", output the balance on the account as before. If the action is something else, output "Unknown action."

// const accountNumber = prompt('Enter Your Account Number');
// if (accountNumber === '000256784') {
//   const answer = prompt('Do you want to see your balance?');
//   if (answer === 'yes') {
//     alert('Your balance is 790 euro');
//   } else alert('Unknown action');
// } else if (accountNumber === '000986056') {
//   const answer1 = prompt('Do you want to see your balance?');
//   if (answer1 === 'yes') {
//     alert('Your balance is 5,600 euro');
//   } else alert('Unknown action');
// } else if (accountNumber === '001546238') {
//   const answer2 = prompt('Do you want to see your balance?');
//   if (answer2 === 'yes') {
//     alert('Your balance is 78,065 euro');
//   } else alert('Unknown action');
// } else if (accountNumber === '030987456') {
//   const answer3 = prompt('Do you want to see your balance?');
//   if (answer3 === 'yes') {
//     alert('Your balance is 120,910 euro');
//   } else alert('Unknown action');
// } else alert('Wrong account number');

// Add another action to our application called "withdraw". If the user chooses this action, they will be asked to input an amount of money to withdraw from their account. When you have the information subtract the withdrawn money from the correct account. If the account does not have enough money output an error like "Not enough money on your account."

// const accountNumber = prompt('Enter Your Account Number');


// if (accountNumber === '000256784') {
//   const answer = prompt('Do you want to see your balance?');
//   if (answer === 'yes') {
//     alert('Your balance is 790 euro');
//     const withdraw = prompt('How much do you want to withdraw?');
//     alert;
//   } else alert('Unknown action');
// } else if (accountNumber === '000986056') {
//   const answer1 = prompt('Do you want to see your balance?');
//   if (answer1 === 'yes') {
//     alert('Your balance is 5,600 euro');
//   } else alert('Unknown action');
// } else if (accountNumber === '001546238') {
//   const answer2 = prompt('Do you want to see your balance?');
//   if (answer2 === 'yes') {
//     alert('Your balance is 78,065 euro');
//   } else alert('Unknown action');
// } else if (accountNumber === '030987456') {
//   const answer3 = prompt('Do you want to see your balance?');
//   if (answer3 === 'yes') {
//     alert('Your balance is 120,910 euro');
//   } else alert('Unknown action');
// } else alert('Wrong account number');


// Write a function square which takes a number as an input and return the square of that number.
// Write a function called hypotenuse which takes two numbers a and b and return the square root of a2 + b2. Use the Math.sqrt function to compute the square root and use your square function to compute the squares.

// const square = (n) => n * n;

// const hypotenuse = (a, b) => Math.sqrt((a * a) + (b * b));


// Turn your salary computing formula to a function called salary. The function will have three parameters: pay, hours and days and will return the resulting salary. Call that function with some real arguments to test that it works.
// Create another function called taxed_salary(), which will take two parameters - the basic salary and the tax. Let it return a salary after applying the tax.

// const salary = (pay, hours, days) => pay * hours * days;

// const taxedSalary = (sal, tax) => sal - (sal * tax / 100);

// const greet = () => console.log('hello');

// const bar = (x) => x * 2;
// const foo = (y) => y(20);
// console.log(foo(bar));


// const reverse_a_number = (n) => {
//   n += '';
//   return n.split('').reverse().join('');
// };
// document.write(reverse_a_number('helena'));

// const printCurrentPage = () => window.print();
