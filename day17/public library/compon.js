class Book {
    constructor(title, author, numberOfPages, yearPublish, availableBooksToOrder, maxBooks){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.yearPublish = yearPublish;
        this.availableBooksToOrder = availableBooksToOrder;
        this.maxBooks = maxBooks;
    }

    orderBook() {
        if (this.availableBooksToOrder > 0 && this.availableBooksToOrder < this.maxBooks) {
            this.availableBooksToOrder--;
            this.update();
        }
    }

    

    render () {
        this.element = document.createElement('div');
        this.element.className = `bookItem`;
        this.element.innerHTML = (
        `<span id="title">${this.title}</span>
        <span id="author">${this.author}</span>
        <span id="numberOfPages">${this.numberOfPages}</span>
        <span id="yearPublish">${this.yearPublish}</span>
        <button id="decreaseBtn" class="decreaseBtn">Order the Book</button> 
        <div><span id="availableBooks" class="availableBooks">${this.availableBooksToOrder}</span>
        <span>/</span>
        <span id="maxBooks" class="maxBooks">${this.maxBooks}</span></div>`
        );

        const orderBookBtn = this.element.querySelector('#decreaseBtn');
        orderBookBtn.addEventListener('click', () => {
           this.orderBook();    
        });

        this.update();

    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    update() {
        const availableBooks = this.element.querySelector('#availableBooks');
        availableBooks.textContent = `${this.availableBooksToOrder}`;    
    }


};
