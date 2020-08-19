'use strict';

console.log('1. String concatenation');
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
// string literals i.e
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`);
console.log('Ellie\'s book');
console.log('\n줄바꿔서 > Ellie\'s book');
console.log('\t탭 > Ellie\'s book');

console.log('\n2. Numeric operators');
// 2. Numeric operators
console.log(1 + 1); // 더하기, add
console.log(1 - 1); // 빼기, substract
console.log(1 / 1); // 나누기, divide
console.log(1 * 1); // 곱하기, multiply
console.log(5 % 2); // 몫, remainder
console.log(2 ** 10); // 제곱, exponentiation

console.log('\n3. Increment and decrement operators');
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

const preDecrement = --counter;;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

console.log('\n4. Assignment operators');
// 4. Assignment operators > 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

console.log('\n5. Comparison operators');
// 5. Comparison operators > 비교 연산자
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

console.log('\n6. Logical operators');
// 6. Logical operators: || (or), && (and), ! (not)
// 논리 연산자
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`); // computed function 등은 마지막으로...

// && (and)
console.log(`and: ${value1 || value2 || check()}`);
// 'and' 연산자를 활용한 null check
// often used to compare long if-statment
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🤬');
  }
  return true;
}

// ! (not)
console.log(!value1);

console.log('\n7. Equality');
// 7. Equality
const stringFive = '5';
const numberFive = 5;

console.log('\n7-1. loose equality');
// '==' loose equality, with type conversion > type 변경
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log('\n7-2. strict equality');
// '===' strict equality, no type conversion > recommend
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

console.log('\n7-3. object equality');
// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // object reference 가 달라서 false
console.log(ellie1 === ellie2); // object reference 가 달라서 false
console.log(ellie1 === ellie3); // object reference 가 같아서 true

console.log('\nFinal equlity - puzzler');
// Final equlity - puzzler
// Hint : false = 0, null, undefined, NaN, ''
// 핵심 '==', '===' type을 보는가 안보는가?
console.log(0 == false); // true
console.log(0 === false); // false, 0 is not boolean type
console.log('' == false); // true
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

console.log('\n8. Conditional operators');
// 8. Conditional operators: if
// if, else if, else
const name = 'bogan';
if (name === 'bali') {
  console.log('Welcome, Bali!');
} else if (name === 'coder') {
  console.log('You are crazy coder');
} else {
  console.log('unknown');
}

console.log('\n9. Ternary operator');
// 9. Ternary operator: ? (삼항연산자)
// condition ? value1 : value2;
console.log(name === 'bali' ? 'I\'m right' : 'No');

console.log('\n10. Switch statement');
// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('🖕Get out here!');
    break;
  // case 'Chrome':
  //   console.log('Love you');
  //   break;
  // case 'Firefox':
  //   console.log('Love you');
  //   break;
  case 'Chrome':
  case 'Firefox':
    console.log('Love you');
    break;
  default:
    console.log('Same all!');
    break;
}

console.log('\n11. Loop');
// 11. Loops

console.log('\n11-1. while loop');
// while loop, while the condition is truthy
// body code is executed.
// 조건이 맞을때 실행
let i = 3;
while (i > 0) { // statement false 일때까지 무한 반복
  console.log(`while: ${i}`);
  i--;
}

console.log('\n11-2. do while');
// do while loop, body code is executed first,
// then check the condition.
// 블록을 먼저 실행한뒤 조건에 의해 멈춤
do { // do 블록을 먼저 실행한다.
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

console.log('\n11-3. for');
// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

console.log('\nFinal. break & continue');
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`Q1. ${i}`);
  // continue를 사용하지 않을 때!
  // if (i % 2 === 0) {
  //   console.log(`q1. ${i}`);
  // }
}

console.log('\n');
// Q2. iterate from 0 to 10 and print number until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`Q2. ${i}`);
}