'use strict';

// Object-oriented programmin
// class: template
// Object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance <- 문법상으로만 구현~

console.log('1. String concatenation');
// 1. Class declarations
class Person {
	// constructor <- 생성자
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}
	// methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

console.log('\n2. Getter and setters');
// 2. Getter and setters
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age; // setter를 호출하고 바로 getter의 age을 가져오기에 call stack error가 날 수 있다.
	}
	get age() {
		//return this.age;
		return this._age;
	}
	set age(value) {
		//this.age = value;
		//this._age = value; <- 변수 명을 다르게

		// if (value < 0) {
		// 	throw Error('Age can not be negative');
		// }
		// this._age = value;
		this._age = value < 0 ? 0 : value; // 값이 0 보다 작으면 0 이고 아니면 값을 대입하는 삼항연산
	}
}

const user1 = new User('Stive', 'Job', -1);
console.log(user1.age);

console.log('\n3. Field (public, private)');
// 3. Field (public, private)
// Too soon!
// https://develper.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
	// 생성자(constructor)를 사용하지 않은 것이 포인트
	publicField = 2;
	#privateField = 0; // class 내부에서만 접근 가능
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

console.log('\n4. Static properties and methods');
// 4. Static properties and methods
// Too soon!
// Type Script에서 많이 사용된다!
// Object에 상관없이, 들어오는 데이터에 상관없이 공통적으로 사용되는 데이터 처리 
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

console.log('\n5. Inheritance(상속)');
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	// method
	draw() {
		console.log(`Drawing ${this.color} color!`);
	}

	// method
	getArea() {
		return this.width * this.height;
	}
}

// 기존 Shape class를 extends(연장~)
class Rectangle extends Shape { }

// 필요한 함수의 오버라이딩(Overriding)
class Triangle extends Shape {
	draw() {
		super.draw(); // 부모의 draw method를 호출할 수 있다.
		console.log('🔼');
	}
	getArea() {
		return (this.width * this.height) / 2;
	}
	toString() {
		return `Triangle: color: ${this.color}`;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // 개신기~
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

console.log('\n6. Class checking: instanceof');
// 6. Class checking: instanceOf
// 왼쪽에 있는 애가 오른쪽에 있는 클래스로 만들어 졌는지 확인~
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// JavaScript Standard built-in objects..!!
// 엘리쌤 강의 화면으로 실제 해당 페이지 뷰를 찾은 결과 살짝 레이아웃이 변경됨
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects