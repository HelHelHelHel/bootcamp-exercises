const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];
// 1.Output the number of items in the array to the console. Answer: 19
let count = 0;

numbers.forEach((element, i) => {
  count++;
});

console.log(count);

// console.log(numbers.length);

// Output the number at the index 13 to the console. Answer: -10
for(let i = 0; i < numbers.length; ++i) {
    console.log(`${numbers[13]}`);
}
console.log(numbers[13]);
// Output the number which is exactly in the middle of the array. Answer: -31
for(let i = 0; i < numbers.length / 2; ++i) {
    console.log(`${numbers}`);
}
console.log(numbers[9]);
// Output every number in the array to the console.
console.log(numbers);
// Output the square of every number to the console.
let result = numbers.map(x => x ** 2);
console.log(result);
// Output only negative numbers from the array.
// function getNegativeNumbers(array) {
//     return array.filter(value => value < 0);
//   }
//   console.log(getNegativeNumbers(numbers));

//   Output an absolute value of every number in the array.
// for (const number of numbers) {
//     console.log(Math.abs(number));

// }

// Output only those numbers which absolute value id divisible by 3

for (const number of numbers) {
   if (Math.abs(number) % 3 === 0) {
       console.log(number);
   }
};
// Output only even numbers from the array.

// b = [];

// for (let i = 0; i < numbers.length; ++i) { 
// if ((numbers[i] % 2) === 0) {
//     b.push(numbers[i]);
// }
// console.log(b);
// };

// For every number in the array output the difference between that number and number 5.

// for (let i = 0; i < numbers.length; i++) {
//     console.log( numbers[i] - 5);
// }

// For every number in the array output the squared difference of that number and number 5.

// for (let i = 0; i < numbers.length; i++) {
//     let result1 = numbers.map(result1 => (numbers[i] - 5) ** 2);
//     console.log(result1);
// };

// Output all the numbers which are greater then their predecessor in the array.
let a = [];
for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] > numbers[i-1]) {
        a.push(numbers[i]);
    };
}
console.log(a);

// Output all the peaks in the array. A peak is a number whose predecessor and successor are both smaller then the number itself.

let c = [];
for (let i = 1; i < numbers.length-1; i++) {
    if((numbers[i-1] < numbers[i] && numbers[i] > numbers[i+1]) ||(numbers[i-1] > numbers[i] && numbers[i] < numbers[i+1])) {
        c.push(numbers[i]);
    }
}

console.log(c);

// Count how many negative numbers are there in the array.
let b = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        b.push(numbers[i]);
    }
}
console.log(b.length);

// Compute the sum of all the numbers in the array. Answer: 70
let x = 0;

for (const number of numbers) {
    x += number;
}
console.log(x);
// Compute the average of the numbers in the array. Answer: 3.68421..
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    
}
let avg = sum/ numbers.length;
    console.log(avg);
// Compute the sum of all the positive numbers in the array.

let sum2 = 0;
// for(let i = 0; i< numbers.length; i++) {
//     if (numbers[i] > 0) {
//         sum2 += numbers[i];
//     }
// }
for(const number of numbers) {
    if(number > 0) {
        sum2 += number;
    }
}
console.log(sum2);

// First, compute the average number in the array and save the result in variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...

// let avNo = 0;
// for(const number of numbers) {
//     avNo = number / numbers.length;
//     if (number > 1.68) {
//         const sumUp = sumUp + number;
//     } else (number < 1.68) {
//         const sumD = sumD +number;
//     }
    
  
// }

// console.log(sumUp);


// Find the length of the longest ascending sequence of consecutive numbers in the array.
let counter = 1;
let longest = 1;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i+1]) {
        counter++;
    } else {
        if (counter > longest) {
            longest = counter;
        }
        counter = 1;
    }
        
}
console.log(counter);
console.log(longest);

// Find the longest sequence of consecutive numbers which is either ascending or descending.


// Find the biggest element in the array
let counter1 = [];
let biggest = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i+1]) {
        counter1.push(numbers[i+1]);
    // } else {
    //     if (counter1++ > counter1) {
    //         biggest = counter1;
    //     }
        
    }
        
}
console.log(counter1);
console.log(biggest);


// console.log(Math.max(...counter1));


// Find the second biggest element in the array.

// From the original array create a new array with a reversed order of the elements.
let newArray = [];

    
    for (let i = numbers.length - 1; i >= 0; i--) {
      newArray.push(numbers[i]);
    }
    
  
  console.log(newArray);

//   From the original array create a new array with the elements randomly shuffled. Use the Math.random method to help you with randomness.


    const newArr = numbers.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    

console.log(newArr);




// JS algorithm exers day 16:

// function for length
let array = [2,4,6,8,10];

const len = () => array.length
     
console.log(array.length);

//function for last in an array

const last = () => array[array.length -1];
console.log(array[array.length-1]);
const lastElement = array[array.length - 1];
console.log(lastElement);
console.log(array.slice(-1)[0]);

// second last
const secondL = () => array[array.length -2];
console.log(array[array.length -2]);
const secondLast = array[array.length -2];
console.log(secondLast);
console.log(array.slice(-2)[0]); 


// shopping list

const shoppingList = 
    [['milk', '2l'],
    ['banana','3pcs'], 
];

    // const constructHTML = (array) => {
    //     const shoppingList = document.querySelector('.shoppingList');
    //     shoppingList.innerHTML = '';
    //     let numberOfItems = 0;
    //     for (const item of array) {
    //         shoppingList.innerHTML += `<div><span>${item.name}<span id='delete${numberOfItems}></span></div>`;
    //         numberOfItems++;
    //     }
    //     for(i=0; i< numberOfItems; i++) {
    //         document.querySelector(`#delete${i}`).addEventListener('click')
    //     }
    //     };
    

    document.addEventListener('DOMContentLoaded', () => {
    const listElm = document.querySelector('#shoppingList');
        for(const item of shoppingList) {
            const html = (
                `<div class='shoppingList__item'>
                <span>${item[0]}</span>
                <span>${item[1]}</span>
                </div>`
            );
            listElm.innerHTML += html;
        }

    

});

