'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // 더하기, add
console.log(1 - 1); // 빼기, substract
console.log(1 / 1); // 나누기, divide
console.log(1 * 1); // 곱하기, multiply
console.log(5 % 2); // 몫, remainder
console.log(2 ** 10); // 제곱, exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter + counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators > 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators > 비교 연산다
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
// 논리 연산자
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
console.log(`and: ${value1 || value2 || check()}`);
// null check

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🖕');
  }
  return true;
}
