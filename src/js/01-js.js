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
