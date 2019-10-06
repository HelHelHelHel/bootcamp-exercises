class Snail {
    constructor(name, speed, color) {
        this.name = name;
        this.speed = speed;
        this.color = color;
        this.snailPosition = 0;
        this.snailEnd = 1000;
        this.id = null;
    }
    
    moveSnail() {
      if (this.snailPosition >= this.snailEnd) {
      clearInterval(this.id);
    } else {
      this.snailPosition = this.snailPosition + this.speed; 
      this.update();
    }
    } 

    countUp() {
        this.id = setInterval(() => this.moveSnail(), 40);
    }   
    

    render() {
        this.element = document.createElement('div');
        this.element.className = 'snail-racer';
        this.element.innerHTML = (
            `<svg class="snail" viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
            <path class="snail__body" d="m237.7 57.44c-0.4105-0.011-0.826 7e-3 -1.244 0.0547-4.725 0.0532-6.619 5.202-7.486 8.893-3.846 4.341-7.693 8.682-11.54 13.02-6.185-0.0413-12.85 1.953-16.82 4.973-12.75 8.364-23.36 25.8-30.42 39.64-10.88 35.22-43.71 60.84-82.48 60.84-17.32 0-33.46-5.118-46.98-13.92-5.676 1.205-11.11 2.581-16.05 4.322l-0.05859 0.0195-0.05664 0.0234c-2.515 0.9718-7.95 1.999-12.63 3.93-2.339 0.9653-4.656 2.148-6.41 4.408-1.574 2.028-2.079 5.138-1.299 7.943 0.2357 1.705 1.267 2.583 1.854 2.992 0.5937 0.4145 1.017 0.5699 1.416 0.7109 0.7972 0.2821 1.508 0.4218 2.352 0.5645 1.687 0.2852 3.824 0.4964 6.424 0.6855 5.199 0.3783 12.17 0.6331 19.77 0.8008 15.19 0.3353 32.81 0.314 43.01 0.127 3e-3 -4e-5 5e-3 5e-5 8e-3 0h4e-3c47.25-0.6791 69.45 0.0222 107-0.3867h0.0254c13.77 0.4857 25.69-9.011 27.79-23.13l0.01-0.0586c0.9738-5.994 2.789-14.19 5.014-20.93 1.116-3.378 2.348-6.398 3.512-8.486 3.035-5.994 12.9-5.931 18.25-7.723 5.677-1.941 11.6-5.458 14.38-12.48l0.0156-0.0352 0.0117-0.0351c2.533-6.772 2.212-14.36-0.541-20.89-2.598-6.164-7.643-11.38-14.55-13.55-2.201-2.039-4.694-3.889-7.383-5.463 3.287-5.581 6.587-11.17 11.9-14.69 4.43-5.54-0.5998-12.02-6.758-12.18z" />
      
            <path class="snail__shell" d="m82.12 102a17.41 17.41 0 0 1-17.41 17.41 17.41 17.41 0 0 1-17.41-17.41 17.41 17.41 0 0 1 17.41-17.41 17.41 17.41 0 0 1 17.41 17.41zm-9.003-45.63a44.29 44.29 0 0 0-44.29 44.29 44.29 44.29 0 0 0 44.29 44.29 44.29 44.29 0 0 0 44.29-44.29 44.29 44.29 0 0 0-44.29-44.29zm-7.906 22.57c12.62 0 22.91 10.29 22.91 22.91 0 12.62-10.29 22.91-22.91 22.91-12.62 0-22.91-10.29-22.91-22.91 0-12.62 10.29-22.91 22.91-22.91zm22.69-63.65a81.53 81.53 0 0 0-81.53 81.53 81.53 81.53 0 0 0 81.53 81.53 81.53 81.53 0 0 0 81.53-81.53 81.53 81.53 0 0 0-81.53-81.53zm-14.25 35.45c27.56 0 49.97 22.41 49.97 49.97 0 27.56-22.41 49.97-49.97 49.97-27.56 0-49.97-22.41-49.97-49.97 0-27.56 22.41-49.97 49.97-49.97z" />
            </svg>
            <div class="snail-racer__name">${this.name}</div>`
        )
        
        this.element.addEventListener('click', () => {
            this.countUp();
            
        });

        this.update();
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    update() {
        
        this.element.style.marginLeft = `${this.snailPosition}px`;
        this.element.querySelector('.snail__shell').style.fill = `${this.color}`;
    }
} 