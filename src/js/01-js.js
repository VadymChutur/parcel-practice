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

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const curentTime = Date.now();
      const deltaTime = curentTime - startTime;
      const { hours, mins, secs } = getTimeComponents(deltaTime);

      //   console.log(curentTime);
      console.log(`${hours}:${mins}:${secs}`);
    }, 1000);
  },
};

// timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}
