// 1. User strict
// added in ES5
// use this for Valine Javascript.
'use strict'; // ECMAScript 5 규격에 맞는 코딩

// 2. 변수, Variable, rw(read & write) - 변경될 수 있는 값
// let (added in ES6)
// Mutable
console.log('\n2. 변수(Variable)');
let globalName = 'global name'; // Global scope, 항상 메모리 할당 상태
{ // Block scope
  let name = 'bali';
  console.log('Variable let: ' + name);
  name = 'Hello Javascript';
  console.log('Redefine variable let: ' + name);
}
console.log('In block variable let: ' + name);
console.log('Global variable let: ' + globalName);

// var (Don't ever use this!) - 확인해보니 겁나 쳐 쓰고 있지만 등짝 스매싱은 불가했다
// var hoisting (Move declaration from bottom to top)
// has no block scope : 블록 스코프 또한 무시된다..!!
// IE는 무시하자! 또한 우리에겐 BABEL이 있다.
console.log('age: ' + age);
age = 4;
console.log('age: ' + age);
var age;

// 3. 상수, Constant > Read Only..!
// 값을 선언한 이후 절대 바꿀 수 없다! 그래서 PHP 중요 설정 값을 const로 설정하는 건가?
console.log('\n3. 상수(Constant)');
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects(i.e object.freeze())
// Mutable data types: all object by default are mutable in JS 
// favor immutable date type always for a few reasons;
// 	- 보안상의 이유(Security)
//	- 쓰레드 안정성(thread safety)
//	- 인간의 실수(reduce human mistakes)

// 4. Variable types
// 4-1. primitive type : single item: number, string, boolean, null, undefine, symbol
// 4-2. object : box container > "Reference > Object > Value"로 접근
// function, "first-class function"이란?
// function을 변수에 할당, 함수의 파라미터(인자), 리턴타입으로도 전달 가능
console.log('\n4. 변수 타입(Variable types)');
const count = 17; // 정수(integer)
const size = 17.1; // 소수(decimal number)
console.log(`Integer value: ${count}, type: ${typeof count}`);
console.log(`Decimal integer value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
console.log('\n4-1. Big Integer');
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log('"1 / 0" = ' + infinity);
console.log('"-1 / 0" = ' + negativeInfinity);
//console.log('"not a number / 2" = ' + nAn);
console.log(`"not a number / 2" = ${nAn}`);

// bigInt (fairly new, don't use it yet) - 새롭게 추가됨
// 새롭게 추가됨 "Can I Use"를 통해 지원 브라우저 확인(8월 18일 현재 사파리에서 오류 확인)
// 숫자 끝에 "n" 추가
console.log('\n4-2. Big Integer');
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2**53
console.log(`bigInt value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
console.log('\n4-3. String');
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ',' + ' type: ' + typeof helloBob);

// Boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
console.log('\n4-4. Boolean, 난 틀리고 아내는 맞다');
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
console.log('\n4-5. null, 공수래');
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined, 값이 아직 정해지지 않은 상태
console.log('\n4-6. undefine, 현재의 나');
//let x = undefined;
let x;
//let x = undefined; 72번과 같은 거임
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자를 만들때 사용한다.
// map, Concurrently code에서 우선순위를 주고자 할때 고유 식별자 부여시 사용
console.log('\n4-7. symbol');
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // symbol1 과 symbol2 는 같지 않다

const gSymbol1 = Symbol.for('id'); // 변수 명은 다르지만 동일한 값을 심볼하는 경우 '.for'
const gSymbol2 = Symbol.for('id'); // 변수 명은 다르지만 동일한 값을 심볼하는 경우 '.for'
console.log(gSymbol1 === gSymbol2); // true
// 심볼은 항상 '.description'을 추가해서 String 으로 변환해 출력해야 한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Object, real-life object, data structue
console.log('\n4-8. symbol');
const bali = { name: 'bali', age: 20 };
console.log(`Name: ${bali.name}, Age: ${bali.age}`);
bali.name = 'Bogan';
bali.age = 46;
console.log(`Name: ${bali.name}, Age: ${bali.age} ㅠㅠ`);

// 5. Dynamic typing: dynamically typed language
console.log('\n5. Dynamically typed language');
let text = 'hello';
console.log(text.charAt(0)); // 여기에선 첫번째 스트링을 가져올 수 있었다.
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 문자와 숫자가 만나 문자가 되버렸네~
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // String number의 연산
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 여기선 'text'가 number로 바뀐 상태로 문자가 아니여서 에러~
// 이래서 "TypeScript"가 나왔고 더불어 "BABEL"이 나왔나 보다..