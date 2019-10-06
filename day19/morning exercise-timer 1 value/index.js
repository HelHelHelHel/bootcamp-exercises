document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    const timer = new Timer(0);
    timer.mount(app);
});

// version before components:

// let value = 0;

// const update = () => {
//     const counter = document.querySelector('#counter');
//     counter.textContent = `${value}`;
// }

// let id = null;
// const add = () => {
//     if (value > 1000) {
//         clearInterval(id);
//     } else {
//         value++;
//         update();
//     }
// }

// const countUp = () => {
//     id = setInterval(add, 500);

// }

// const reset = () => {

//     clearInterval(id);
//     value = 0;
//     update();
// }


// document.addEventListener('DOMContentLoaded', () => {
//     update();
//     pointUp.addEventListener('click', () => {
//         value++;
//         update();
//     });

//     const pointDown = document.querySelector('#pointDown');
//     pointDown.addEventListener('click', () => {
//         value--;
//         update();
//     });

//     const start = document.querySelector('#start');
//     start.addEventListener('click', () => {
//         countUp();
//         update();
//     });

//     const resetBtn = document.querySelector('#reset');
//     resetBtn.addEventListener('click', () => {
//         reset();
//         update();
//     });


// });