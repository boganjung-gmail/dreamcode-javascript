'use strict';

// JSON
// JavaScript Object Notation

console.log('1. Object to JSON');
// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // 출력 결과가 Single 이 아닌 Double Quotation 인것을 확인!

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	jump: () => {
		console.log(`${name} can jump`);
	},
};

json = JSON.stringify(rabbit);
console.log(json); // 'jump' 함수가 json data에 포함되지 않는 것을 유념~

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'ellie' : value;
});
console.log(json);


console.log('\n2. JSON to Object');
// 2. JSON to Object
// parse(json)
json - JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // Error

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// http://jsondiff.com/
// https://jsonbeautifier.org/
// https://jsonparser.org/
// https://tools.learningcontainer.com/json-validator/