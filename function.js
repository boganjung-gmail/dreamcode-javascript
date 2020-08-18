'use strict';
// Input > Function > Output

// Function
// - fundamental building block in the program (프로그램 구성 기본 블록)
// - subprogram can be used multiple times (재사용 가능한 서브프로그램)
// - performs a task or calculates a value

console.log('A-1. Function declaration');
// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb (변수는 명사, 함수는 동사로~ )
// e.g. createCardAndPoint -> creatCard, createPoint (두개의 기능은 세분화해서 단순하게~ )
// function is object in JS (javascript에서 function은 객체다~!)
function printHello() {
	console.log('Hello');
}
printHello();

function log(message) { // string인지 number인지 난해하다~
	console.log(message);
}
log('Parameter\'s Hello');
log(12345);

console.log('\nA-2. Function\'s parameter');
// 2. Parameters
// 기본 매개 변수는 값으로 전달(premitive parameters: passed by value)
// object parameters: passed by reference
function changeName(obj) {
	obj.name = 'coder';
}
const bali = { name: 'bali' };
changeName(bali);
console.log(bali);

console.log('\nA-3. Default parameter');
// 3. Default parameters (added in ES6)

function showMessage1(message, from) {
	console.log(`showMessage1: ${message} by ${from}`);
}
showMessage1('Hi!');

function showMessage2(message, from) {
	if (from === undefined) {
		from = 'unknown';
	}
	console.log(`showMessage2: ${message} by ${from}`);
}
showMessage2('Hi!');

function showMessage3(message, from = 'unknown') {
	console.log(`showMessage3: ${message} by ${from}`);
}
showMessage3('Hi!');

console.log('\nA-4. Rest parameter');
// 4. Rest parameters (added in ES6)
// 배열로 파라미터를 전달
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
	// 간단하게 표현
	for (const arg of args) {
		console.log(arg);
	}
	// 더 간단하게(한줄로~)
	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

console.log('\nA-5. Local scope');
// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서는 밖을 볼 수 있다!
let globalMessage = 'global'; // Global variable
function printMessage() {
	let message = 'Aloha~';
	console.log(message); // Local variable
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'Bonjour~'
	}
	// console.log(childMessage); <- 이건 에러~
	return undefined; // 모든 함수에서 생략 가능
}
printMessage();

console.log('\nA-6. Return a value');
// 6. Return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

console.log('\nA-7. Recommend Early return, early exit');
// 7. Early return, early exit

// Bad case
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

// Good case, 조건이 맞지 않는 경우를 먼저 실행하여 리턴하는 것을 권장
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic...
}


// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

console.log('\nB-1. Function expression');
// 1. Function expression
// a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is creater when the execution reaches it.
const print = function () { // anonymous function
	console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

console.log('\nB-2. Callback');
// 2. Callback function using function expression, 함수 표현식을 사용한 콜백 함수~
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}
// anonymous function
const printYes = function () {
	console.log(`Yes, I love you to!`);
};
// named function <- Recommend!
// better debugging in debugger's stack traces
// recurisions
const printNo = function print() {
	console.log('No, I hate you!');
	// print(); <- 실행시 "recurisions" Maximum call stack error 발생~
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

console.log('\nB-3. Arrow function');
// Arrow function
// always anonymous ~이말인즉 이름없는 함수에서나 사용한다는 의미로 해석될 수 있다~!

// const simplePrint = function () {
// 	console.log('simplePrint');
// }
const simplePrint = () => console.log('simplePrint');

// case 1
const add1 = (a, b) => a + b;
// case 2
const add2 = function (a, b) {
	return a + b;
}
// case 3
const add3 = (a, b) => {
	// do something more
	return 'return add3: ' + a * b;
}
console.log(`${add3(2, 3)}`);

console.log('\nB-4. IIFE');
// IIFE: Immediately Invoked Function Expression
function hello(msg) {
	console.log(msg);
}
hello('Hello');
// 함수를 선언과 동시에 호출
(function aloha() {
	console.log('Aloha IIFE');
})();
(function Bonjour(msg) {
	console.log(msg);
})('Bonjour IIFE');

console.log('\nGod damn quiz 💔!');
// Fun quiz time💔
// function calculate(command, a, b)
// command: add, substract, divide, mulitiply, remainder

function myCalc(command, a, b) {
	switch (command) {
		case 'add':
			return a + b;
		case 'substract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remainder':
			return a % b;
		default:
			console.log('Same all!');
			break;
	}
}
console.log(myCalc('add', 5, 10));
console.log(myCalc('substract', 5, 10));
console.log(myCalc('divide', 5, 10));
console.log(myCalc('multiply', 5, 10));
console.log(myCalc('remainder', 5, 10));
console.log(myCalc('unknown', 5, 10));

function calculate(command, a, b) {
	switch (command) {
		case 'add':
			return a + b;
		case 'substract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remainder':
			return a % b;
		default:
			throw Error('God damn! Unknown command error!');
	}
}
console.log(calculate('test', 2, 2));