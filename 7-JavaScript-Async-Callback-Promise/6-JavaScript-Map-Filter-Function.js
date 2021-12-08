/*Title: JavaScript Map, Filter, Function
  Description: JavaScript Special Function
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 08/12/2021 */

// ? ForEach - Square of each element in array
let numbers = [1, 2, 3, 4, 5];
let squareNumbers = [];

numbers.forEach(function (x) {
  squareNumbers.push(x * x);
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(squareNumbers); // [1, 4, 9, 16, 25]

// ? Map - Square of each element in array
const squareNumbersUsingMap = numbers.map(function (x) {
  return x * x;
});

console.log(squareNumbersUsingMap); // [1, 4, 9, 16, 25]

// ? Filter - Filter the array elements using condition
let newArray = [28, 16, 9, 5, 3, 2, 11, 7, 4, 1];

const newArrayUsingFilter = newArray.filter(function (x) {
  return x > 10;
});

console.log(newArray); // [28, 16, 9, 5, 3, 2, 11, 7, 4, 1]
console.log(newArrayUsingFilter); // [28, 16, 11]
