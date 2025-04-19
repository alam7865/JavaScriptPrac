// const git = "https://api.github.com/users/akshaymarch7";
// const user = fetch(git);
// // console.log(user);
// user.then(function (data) {
//   console.log(data);
// });

// example of call back hell
// const card = ["shoes", "Kurta", "paints"];

// createOrder(card, function (orderId) {
//   proceedTopayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

/////////////////////////////////////////////////////////////////////////////

const card = ["shoes", "paint", "Kurta"];

const promise = createOrder(card);
console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log("Hellllllllllll");
  });

function createOrder(card) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(card)) {
      const err = new Error("Cart is Not valid");
      reject(err);
    }

    //////////////////////////////////////
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}
// /////////////////////////////

// const card = ["shoes", "paint", "Kurta"];

// const promise = createOrder(card);
// console.log(promise);

// function createOrder(card) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(card)) {
//       const err = new Error("Cart is Not valid");
//       reject(err);
//     }

//     //////////////////////////////////////
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }

// /////////////////////////////
// function validateCart(cart) {
//   return true;
// }
