// let promise = new Promise((resolve,reject)=>{
//     let result = 1
//     if(result>10){
//         resolve(result)
//     }else{
//         reject("result is greater than 10")
//     }
// });
// promise.then(
//     (result)=>console.log('result:',result),
//     (message)=>console.log('error:',reject)
// )



// let delay = (milliseconds) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, milliseconds);
//     });
// };

// let milliseconds = 3000;
// delay(milliseconds)
//     .then(
//         () => console.log(`Promise resolved after ${milliseconds/1000} seconds`)
//     );



//     let checkvalue=(value)=>{
//     return new Promise((resolve,reject)=>{
//         if(value>0){
//         resolve("positive")}
//         else{
//             reject('negative')
//         }
//     })
    
// }

//        let value=-88
        
// checkvalue(value) .then((result)=>console.log(result))
// .catch((message)=>console.log(message))



// Promise chain

let multiplyByTwo = (value) =>{
    return new Promise((resolve,reject)=>{
        if(value>0){
    resolve(value*2)}
    else{
        reject("less than 0")
    }
    })
}


multiplyByTwo(10)
.then((value)=>{
    console.log(value)
   return multiplyByTwo(value)
})

.catch((message)=>{
    console.log(message)
})

.then((value2)=>{
    console.log(value2)
     return multiplyByTwo(value2)
})

.then((value3)=>{
    console.log(value3)
})


    