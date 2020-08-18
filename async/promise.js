'user strict';

// Promise is a Javascript object for asynchronaus operation.
// state: pending -> fullfilled or rejected
// Producer vs Consumenr

// 1. Producer
// when new Promise is created, the executer runs automatically.
// 새로운 프로미스를 생성하면 엑스큐터가 자동으로 실행되는 것에 유의하자!
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (Network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('Bogan');
    // reject(new Error('No network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 어떤 기능을 마지막으로 실행하고 싶을때!
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`getEgg error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  // .then((hen) => getEgg(hen))
  // .then((egg) => cook(egg))
  // .then((meal) => console.log(meal));
  .then(getEgg)
  // 닭이 죽어 달걀을 못받았을 때
  .catch((error) => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log); // getEgg의 에러 캐치
