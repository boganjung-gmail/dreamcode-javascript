'use strict';

console.log('Objects');
// Objects
// one of the JavaScript's data type. 오브젝트는 데이터타입 중 하나다!
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances Object.
// object = { key : value }; 오브젝트는 키와 값의 집합체~


console.log('\n1. Object literal & properties');
// 1. Literal & Properties
// 오브젝트 생성
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// const name = 'ellie';
// const age = 4;
// print(name, age);

// function print(name, age) {
// 	console.log(name);
// 	console.log(age);
// }

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const ellie = { name: 'ellie', age: 30 };
print(ellie);

// with JavaScript magic (Dynamic typed language)
// Can add properties later, 이미 만들어진 'ellie' 오브젝트에 data를 추가할 수 있지만 권장하지 않아~
ellie.hasJob = true;
console.log(ellie.hasJob);

// Can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);


console.log('\n2. Computed properties');
// 2. Computed properties
// key should be always string, 언제나 문자열로~
console.log(ellie.name);
console.log(ellie[name]); // <- 문자열이 아니면 undefined(error가 아니네~)
console.log(ellie['name']);

ellie['hasJob'] = true;
console.log('엘리의 직업: ' + ellie.hasJob);

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


console.log('\n3. Property value shorthand');
// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);

console.log(person4);

function makePerson(name, age) {
	return {
		// name: name,
		// age: age,
		name, // Key 와 Value 의 이름이 동일하면 생략할 수 있다.
		age,
	};
}


console.log('\n4. Constructor function');
// 4. Constructor function
function Person(name, age) { // 순수 Object를 생성하는 함수명은 보통 대문자로 시작하는게 관례~
	// this = {}; 생략
	this.name = name;
	this.age = age;
	// return this; 생략
}
const person5 = new Person('bali', 40);
console.log(person5);


console.log('\n5. in operator');
// 5. in operator: property existence check (key in obj)
// 해당하는 Object 안에 key 있는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

console.log('\n6. for..in vs for..of');
// 6. for..in vs for..of
// 정말 유용한~
// for (key in obj)
// console.log(ellie.hasJob);
for (let key in ellie) {
	console.log(key);
} // 앞에 'let'없으면 'use strict' mode 에서는 에러가 발생한다.

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }
for (let value of array) {
	console.log(value);
}

console.log('\n7. cloning');
// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' }; // name과 age를 가리키는 레퍼런스
const user2 = user; // 'user'의 레퍼런스를 클로닝
console.log(user);

user2.name = 'Bali';
console.log(user);

// Object copy(복제)
// old way
const user3 = {};
for (let key in user) {
	user3[key] = user[key];
}
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user); // 축약~
console.log(user4);


console.log('\nAnother example - Mixed');
// Another example
// mixed : 뒤에 있는 값을 앞에 값에 덮어쓴다~
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);