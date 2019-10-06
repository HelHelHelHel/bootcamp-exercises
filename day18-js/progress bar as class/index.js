// this is just in the js, not in html


const bar = new ProgressBar (10, 20);

const update = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = (`${bar.value}`);
  const maximum = document.querySelector('#maximum');
  maximum.textContent = (`${bar.max}`);
  const knob = document.querySelector('#knob');
  const step = 100 / bar.max;
  knob.style.width = `${bar.value * step}%`;
  };

    
document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('#plus');
  const btnMinus = document.querySelector('#minus');
  
    btnPlus.addEventListener ('click', () => {
      bar.increment();
      update();
    });
    btnMinus.addEventListener ('click', () => {
      bar.decrement();
      update();
    });
});