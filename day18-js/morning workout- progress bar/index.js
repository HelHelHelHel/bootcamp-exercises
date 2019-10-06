let counterDigit = 4;
const maxValue = 20;

const update = () => {
  const counter = document.querySelector('#counter');
  counter.textContent = (`${counterDigit}`);
  const maximum = document.querySelector('#maximum');
  maximum.textContent = (`${maxValue}`);
  const knob = document.querySelector('#knob');
  const step = 100 / maxValue;
  knob.style.width = `${counterDigit * step}%`;
  };

    const oneUp = () => {
      if (counterDigit >= 20) {
        counterDigit = 20
      } else
      counterDigit++;
      update();
    }

    const oneDown = () => {
        if (counterDigit <= 0) {
          counterDigit = 0;
        } else 
        counterDigit--;
        update();
      }
    
document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('#plus');
  const btnMinus = document.querySelector('#minus');
  
    btnPlus.addEventListener ('click', (oneUp));
    btnMinus.addEventListener ('click', (oneDown));
});