'use strict';

// JavaScript is synchronous.
// Excute the code block by arger after hoisting.
// 정해진 순서에 맞게 코드가 실행된다~
// hoisting: var, function declaration

console.log('1');
// setTimeout(function () {
// 	console.log('2');
// }, 1000);
setTimeout(() => console.log('2'), 1000);
console.log('3');


// 1. Synchrounous callbacks
function printImmediately(print) { // 함수는 hoisting~
	print();
}
printImmediately(() => console.log('hello'));


// 2. Asynchrounous callback
function printWithDelay(print, timeout) { // 함수는 hoisting~
	setTimeout(print, timeout);
}
printWithDelay(() => console.log(`async callback`), 2000);


// Callback Hell example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === 'ellie' && password === 'dream') ||
				(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'ellie') {
				onSuccess({ name: 'ellie', role: 'admin' });
			} else {
				onError(new Error('no access'));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
	id, password, user => {
		userStorage.getRoles(
			user, userWithRole => {
				alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
			},
			error => {
				console.log(error);
			}
		);
	},
	error => {
		console.log(error)
	}
);
