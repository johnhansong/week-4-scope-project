/***********************************************************************
Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array.map - use Array.forEach for iteration.


Examples:
let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

***********************************************************************/

// Your code here
const arrowMyMap = ((array, cb) => {
  let newArr = []
  array.forEach(element => newArr.push(cb(element)))
  return newArr
})

let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMyMap;
} catch (e) {
  module.exports = null;
}
