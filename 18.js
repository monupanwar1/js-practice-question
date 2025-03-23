// reduce method
const cart = [
  {
    product: 'Laptop',
    price: 50000,
  },
  {
    product: 'Phone',
    price: 15000,
  },
  {
    product: 'charger',
    price: 500,
  },
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(`Total price of Cart: ${totalPrice}`);
console.log('Total price of Cart:', totalPrice);
