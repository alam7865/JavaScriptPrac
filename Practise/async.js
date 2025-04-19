// async function getdata() {
//   return "Namaste🙏";
// }

// const data = getdata();
// // console.log(data);
// data.then((res) => {
//   console.log(res);
// });

/////////////////////////////////////

// const pr = new Promise((resolve, reject) => {
//   resolve("Promise Resolved 😊");
// });

// async function getData() {
//   return pr;
// }

// const dataPromise = getData();
// dataPromise.then((res) => {
//   console.log(res);
// });

///////////////////////////////// Without using pr ////////////////////////////
const pr = new Promise((reslove, rejected) => {
  reslove("SAb Changa Si");
});

function getData() {
  pr.then((res) => {
    console.log(pr);
  });
}

getData();
