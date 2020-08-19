'use strict';

// Q1. make a string out of an array
{
	console.log('\nQ1 result');
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join();
	console.log(result);
}


// Q2. make an array out of a string
{
	console.log('\nQ2 result');
	const fruits = '🍎, 🥝, 🍌, 🍒';
	const result = fruits.split(','); // 구분자를 꼭 전달하자~!
	console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	console.log('\nQ3 result');
	const array = [1, 2, 3, 4, 5];
	const result = array.reverse();
	console.log(result); // 배열 자체의 값을 뒤집어 준다!
	console.log(array);
}

// Q4. make new array without the first two elements
// slice 는 기존 배열에서 원하는 부분만 가져올때~!
{
	console.log('\nQ4 result');
	const array = [1, 2, 3, 4, 5];
	// const result = array.splice(0, 2); <- 기존 배열을 그대로 사용
	const result = array.slice(2, 5); // 마지막 값은 배제된다~
	console.log(result);
	console.log(array);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
	console.log('\nQ5 result');
	// const result = students.find(function (student, index) {
	// 	// console.log(student, index);
	// 	return student.score === 90;
	// })
	const result = students.find((student) => student.score === 90);
	console.log(result);
}

// Q6. make an array of enrolled students
{
	console.log('\nQ6 result');
	const result = students.filter((student) => student.enrolled);
	console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	console.log('\nQ7 result');
	const result = students.map((student) => student.score);
	// 콜백 함수의 인자는 최대한 이해하기 쉽게 네이밍 할 것!
	console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 50점보다 작은 점수가 있는지?
{
	console.log('\nQ8 result');
	const result = students.some((student) => student.score < 50); // or
	console.log(result);
	const result2 = students.every((student) => student.score >= 50); // and
	console.log(result2);
}

// Q9. compute students' average score
{
	console.log('\nQ9 result');
	// const result = students.reduce((prev, curr) => { // recuceRight(거꾸로~)
	// 	return prev + curr.score;
	// }, 0); // Initial value!
	const result = students.reduce((prev, curr) => prev + curr.score, 0);
	console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	console.log('\nQ10 result');
	const result = students
		.map((student) => student.score)
		.filter((score) => score >= 50)
		.join();
	console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
	console.log('\nBonus result');
	const result = students.map((student) => student.score)
		.sort((a, b) => a - b)
		.join();
	console.log(result);
}

// 아~ API 보는 법은 먼저 배워야 하나? 닭이 먼저인가? 달걀이 먼저인가?