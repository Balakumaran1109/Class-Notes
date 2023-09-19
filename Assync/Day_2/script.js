// let promiseObj = new Promise((resolve, reject)=>{
//     console.log("Promise object is executed");
//     // reject("Reject is called");
//     resolve("Resolve is activated");
// });

// console.log(promiseObj);

// promiseObj
//     .then(
//     (val)=>{
//         console.log(`Using then ${val}`);
//     }
//     .catch(
//     (err)=>{
//         console.log(`Using catch ${err}`);
//     });


let promiseObj = new Promise((resolve, reject)=>{
    // resolve("resolve is invoked");
    reject("reject is invoked");
})

// console.log(promiseObj);
promiseObj.then((val)=>{
    console.log(val, "Item is available");
},
(err)=>{
    console.log(err, "Item is not available");
})
// .catch((err)=>{
//     console.log(err, "Item is not available");
// })