// import { getEnabledCategories } from "trace_events";

// Roman numerals
// Create a webpage that will ask the user for number between 0 and 4000 either using prompt or by some other way. The page will output that number in roman numerals. For example, 6 will be VI, 124 will be CXXiV, 1994 will be MCMXCIV. If you are unsure about how roman numerals work, you can read through this guide

// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('#latin');
//     const btn = document.querySelector('#submitLatin');
    
//     btn.addEventListener('click', () => {
//         const numExchange1 = [null, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
//         const numExchange10 = [null, 'x', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXX', 'XC'];
//         const numExchange100 = [null, 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
//         const num = parseInt(input.value, 10);
//         const num1 = parseInt(input.value[0], 10);
//         const num2 = parseInt(input.value[1], 10);
//         const num3 = parseInt (input.value[2], 10);
//         if (input.value < 10) {
//             alert(numExchange1[num]);
//         } else if (input.value < 100 ){
//             alert(numExchange10[num1] + numExchange1[num2]);
//         } else if (input.value < 1000) {
//             alert(numExchange100[num1] + numExchange10[num2] + numExchange1[num3])
//         } else
        
//         alert('nothing');
        
//     });
// });

// 2 Correct parentheses
// Write a program which will check whether a string consisting only of left and right parantheses has a correct parenthesis structure. For example:

// '(()())' - correct
// '(())()' - correct
// '((()))' - correct
// '())' - incorrect
// '))((' - incorrect



// document.addEventListener('DOMContentLoaded', () => {
//     let isMatchingBrackets = (str) => {
//         let stack = [];
//         let map = {
//             '(': ')'
//         }
    
//         for (let i = 0; i < str.length; i++) {
    
//             // If character is an opening brace add it to a stack
//             if (str[i] === '(' ) {
//                 stack.push(str[i]);
//             }
//             //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
//             else {
//                 let last = stack.pop();
    
//                 //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
//                 if (str[i] !== map[last]) {return false};
//             }
//         }
//         // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
//             if (stack.length !== 0) {return false};
    
//         return true;
//     }
    
//     console.log(isMatchingBrackets("(()()()))((")); // returns true
// });

// function reverse_a_number(n)
// {
// 	n = n.toString();
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number('12345'));

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }
// function add() {
// 	num1 = document.getElementById('firstNumber').value
// 	num2 = document.getElementById('secondNumber').value;
// 	document.getElementById('result').innerHTML = parseFloat(num1) + parseFloat(num2);
// }

let add = () => {
	let num1 = document.querySelector('#firstNumber').value;
	let num2 = document.querySelector('#secondNumber').value;
	
result = parseFloat(num1) + parseFloat(num2);
	
	console.log(result);
	
}


document.addEventListener('DOMContentLoaded', () => {
const btn = document.querySelector('#add');


btn.addEventListener ('click', add());

});