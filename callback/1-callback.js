'use strict';

// function
const add = (a, b) => a + b;

const res = add(2, 4);
console.log(`add(2, 4) = ${res}`);

// callback
const sum = (a, b, callback) => callback(a + b);

sum(2, 7, (res) => {
  console.log(`sum(2, 7) = ${res}`);
});
