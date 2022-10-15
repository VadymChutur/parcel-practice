// import BSN from 'bootstrap.native';
// console.log('before set timeout');

// setTimeout(
//   x => {
//     console.log(x);
//     console.log('1 in set timeout');
//   },
//   2000,
//   5
// );

// setTimeout(
//   y => {
//     console.log(y);
//     console.log('2 in set timeout');
//   },
//   100,
//   10
// );

// console.log('after set timeout');

// const logger = time => {
//   console.log(`log by ${time}`);
// };

// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// const logger = time => console.log(`log everyone ${time}ms - ${Date.now()}`);

// console.log('before setInterval');
// // setInterval(logger, 2000, 2000);
// console.log('after setInterval');

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }

// const intarvalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscription) {
//     console.log('stoped interval');
//     clearInterval(intarvalId);
//     return;
//   }

//   console.log('subsribe - ' + Date.now());
//   promptCounter += 1;
// }, PROMP_DELAY);

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBTN: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// const modal = new BSN.Modal('#subscription-modal');
// let promptCounter = 0;
// let hasSubscription = false;

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);

// refs.subscribeBTN.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscription) {
//     return;
//   }

//   setTimeout(() => {
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscription = true;
//   modal.hide();
// }

// const date = Date.now();

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log(date);
//   console.log(date2);
//   console.log(date2 - date);
// }, 3000);

// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const curentTime = Date.now();
//       const deltaTime = curentTime - startTime;
//       const { hours, mins, secs } = getTimeComponents(deltaTime);

//       //   console.log(curentTime);
//       console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
// };

// // timer.start();

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('This fine');
//     }

//     reject('This fail');
//   }, 1000);
// });

// // promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// // console.log(promise);

// promise
//   .then(onFulfilled, onRejected)
//   .then(result => {
//     console.log(result);

//     return 5;
//   })
//   .then(x => {
//     console.log(x);

//     return x + x;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => {
//     console.log('i finished');
//   });

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('this is your dish');
//       } else {
//         reject('sorry not a product');
//       }
//     }, DELAY);
//   });
// };

// makeOrder('pirojok').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// const makeOrder = dish => {
//   return Promise.resolve('this is your dish');
// };

// makeOrder('pirojok').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// const makePromise = () => {
//   return new Promise((reslove, reject) => {
//     reslove('this work');
//   });
// };

// makePromise().then(result => console.log(result));
// const horses = [
//   'Secretar',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];

// console.log('%c Rasing Start rates not give!', 'color: red; font-size: 14px;');

// const promises = horses.map(race);

// Promise.race(promises)
//   .then(({ horse, time }) => {
//     console.log(
//       `%c Winner ${horse}, finished time ${time}`,
//       'color: green; font-size:14px;'
//     );
//   })
//   .catch(e => console.log(e));

// Promise.all(promises).then(() => {
//   console.log('%c Race finished, rates give!', 'color: blue; font-size: 14px;');
// });

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function race(horse) {
//   return new Promise((reslove, reject) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       reslove({ horse, time });
//     }, time);
//   });
// }
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service.js';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemonResponse(searchQuery)
    .then(renderPokemonCard)
    .catch(onError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContiner.innerHTML = markup;
}

function onError(error) {
  alert('Vse propalo');
}

////////////////////////////////////////////////////////////////////

// pokemon?limit=100000&offset=0.
