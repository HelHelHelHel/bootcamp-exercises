
// 1. roll a dice





// const classes = ['cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6'];
// const changeSide = () => {
// const sideNumber = Math.floor(Math.random() * 6);
// document.getElementById('image').className = classes[sideNumber];

// };

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', changeSide);

// 2. login

const checkUser = () => {

const user = ['Ann', 'John', 'Paul'];
const pass = ['Annpass', 'johnpass', 'paulpass'];  
let login = document.getElementById('login').value;
let password = document.getElementById('password').value;

if (login === user[0] && password === pass[0]) {
        alert('You got in');
    } else if (login === user[1] && password === pass[1]) {
        alert('you got it');
    } else if (login === user[2] && password === pass[2]) {
        alert('Paul, you are in');
} else alert('Wrong login and password');
};


document.addEventListener('DOMContentLoaded', () => {
const btn = document. querySelector('#btn');
btn.addEventListener('click', checkUser);
});

// 3. roll 6 dices




// const rollDices = () => {
//     const dice1 = document.querySelector('#dice1');
//     const dice2 = document.querySelector('#dice2');
//     const dice3 = document.querySelector('#dice3');
//     const dice4 = document.querySelector('#dice4');
//     const dice5 = document.querySelector('#dice5');
//     const dice6 = document.querySelector('#dice6');
//     const dice = [dice1, dice2, dice3, dice4, dice5, dice6];

//     let d1 = Math.floor(Math.random() * 6);
//     let d2 = Math.floor(Math.random() * 6);
//     let d3 = Math.floor(Math.random() * 6);
//     let d4 = Math.floor(Math.random() * 6);
//     let d5 = Math.floor(Math.random() * 6);
//     let d6 = Math.floor(Math.random() * 6);
//     let d = [d1, d2, d3, d4, d5, d6];

//     const classes = ['cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6'];
    
//     // let sideNumber = Math.floor(Math.random() * 6) + 1;

   
//     dice1.className = classes[d1];
//     dice2.className = classes[d2];
//     dice3.className = classes[d3];
//     dice4.className = classes[d4];
//     dice5.className = classes[d5];
//     dice6.className = classes[d6];

        
//         // dice.className = classes[sideNumber]);
    
// };



// let roll = () => {
//     Math.floor(Math.random() * 6) + 1;
// };

// document.addEventListener('DOMContentLoaded', () => {
// const dice1 = document.querySelector('#dice1');
// dice1.src = `img/side${side}.png`;

// dice1.addEventListener('click', () => {
//     // if (side < 6) {
//     //     side++;
//     // } else {
//     //     side = 1;
//     // }
//     let roll = () => {
//         Math.floor(Math.random() * 6) + 1;
//     };
    
//     dice1.src = `img/side${roll}.png`;
// });


// });

