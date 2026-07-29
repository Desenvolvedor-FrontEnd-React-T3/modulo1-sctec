const order = {
    customer: "Ana",
    items: [
        { name: "Pizza", price: 45 },
        { name: "Refrigerante", price: 12 }
    ],
    address: {
        city: "Florianópolis"
    },
    total() {
        return this.items.reduce((sum, item) => {
            return sum + item.price
        }, 0)
    },
    delivered: false
}

console.log(order.customer);
console.log(order.items[1].price);
console.log(order.total());


