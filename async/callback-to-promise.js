'user strict';

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'bali' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          // inSuccess(id);
          resolve(id);
        } else {
          // onError(new Error('Sorry, not found'));
          reject(new Error('Sorry, not found'));
        }
      }, 2000);
    });
  }

  // getRoles(user, inSuccess, onError) {
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'bali') {
          // inSuccess({ name: 'bali', role: 'admin' });
          resolve({ name: 'bali', role: 'admin' });
        } else {
          // onError(new Error('No access'));
          reject(new Error('No access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter yout id');
const password = prompt('Enter your password');
userStorage
  .loginUser(id, password) //
  // .then((user) => userStorage.getRoles); || 인자가 동일해서 아래와 같이 줄임
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, your role is ${user.role}`))
  .catch(console.log);

// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRoll) => {
//         alert(`Hello ${userWithRole}, you have a ${userWithRole.role}`);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );
