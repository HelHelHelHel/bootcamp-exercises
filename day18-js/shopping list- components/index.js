


document.addEventListener('DOMContentLoaded', () => {
const shoppingList = document.querySelector('#shopping-list');
const product = new ShopItem('bacon', 1, 'kg');
product.mount(shoppingList);
const product2 = new ShopItem('cheese', 1, 'package');
product2.mount(shoppingList);


  // adding items to shopping list from input on website

  const submitBtn = document.querySelector('#submitBtn');
  submitBtn.addEventListener ('click', () => {
  const nameItem = document.querySelector('#nameItem').value;
  const nameAmount = document.querySelector('#nameAmount').value;
  const nameUnit = document.querySelector('#nameUnit').value;
  const product3 = (new ShopItem(nameItem, nameAmount, nameUnit));  
  product3.mount(shoppingList);
  });





});



// // class for shopping item
// class ShopItem {
//   constructor(name, amount) {
//     this.name = name;
//     this.amount = amount;
//   }
// }

// const updateShoppingList = (newItem) => {
//   const itemElm = document.createElement('div');
//   itemElm.className = `shopItem`;
//   itemElm.innerHTML = (
//     `<span>${newItem.name}</span><span>${newItem.amount}
//       <input type="checkbox" class="btn-check"/>
//       </span><button id="delete">X</button>`
//   );

//   itemElm.querySelector('.btn-check').addEventListener('click', (event) => {
//     if (newItem.checked) {
//       newItem.checked = false;
//       event.target.style.backgroundColor = 'initial';
      
//     } else {
//       newItem.checked = true;
//       event.target.style.borderColor = 'red';
//     }
//   });

//   const list = document.querySelector('#shopping-list');
//   list.appendChild(itemElm);

// }

// // makes shopping list by adding items with shopItem class
// const shoppingList = [
//   new ShopItem('bananas', '1kg'),
//   new ShopItem('cheese', '1lbs'),
//   new ShopItem('apples', '1kg')
// ];



// // adding eventListener for DOM content
// document.addEventListener('DOMContentLoaded', () => {

// // looping through items in shopping list
//   for(const item of shoppingList) {
//     updateShoppingList(item);
//   };

// 

// });
