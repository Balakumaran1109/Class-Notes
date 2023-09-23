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


//    function database(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let result = "Item is available";
//         resolve(result);
//         },4000)
       
//     }
//    )}

//    async function placeOrder(){
//     try{
//         console.log("Checking for Availability");
//         console.log("Click here to place ur order")
//         let msg = await database();
//         console.log(msg);
//         console.log("Confirm your Order")
        
//     }
//     catch(err){
//         console.log("Error occured", err);
//     }
//    }
   

//    placeOrder()



// function add(a, b){
//     try{
//         if(b>a){
//             throw new Error ("b is greater than a")
//         }
//         console.log("Result: ", a + b);
//     }
//     catch(err){
//         console.log("Error occured:", err)
//     }
// }
 
// add(31, 30)


function checkSeats(seatNo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(seatNo === "a10"){
        resolve("Seat is available")
    }else{
        reject("Sry... Seat is not available")
    }
    },4000)
        
    })
}

async function bookTickets(){
    try{
        console.log("Click to book ur tickets")
        console.log("Wait, checking for availability")
        let data = await checkSeats("a10")
        console.log(data)
        console.log("Click here to book the ticket")
        
    }
    catch(err){
        console.log(err)
    }
}

bookTickets()