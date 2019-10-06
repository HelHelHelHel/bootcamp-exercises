
document.addEventListener('DOMContentLoaded', () => {
  const snailTrack = document.querySelector('#snailTrack');
    
  const snailGroup = [];  
  
  fetch('http://bootcamp.podlomar.org/api/snails/5')
    .then(response => response.json())
    .then(snailList => {
      for(const snail of snailList) {
        const snailComp = new Snail(snail.name, snail.velocity, snail.color);
        snailComp.mount(snailTrack);
        snailGroup.push(snailComp);
      }
    });

    document.addEventListener('keyup', () => {
      for (const i of snailGroup){
      i.countUp()
    }
    });

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