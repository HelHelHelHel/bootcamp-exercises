document.addEventListener('DOMContentLoaded', () => {
  const snailTrack = document.querySelector('#snailTrack');
    const snail = new Snail('theo', 60, 'pink');
    snail.mount(snailTrack);

});


// original solution

// const update = () => {
//   const theodor = document.querySelector('.snail-racer');
//   theodor.style.marginLeft = `${snailPosition}px`;
// }

// let snailPosition = 0;
// const snailEnd = 1000;
// let x = null;
    
// const moveSnail = () => {
//   if (snailPosition >= snailEnd) {
//     clearInterval(x);
//   } else {
//     snailPosition++; 
//     update();
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   x = setInterval(moveSnail, 40);
// });