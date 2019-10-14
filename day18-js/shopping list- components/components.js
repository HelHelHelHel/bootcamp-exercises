


class ShopItem {
    constructor(name, amount, unit) {
      this.name = name;
      this.amount = amount;
      this.unit = unit;
      this.opacity = 1;
      
    }

    increment() {
      if (this.amount >= 10) {
        this.amount = 0;
        this.update();
      } else
        this.amount++;
        this.update();
      
    }

    // changeStyle() {
    //   const shopItem = this.element.getElementByClassName('shopItem');
    //     const displaySetting = shopItem.style.display;
    //     displaySetting.style.display = 'none';
    //     this.update();
    // }

    
    
    render () {
        this.element = document.createElement('div');
        this.element.className = `shopItem`;
        this.element.innerHTML = (
        `<span id="name">${this.name}</span>
        <button id="moreBtn" class="moreBtn">Get more</button> 
        <span id="amountCounter" class="amount">${this.amount}</span>
        <span id="units" class="units">${this.unit}</span>
        <button id="hideBtn" class="hideBtn">Delete from the list</span>`
        );

        const getMoreBtn = this.element.querySelector('#moreBtn');
        getMoreBtn.addEventListener('click', () => {
           this.increment();    
        });

        const hideBtn = this.element.querySelector('#hideBtn');
        hideBtn.addEventListener('click', () => {
          console.log('hello');
          this.opacity = 0;
        });

        this.update();
    }

    mount(parent) {
      this.render();
      parent.appendChild(this.element);
    }

    update() {
      const amountCounter = this.element.querySelector('#amountCounter ');
      amountCounter.textContent = `${this.amount}`;
      this.element.style.opacity = `${this.opacity}`;
    };

}

