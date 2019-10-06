
class Timer {
    constructor(value) {
        this.value = value;
        this.id = null;
    }
    
    add() {
        if (this.value > 1000) {
            clearInterval(this.id);
        } else {
            this.value++;
            this.update();
        }
    }

    countUp() {
        this.id = setInterval(() => this.add(), 500);
    }

    reset() {
        clearInterval(this.id);
        this.value = 0;
        this.update();
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'timer';
        this.element.innerHTML = (
        `<div class="resetBtn" id="reset"><p>Reset</p></div>
        <div class="countMid">
        <div id="pointUp" class="pointUp"></div>
        <div class="counter" id="counter">${this.value}</div>
        <div id="pointDown" class="pointDown"></div>
        </div>
        <div id="start" class="start"><p>Start</p></div>`
        );
        
        const pointUp = this.element.querySelector('#pointUp');
        pointUp.addEventListener('click', () => {
            this.value++;
            this.update();
        });

        const pointDown = this.element.querySelector('#pointDown');
        pointDown.addEventListener('click', () => {
            this.value--;
            this.update();
        });

        const start = this.element.querySelector('#start');
        start.addEventListener('click', () => {
            this.countUp();
        });

        const resetBtn = this.element.querySelector('#reset');
        resetBtn.addEventListener('click', () => {
            this.reset();
        });

        this.update();
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    update() {
            this.element.querySelector('#counter').textContent = `${this.value}`;
    }
}