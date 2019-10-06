document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.starwarsCast');
  
  fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(swList => {
      console.log(swList.results);
      for(const sw of swList.results) {
        const swStarComp = new SwStar(sw.name, sw.height, sw.mass, sw.eye_color, sw.gender);
        swStarComp.mount(container);
      }
    });
});



