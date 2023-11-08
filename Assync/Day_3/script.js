// function promiseChain1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Chain 1 executed");
//         },1000);
//     });
// };

// function promiseChain2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Chain 2 executed");
//         },2000);
//     });
// };

// function promiseChain3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Chain 3 executed");
//         },3000);
//     });
// };

// Promise.all([promiseChain1() ,promiseChain2(), promiseChain3()])
// .then((val)=>{
//     console.log(val.join("\n"));
// })

// .catch((err)=>{
//     console.log(err);
// });

// let url = "https://restcountries.com/v3.1/all";

// fetch(url).then((response)=>{
//     if(response.status === 200){
//     return response.json();
//     }
// }).then((val)=>{
//     console.log(val)
//     for(i of val){
//     if(i.name.common === "India")
//     console.log(i.flag);
//     }
// })
// .catch((err)=>{
//     console.log(err)
// })

// async function fetchData() {
//     const apiUrl = "https://restcountries.com/v3.1/all";
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       for (var i = 0; i < data.length; i++) {
//         if (data[i].name.common == "Peru") {
//           console.log(data[i].flag);
//         }
//       }
//     } catch (err) {
//       console.log("Error fetching Data: ", err);
//     }
//   }

//   fetchData();
// fetch(apiUrl)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//       //   console.log("$$%$%$%$%$%$% ",response.json());
//     }
//   })
//   .then((val) => {
//     console.log(val);
//     for (var i = 0; i < val.length; i++) {
//       if (val[i].name.common == "Peru") {
//         console.log(val[i].flag);
//       }
//     }
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

function promiseObj1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Promise obj1 is defined");
    }, 3000);
  });
}

function promiseObj2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Promise obj2 is defined");
      promiseObj3();
    }, 3000);
  });
}

function promiseObj3() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Promise obj3 is defined");
    }, 3000);
  });
}
promiseObj1()
  .then((val) => {
    console.log(val);
    return promiseObj2();
  })
  .then((val) => {
    console.log(val);
    return promiseObj3();
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
