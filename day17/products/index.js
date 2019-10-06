class Product {
    construct(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //methods
    sell() {
        this.quantity--;
    }
    store(count) {
        this.quantity += count;
    }
}

const ball = new Product("ball", "$10", 5 );
alert(ball.quantity);
