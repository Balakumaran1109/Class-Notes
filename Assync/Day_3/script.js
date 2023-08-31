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



let url = "https://restcountries.com/v3.1/all";

fetch(url).then((response)=>{
    if(response.status === 200){
    return response.json();
    }
}).then((val)=>{
    console.log(val)
    for(i of val){
    if(i.name.common === "India")
    console.log(i.flag);
    }
})
.catch((err)=>{
    console.log(err)
})