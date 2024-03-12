'use strict';

//Task: rewrite function to return result into sync callback:
// Change signature to: (items, callback(result))
const total = (items, money) => {
  for (const item of items) {
    const element = item.price;
    money(element);
  }
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

// Use new signature total(electronics, (money) => ...)
let result = 0;

total(electronics, (money) => {
  result += money;
});

console.log({ result });
