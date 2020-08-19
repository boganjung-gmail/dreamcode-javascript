'use strict';

console.log('Array');
// JavaScript === Dynamically typeed language
// 자료구조와 알고리즘~
// 검색, 삽입, 정렬, 삭제...

// Array


console.log('\n1. Declaration result');
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);


console.log('\n2. Index position result');
// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log('배열의 길이 = ' + fruits.length);
console.log(fruits[0]); // 첫번째 item
console.log(fruits[1]);
console.log(fruits[2]);
console.log('배열의 마지막 = ' + fruits[fruits.length - 1]);


console.log('\n3. Looping over an array result');
// 3. Looping over an array
// print all fruit

console.log('\n3-1. for loop result');
// 3-1. for loop
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

console.log('\n3-2. for ...of result');
// 3-2. for ...of
for (let fruit of fruits) {
	console.log(fruit);
}

console.log('\n3-3. forEach result');
// 3-3. forEach
// fruits.forEach(function (fruit, index) {
// 	console.log(fruit, index);
// })
fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit,) => console.log(fruit));


console.log('\n4. Addtion, deletion, copy');
// 4. Addtion, deletion, copy

console.log('\n4-1. push result');
// 4-1. push: add in item to the end
fruits.push('🍓', '🍑'); // 맨 뒤에서 추가됨~
console.log(fruits);

console.log('\n4-2. pop result');
// 4-2. pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

console.log('\n4-3. unshift result');
// 4-3. unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits);

console.log('\n4-4. shift result');
// 4-4. shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 시프트와 언시프트는 가장 앞의 데이터를 건드리게 되어 나머지 모든 데이터의 인덱스를 업데이트해야 한다. 만약 배열의 길이가 일억개라면..?

console.log('\n4-5. splice result');
// 4-5. splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 지워진 자리에 값을 넣는 경우~
//fruits.splice(1, 0, '🍏', '🍉'); <- 안지우고 해당 자리에 값을 넣는 경우~
console.log(fruits);

console.log('\n4-6. concat result');
// 4-6. concat: combine two arrays
const fruits2 = ['🍒', '🥝'];
fruits.concat(fruits2);
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.log('\n5. Searching');
// 5. Searching
// find the index

// indexOf
console.log('\n5-1. indexOf result');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🌽')); // index not found~

// includes
console.log('\n5-2. includes result');
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥬'));

// lastIndexOf
console.log('\n5-3. lastIndexOf result');
fruits.push('🍎'); // 일단 빨간 사과를 추가해 두개를 만든다~
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 첫번째 빨간 사과의 index return
console.log(fruits.lastIndexOf('🍎')); // 마지막 빨간 사과의 index return