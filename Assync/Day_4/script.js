// function calculate(input){
//     try{
//         output = eval(input);
//         if(output < 0){
//             throw new Error("Negative value");
//         }
//         else {
//             return document.getElementById("container").innerText = output;
//         }
//     }
//     catch(err){
//         return document.getElementById("container").innerText = "Negative value";
//     }
// }

//    calculate(-12+2);


   function confirmOrder(){
    return new Promise((resolve, reject)=>{
       let result = "Checking for availability";
        resolve(result);
    }
   )}

   async function placeOrder(){
    console.log("click here to confirm ur order")
    try{
        let msg = await confirmOrder();
        console.log(msg);
        console.log("Item is available");
    }
    catch(err){
        console.log("Error occured", err);
    }
   }
   

   placeOrder()