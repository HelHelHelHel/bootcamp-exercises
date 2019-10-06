
let result = 0;
// let op = null;
// let textNumber = document.querySelector('#text-number');
// let textResult = document.querySelector('#text-result');
// let number = parseInt(textNumber.value, 10);

// // const handleEqualsClick = () => {
    
// //     const number = parseInt(textNumber.value, 10);
    
    
// //     if (operation === '+') {
// //         return result = result + number;
// //     } else if (operation === '-') {
// //         return result = result - number;
// //     } else if (operation === '*') {
// //         return result = result * number;
// //     } else if (operation === '*') {
// //         return result = result / number;
// //     } else return 'error';
    
    
    
    
    
// //     textResult.textContent = result;
// //     textNumber.value = '0';

// // }

// const handlePlusClick = () => {
    
    
//     result= result + number;
//     textNumber.value = '0';
//     textNumber.focus ();
    

    
//     textResult.textContent = result;
    

// };

// const handleMinusClick = () => {
    
//     const number = parseInt(textNumber.value, 10);
//     result= number - result;
//     textNumber.value = '0';
//     textNumber.focus ();

    
//     textResult.textContent = result;

// }

// const handleMultipleClick = () => {
    
//     const number = parseInt(textNumber.value, 10);
//     result= number * result;
//     textNumber.value = '0';
//     textNumber.focus (); 

//     const textResult = document.querySelector('#text-result');
//     textResult.textContent = result;

// };
// const handleDivideClick = () => {
    
//     const number = parseInt(textNumber.value, 10);
//     result= number / result;
//     textNumber.value = '0';
//     textNumber.focus ();

    
//     textResult.textContent = result;

// };


// const handleClearClick = () => {
    
//     result = 0;
//     textNumber.value = '0';
   
    
//     textResult.textContent = '0';


// };

// const handleOneClick = () => {
//     result = 0; 
//     textNumber.value = '1';
//     textResult.textContent = '1';
// };



document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('keypress', () =>{
        const box = document.querySelector('.box');
        box.classList.toggle('box-modifier');
    });
    
    const btnPlus = document.querySelector('#btn-plus');
    btnPlus.addEventListener ('click', () => {
        const textNumber = document.querySelector('#text-number');
        result= result + Number;
        
        const textContent = document. querySelector('#screen');
    });

    const btnMinus = document.querySelector('#btn-minus');
    btnMinus.addEventListener ('click', handleMinusClick);
    
    const btnMultiple = document.querySelector('#btn-multiple');
    btnMultiple.addEventListener ('click', handleMultipleClick);
    
    const btnDivide = document.querySelector('#btn-divide');
    btnDivide.addEventListener ('click', handleDivideClick);
    
    
    // const btnClear = document.querySelector('#btn-clear');
    // btnClear.addEventListener('click', handleClearClick);


    // const btnEquals = document.querySelector('#btn-equals');
    // btnEquals.addEventListener('click', handleEqualsClick);
     
    // const btnDecimal = document.querySelector('#btn-decimal');
    // btnDecimal.addEventListener('click', handleDecimalClick);

    // const btn0 = document.querySelector('#btn-0');
    // btn0.addEventListener('click', handle0Click);

    // const btn1 = document.querySelector('#btn-1');
    // btn1.addEventListener('click', handleOneClick);

    // const btn2 = document.querySelector('#btn-2');
    // btn2.addEventListener('click', handle2Click);

    // const btn3 = document.querySelector('#btn-3');
    // btn3.addEventListener('click', handle3Click);

    // const btn4 = document.querySelector('#btn-4');
    // btn4.addEventListener('click', handle4Click);

    // const btn5 = document.querySelector('#btn-5');
    // btn5.addEventListener('click', handle5Click);

    // const btn6 = document.querySelector('#btn-6');
    // btn6.addEventListener('click', handle6Click);

    // const btn7 = document.querySelector('#btn-7');
    // btn7.addEventListener('click', handle7Click);

    // const btn8 = document.querySelector('#btn-8');
    // btn8.addEventListener('click', handle8Click);

    // const btn9 = document.querySelector('#btn-9');
    // btn9.addEventListener('click', handle9Click);

});

