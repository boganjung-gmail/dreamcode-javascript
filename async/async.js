'user strict';

// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs....
//     resolve('bali');
//   });
// }
async function fetchUser() {
  // do network request in 10 secs....
  return 'bali';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// async 함수 안에서만 사용할 수 있다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

// function.getBanana() {
// 	return delay(3000).then(() => '🍌');
// }
async function getBanana() {
  await delay(1000);
  return '🍌';
}

// function pickFruits() {
//   return getApple() //
//     .then((apple) => {
//       return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// }
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
