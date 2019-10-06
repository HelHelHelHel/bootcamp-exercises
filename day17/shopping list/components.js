// class ShopItem {
//     constructor(name, amount) {
//       this.name = name;
//       this.amount = amount;
//     }
    




//     render () {
//         this.element = document.createElement('div');
//         this.element.className = `shopItem`;
//         this.element.innerHTML = (
//         `<span>${newItem.name}</span><span>${newItem.amount}
//         <input type="checkbox" class="btn-check"/>
//         </span> `
//         );

//         this.update();
//     }

//     mount(parent) {
//         this.render();
//         parent.appendChild(this.element);
//     }

//     update() {
//     const submitBtn = this.element.querySelector('#submitBtn');
//     submitBtn.addEventListener ('click', () => {
    
//     const nameItem = this.element.querySelector('#nameItem').value;
//     const nameAmount = this.element.querySelector('#nameAmount').value;
  
//     const item = new ShopItem(nameItem, nameAmount)
//     shoppingList.push(item);  
//     updateShoppingList(item);
//   });

//     }

// }