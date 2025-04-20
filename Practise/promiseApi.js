const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Resolved");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Rejected");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Resolved");
  }, 5000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Some thing went wrong");
//   });

///////////////////////////////////////// Promise.allSettle() ////////////////////

// Promise.allSettled([p1, p2, p3]).then((res) => {
//   console.log(res);         //[
// //     { status: 'fulfilled', value: 'P1 Resolved' },
// //     { status: 'rejected', reason: 'P2 Resolved' },
// //     { status: 'fulfilled', value: 'P3 Resolved' }
// //   ]
// });

////////////////////////////////////////// Promise.race() /////////////////////////
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);         // P2 Rejected
//   });

////////////////////////////////////////// promise.any() /////////////////////////
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
