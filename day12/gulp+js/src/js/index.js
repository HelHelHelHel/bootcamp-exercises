// Create a page which will ask the user for their hourly pay, number of hours they work in a day, and number of days they work in a month a output their monthly salary after 25% tax. Output the salary with some nice message like "Your salary is 2500 euro after tax." Use the functions created in the previous exercise.

const hourlyPay = prompt('How much are you paid per hour?');
const numberOfWorkHours = prompt('How many hours do you work a day?');
const numberOfWorkDays = prompt('How many days do you work in a month?');
const salaryGross = hourlyPay * numberOfWorkHours * numberOfWorkDays;
const salaryNetto = salaryGross - (salaryGross * 0.25);
alert('Your salary after tax is euro: ' + salaryNetto);
